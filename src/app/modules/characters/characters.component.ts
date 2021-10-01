import {Component, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {Characters} from "../../models/characters";
import {Table} from "../../models/table";
import {APIService} from "../../services/api.service";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as data from "../../static-data/info_table.json"
import * as houses from "../../static-data/houses.json"

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters: EventEmitter<Characters[]> = new EventEmitter<Characters[]>()
  dataTable: Table[] = JSON.parse(JSON.stringify(data)).default;
  houses: string[] = JSON.parse(JSON.stringify(houses)).default;
  selectHouse!: FormGroup
  house: string = ''

  constructor(private api: APIService, private form: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm()

  }

  createForm() {
    this.selectHouse = this.form.group(
      {
        house: ['', Validators.required]
      }
    )
  }

  checkList() {
    if (this.selectHouse.valid) {
      this.api.getCharacters(this.selectHouse.value['house']).subscribe(res => {
        this.characters.emit(res.map(a => {
          if (a.dateOfBirth) {
            a.age = this.api.calculateAge(a.dateOfBirth)
          }
          return a
        }))
      })
    }
  }

}

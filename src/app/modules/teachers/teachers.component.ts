import {AfterViewInit, Component, ViewChild, OnInit, EventEmitter} from '@angular/core';
import {APIService} from "../../services/api.service";
import {Characters} from "../../models/characters";
import {Observable} from "rxjs";
import {Table} from "../../models/table";
import * as data from "../../static-data/info_table.json"

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  teachers: EventEmitter<Characters[]> = new EventEmitter<Characters[]>()
  dataTable: Table[] = JSON.parse(JSON.stringify(data)).default;

  constructor(private api: APIService) {
  }

  ngOnInit(): void {
    this.api.getTeachers().subscribe(res => {
      this.teachers.emit(res.map(a => {
        if (a.dateOfBirth) {
          a.age = this.api.calculateAge(a.dateOfBirth)
        }
        return a
      }))
    })
  }
}




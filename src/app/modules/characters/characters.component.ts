import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {Characters} from "../../models/characters";
import {Table} from "../../models/table";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {APIService} from "../../services/api.service";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters!: Observable<Characters[]>;
  dataTable: Table[] = [
    {
      name: 'Image',
      value: 'image',
      type: 'image'
    },
    {
      name: 'Name',
      value: 'name',
      type: 'string'
    },
    {
      name: 'Patronus',
      value: 'patronus',
      type: 'string'
    },
    {
      name: 'Age',
      value: 'dateOfBirth',
      type: 'string'
    }
  ];
  constructor(private api: APIService) { }

  ngOnInit(): void {
    // this.characters = this.api.getCharacters('');
  }

}

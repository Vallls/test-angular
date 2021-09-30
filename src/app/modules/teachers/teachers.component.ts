import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {APIService} from "../../services/api.service";
import {Characters} from "../../models/characters";
import {Observable} from "rxjs";
import {Table} from "../../models/table";

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  teachers!: Observable<Characters[]>;
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

  constructor(private api: APIService) {
  }

  ngOnInit(): void {
    this.teachers = this.api.getTeachers();
  }
}




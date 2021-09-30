import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {Characters} from "../../models/characters";
import {Table} from "../../models/table";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {APIService} from "../../services/api.service";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  students!: Observable<Characters[]>;
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
    this.students = this.api.getStudents();
  }

}

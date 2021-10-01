import {Component, EventEmitter, OnInit} from '@angular/core';
import {Characters} from "../../models/characters";
import {Table} from "../../models/table";
import {APIService} from "../../services/api.service";
import * as data from "../../static-data/info_table.json"
import {MatDialog} from "@angular/material/dialog";
import {ApplicationComponent} from "../../components/modals/application/application.component";
import {take} from "rxjs/operators";
import {Application} from "../../models/application";
import * as status from "../../static-data/status.json"
import {Status} from "../../models/status";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  students: EventEmitter<Characters[]> = new EventEmitter<Characters[]>()
  dataTable: Table[] = JSON.parse(JSON.stringify(data)).default;
  dataStatus: Status[] = JSON.parse(JSON.stringify(status)).default;
  applications: EventEmitter<Application[]> = new EventEmitter<Application[]>();
  dateTableApp: Table[] = [
    {
      "name": "Application Date",
      "value": "application_date",
      "type": "string"
    },
    {
      "name": "Name",
      "value": "name",
      "type": "string"
    },
    {
      "name": "Age",
      "value": "age",
      "type": "number"
    },
    {
      "name": "Status",
      "value": "status",
      "type": "number"
    }]

  constructor(private api: APIService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.api.getStudents().subscribe(res => {
      this.students.emit(res.map(a => {
        if (a.dateOfBirth) {
          a.age = this.api.calculateAge(a.dateOfBirth)
        }
        return a
      }))
      if (JSON.parse(<string>localStorage.getItem("applications"))) {
        this.applications.emit(JSON.parse(<string>localStorage.getItem("applications")).map((a: any) => {
          if (a.status) {
            a.status = this.dataStatus.find(e => e.id = a.status)!.value
          }
          return a
        }))
      } else {
        this.applications.emit([])
      }
    })
  }

  async addApplication() {
    const dialogRef = this.dialog.open(ApplicationComponent, {
      minWidth: '330px',
      panelClass: 'dialog-container',
      disableClose: true, //cerrar al dar click afuera del modal
    })
    await dialogRef.afterClosed().pipe(take(1)).toPromise().then(result => {
      if (result == 'true') {
        this.applications.emit(JSON.parse(<string>localStorage.getItem("applications")).map((a: any) => {
          if (a.status) {
            a.status = this.dataStatus.find(e => e.id = a.status)!.value
          }

          return a
        }))
      }
    });
  }

}

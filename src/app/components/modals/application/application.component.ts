import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {APIService} from "../../../services/api.service";
import {Application} from "../../../models/application";

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  @Output() closeModal: EventEmitter<Application> = new EventEmitter<Application>();
  @Input() id: string = this.data;
  studentForm!: FormGroup;
  date = new Date;
  fecha: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: string,
              public dialog: MatDialog,
              public dialogRef: MatDialogRef<ApplicationComponent>,
              private fb: FormBuilder,
              private datePipe: DatePipe,
              private api: APIService,) {
  }

  ngOnInit(): void {
    this.fecha = this.datePipe.transform(this.date, 'yyyy-MM-dd')
    console.log(this.fecha)
    this.createForm()
  }

  createForm() {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      dateOfBirth: ['', Validators.required]
    })
  }

  getErrorMessage(attribute: any, message?: string) {
    if (this.studentForm?.controls[attribute]?.hasError('required')) {
      return 'Este campo es requerido ';
    }

    return message ? message : 'Por favor, introduzca un valor válido para este campo.';
  }

  addStudent() {
    console.log(this.studentForm.value)
    let arrApplications = []
    if (localStorage.getItem("applications")) {
      arrApplications = JSON.parse(<string>localStorage.getItem("applications"))
      arrApplications.push({
        ...this.studentForm.value,
        application_date: this.fecha,
        status: 1,
        age: this.api.calculateAge(this.studentForm.value['dateOfBirth'])
      })
      console.log('Add', arrApplications)
      localStorage.setItem("applications", JSON.stringify(arrApplications))
    } else {
      arrApplications.push({
        ...this.studentForm.value,
        application_date: this.fecha,
        status: 1,
        age: this.api.calculateAge(this.studentForm.value['dateOfBirth'])
      })
      console.log('Add', arrApplications)
      localStorage.setItem("applications", JSON.stringify(arrApplications))
    }
  }

}

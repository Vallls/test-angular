import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlertComponent} from "../components/modals/alert/alert.component";
import {ApplicationComponent} from "../components/modals/application/application.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularMaterialModule} from "../material.module";
import {TableComponent} from "../components/table/table.component";


@NgModule({
  declarations: [
    AlertComponent,
    ApplicationComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,
    TableComponent,
  ]
})
export class SharedModule {
}

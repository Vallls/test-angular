import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {ApplicationComponent} from "../components/modals/application/application.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularMaterialModule} from "../material.module";
import {TableComponent} from "../components/table/table.component";


@NgModule({
  declarations: [
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
  ],
  providers: [
    DatePipe
  ]
})
export class SharedModule {
}

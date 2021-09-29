import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './navigation/navbar/navbar.component';
import {AngularMaterialModule} from "./material.module";
import {ToastrModule} from 'ngx-toastr';
import {MatRippleModule} from "@angular/material/core";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AngularMaterialModule,
        ToastrModule.forRoot(),
        MatRippleModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

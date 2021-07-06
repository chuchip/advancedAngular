import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularMaterialModule}  from './shared/angular-material';
import { ReactiveFormsModule } from '@angular/forms';
import localeEs from '@angular/common/locales/es';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';

export const DateFormat = {
  parse: {
  dateInput: 'input',
  },
 display: {
 dateInput: 'MM/DD/YYYY',
 monthYearLabel: 'MMMM YYYY',
 dateA11yLabel: 'MM/DD/YYYY',
 monthYearA11yLabel: 'MMMM YYYY',
 }
 };

 
 @NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    HeroFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    BrowserAnimationsModule,    
    HttpClientModule
  ],
  providers: [   { provide: LOCALE_ID, useValue: 'es' }, { provide: MAT_DATE_FORMATS, useValue: DateFormat } ],
  bootstrap: [AppComponent]
})
export class AppModule { }

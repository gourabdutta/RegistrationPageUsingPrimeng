import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './User/add-user/add-user.component';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    PanelModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    RadioButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

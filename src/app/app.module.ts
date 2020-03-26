import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ManagerComponent } from './manager/manager.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, ManagerComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

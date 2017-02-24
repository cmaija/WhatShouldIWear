import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ClosetComponent} from "./closet/closet.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [ BrowserModule,
            FormsModule],
  declarations: [
      AppComponent,
      ClosetComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

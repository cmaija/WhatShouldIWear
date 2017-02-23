import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ClosetComponent} from "./closet/closet.component";

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
      AppComponent,
      ClosetComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSliderModule } from "@angular/material/slider";
import { LojaComponent } from './components/loja/loja.component';
import { AppRouting } from "./app.routing";
import { HomeComponent } from './components/home/home.component';
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    LojaComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    AppRouting,
    MatInputModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

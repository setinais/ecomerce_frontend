import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {LojaComponent} from "./components/loja/loja.component";
import {HomeComponent} from "./components/home/home.component"; // CLI imports router

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'loja', component: LojaComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRouting { }

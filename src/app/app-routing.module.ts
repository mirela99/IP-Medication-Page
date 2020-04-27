import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {MedicamenteComponent} from './medicamente/medicamente.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component : HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'medicamente',
    component: MedicamenteComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

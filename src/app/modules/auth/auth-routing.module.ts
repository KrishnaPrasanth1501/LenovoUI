import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserAuthComponent } from './user-auth/user-auth.component';


const routes: Routes = [
  { path: 'auth',component:UserAuthComponent},
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AuthRoutingModule { }

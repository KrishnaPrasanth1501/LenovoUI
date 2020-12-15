import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'adminSignin',
    pathMatch:'full'
  },
  { 
    path: 'userSignin',
    component:UserAuthComponent
  },
  { 
    path:'adminSignin',
    component:AdminAuthComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class AuthRoutingModule { }

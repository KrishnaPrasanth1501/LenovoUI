import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { LiveUsersComponent } from './live-users/live-users.component';
import { PostEventAnalyticsComponent } from './post-event-analytics/post-event-analytics.component';
import { UserBasedAnalyticsComponent } from './user-based-analytics/user-based-analytics.component';
const routes: Routes = [
  {path:'',redirectTo:'liveUsers',pathMatch:'full'},
  {path:'liveUsers',component:LiveUsersComponent},
  {path:'postevents',component:PostEventAnalyticsComponent},
  {path:'userbased',component:UserBasedAnalyticsComponent},
  // {path:'signin',loadChildren : ()=>import('./modules/auth/auth.module').then(m=>m.AuthModule)},
  // {path:'dashboard',loadChildren:()=>import('./modules/lobby/admin-dashboard/admin-dashboard.module').then(m=>m.AdminDashboardModule)},
  {path:'**',component:PageNotFoundComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { LiveUsersComponent } from './live-users/live-users.component';
import { PostEventAnalyticsComponent } from './post-event-analytics/post-event-analytics.component';
import { UserBasedAnalyticsComponent } from './user-based-analytics/user-based-analytics.component';
import { AuthGuard } from 'src/app/services/auth.guard';
const routes: Routes = [
  {
    path:'',
    redirectTo:'liveUsers',
    pathMatch:'full'
  },
  {
  path:'liveUsers',
  component:LiveUsersComponent,
  canActivate:[AuthGuard]
  },
  {
    path:'postevents',
    component:PostEventAnalyticsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'userbased',
    component:UserBasedAnalyticsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'**',
    component:PageNotFoundComponent,
    canActivate:[AuthGuard]
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }

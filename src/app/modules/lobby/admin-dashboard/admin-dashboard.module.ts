import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { LiveUsersComponent } from './live-users/live-users.component';
import { PostEventAnalyticsComponent } from './post-event-analytics/post-event-analytics.component';
import { UserBasedAnalyticsComponent } from './user-based-analytics/user-based-analytics.component';
import { ListOfCountriesComponent } from './list-of-countries/list-of-countries.component';



@NgModule({
  declarations: [LiveUsersComponent, PostEventAnalyticsComponent, UserBasedAnalyticsComponent, ListOfCountriesComponent],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule
  ]
})
export class AdminDashboardModule { }

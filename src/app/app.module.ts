import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminDashboardModule } from './modules/lobby/admin-dashboard/admin-dashboard.module';
import { ApiService } from './services/api-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './services/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AdminDashboardModule
  ],
  providers: [HttpClient,ApiService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule, ɵflushModuleScopingQueueAsMuchAsPossible } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserAuthComponent } from './modules/auth/user-auth/user-auth.component';
import { ListOfCountriesComponent } from './modules/lobby/admin-dashboard/list-of-countries/list-of-countries.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'signin',
    pathMatch:'full',
  },
  {
    path:'signin',
    loadChildren : ()=>import('./modules/auth/auth.module').then(m=>m.AuthModule),
  },
  {
    path:'dashboard',
    loadChildren:()=>import('./modules/lobby/admin-dashboard/admin-dashboard.module').then(m=>m.AdminDashboardModule),
    canActivate:[AuthGuard]
  },
  {
    path:'**',
    component:PageNotFoundComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }

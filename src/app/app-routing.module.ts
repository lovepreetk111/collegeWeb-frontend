import { Component, NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './dashboard-page/Auth/adminlogin/adminlogin.component';
import { AuthGuard } from './dashboard-page/Auth/auth.guard';
import { SuperadminComponent } from './dashboard-page/Auth/superadmin/superadmin.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'superadminlogin',
    component: AdminloginComponent,
  },
  {
    path:'superadmin',
    component:SuperadminComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "pages", loadChildren: () => import('./pages/pages.module')
      .then(mod => mod.PagesModule)
  },
  {
    path: "admin", loadChildren: () => import('./dashboard-page/dashboard-page.module')
      .then(mod => mod.DashboardPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
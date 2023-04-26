import { Component, NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './dashboard-page/Auth/adminlogin/adminlogin.component';

import { SuperadminComponent } from './dashboard-page/Auth/superadmin/superadmin.component';
import { HomeComponent } from './home/home.component';
import { AdminGuard } from './dashboard-page/Auth/admin.guard';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'superadminlogin',
    component: AdminloginComponent,
  },
  {
    path:'superadmin',
    component:SuperadminComponent,
    canActivate:[AdminGuard]
  },
  {
    path: "pages", loadChildren: () => import('./pages/pages.module')
      .then(mod => mod.PagesModule)
  },
  {
    path: "admin", loadChildren: () => import('./dashboard-page/dashboard-page.module')
      .then(mod => mod.DashboardPageModule)
  },
  {
    path:"error404", component: ErrorPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
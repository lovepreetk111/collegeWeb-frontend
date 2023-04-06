import { Component, NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
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
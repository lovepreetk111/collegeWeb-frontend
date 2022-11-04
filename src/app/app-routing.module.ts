import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CourseComponent } from './pages/course/course.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactUsComponent
  },
  {
    path:'course',
    component:CourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

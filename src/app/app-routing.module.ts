import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { placements } from '@popperjs/core';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CourseSub1Component } from './pages/course-sub1/course-sub1.component';
import { CourseComponent } from './pages/course/course.component';
import { EventSub1Component } from './pages/event-sub1/event-sub1.component';
import { EventComponent } from './pages/event/event.component';
import { ExaminationComponent } from './pages/examination/examination.component';
import { HomeComponent } from './pages/home/home.component';

import { NoticeComponent } from './pages/notice/notice.component';
import { PlacementComponent } from './pages/placement/placement.component';
import { ResearchComponent } from './research/research.component';

import { StudentSupportComponent } from './pages/student-support/student-support.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {
    path:'about/:aboutpage',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactUsComponent
  },
  {
    path:'course',
    component:CourseComponent
  },
  {
    path:'course/:coursename',
    component:CourseSub1Component
  },
  {
    path:'event',
    component:EventComponent
  },
  {
   path:'sc/:scpages',
   component:StudentSupportComponent
  },
 
{
   path:'event/:eventpage',
   component:EventSub1Component
  },
  {
    path:'notice',
    component:NoticeComponent
  },
  {
    path:'placement',
    component:PlacementComponent
  },
  {

    path: 'research',
    component:ResearchComponent
  },

    path:'examination',
    component:ExaminationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
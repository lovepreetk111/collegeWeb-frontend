import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumniComponent } from './alumni/alumni.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CourseComponent } from './course/course.component';
import { CourseSub1Component } from './course-sub1/course-sub1.component';
import { EventComponent } from './event/event.component';
import { StudentSupportComponent } from './student-support/student-support.component';
import { EventSub1Component } from './event-sub1/event-sub1.component';
import { NoticeComponent } from './notice/notice.component';
import { PlacementComponent } from './placement/placement.component';
import { ResearchComponent } from '../research/research.component';
import { ExaminationComponent } from './examination/examination.component';

const routes: Routes = [
  {
    path: 'alumini',
    component: AlumniComponent
  },
  {
    path: 'about/:aboutpage',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactUsComponent
  },
  {
    path: 'course',
    component: CourseComponent
  },
  {
    path: 'course/:coursename',
    component: CourseSub1Component
  },
  {
    path: 'event',
    component: EventComponent
  },
  {
    path: 'sc/:scpages',
    component: StudentSupportComponent
  },
  {
    path: 'event/:eventpage',
    component: EventSub1Component
  },
  {
    path: 'notices',
    component: NoticeComponent
  },
  {
    path: 'placement',
    component: PlacementComponent
  },
  {

    path: 'research',
    component: ResearchComponent
  },
  {
    path: 'examination',
    component: ExaminationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

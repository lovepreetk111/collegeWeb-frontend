import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormComponent } from './Auth/registration-form/registration-form.component';
import { LoginFormComponent } from './Auth/login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './Auth/auth.guard';
import { DCarouselComponent } from './dashboard/DashboardHome/d-carousel/d-carousel.component';
import { DAboutchetanaComponent } from './dashboard/DashboardHome/d-aboutchetana/d-aboutchetana.component';
import { DAcademicsComponent } from './dashboard/DashboardHome/d-academics/d-academics.component';
import { DCampusComponent } from './dashboard/DashboardHome/d-campus/d-campus.component';
import { DTestimonialsComponent } from './dashboard/DashboardHome/d-testimonials/d-testimonials.component';
import { DashnoticeComponent } from './dashnotice/dashnotice.component';
import { CourseComponent } from '../pages/course/course.component';
import { ExaminationComponent } from '../pages/examination/examination.component';
import { PlacementComponent } from '../pages/placement/placement.component';
import { ResearchComponent } from '../research/research.component';
import { StudentSupportComponent } from '../pages/student-support/student-support.component';
import { FYJCComponent } from './pages/courses/Junior college/fyjc/fyjc.component';
import { SYJCComponent } from './pages/courses/Junior college/syjc/syjc.component';
import { BaComponent } from './pages/courses/Degree college/ba/ba.component';
import { BcomComponent } from './pages/courses/Degree college/bcom/bcom.component';
import { BscitComponent } from './pages/courses/CSFC/bscit/bscit.component';
import { BmsComponent } from './pages/courses/CSFC/bms/bms.component';
import { BafComponent } from './pages/courses/CSFC/baf/baf.component';
import { BmmcComponent } from './pages/courses/CSFC/bmmc/bmmc.component';
import { McomComponent } from './pages/courses/PG/mcom/mcom.component';
import { PhdComComponent } from './pages/courses/Doctoral programme/phd-com/phd-com.component';
import { YcmouComponent } from './pages/courses/Distances learning/ycmou/ycmou.component';
import { AdminloginComponent } from './Auth/adminlogin/adminlogin.component';
import { SuperadminComponent } from './Auth/superadmin/superadmin.component';

const routes: Routes = [
  
  {
    path: 'auth/register', component: RegistrationFormComponent,

  },
  {
    path: 'auth/login', component: LoginFormComponent,
  },

  {
    path: 'dashboard', component: DashboardComponent,
    data: { breadcrumb: 'Dashboard' },
    canActivate: [AuthGuard],

    children: [
      {
        path: 'home/carousel', component: DCarouselComponent,
        data: { breadcrumb: 'Home/carousel' }

      },
      {
        path: 'home/aboutchetana', component: DAboutchetanaComponent,
        data: { breadcrumb: 'Home/About' }

      },
      {
        path: 'home/academics', component: DAcademicsComponent,
        data: { breadcrumb: 'Home/academics' }

      },
      {
        path: 'home/campus', component: DCampusComponent,
        data: { breadcrumb: 'Home/campus' }

      },
      {
        path: 'home/testimonials', component: DTestimonialsComponent,
        data: { breadcrumb: 'Home/testimonial' }

      },
      {
        path: 'notice', component: DashnoticeComponent,
        data: { breadcrumb: 'notice' }

      },
      {
        path: 'page/courses', component: CourseComponent,
        data: { breadcrumb: 'page/course' }
      },
      {
        path: 'page/examination', component: ExaminationComponent,
        data: { breadcrumb: 'page/examination' }
      },
      {
        path: 'page/placement', component: PlacementComponent,
        data: { breadcrumb: 'page/placement' }

      },
      {
        path: 'page/research', component: ResearchComponent,
        data: { breadcrumb: 'page/research' }

      },
      {
        path: 'page/studentscorner', component: StudentSupportComponent,
        data: { breadcrumb: 'page/studentscorner' }

      },
      // junior
      {
        path: 'page/courses/junior/fyjc', component: FYJCComponent,
        data: { breadcrumb: 'page/courses/junior/fyjc' }

      },
      {
        path: 'page/courses/junior/syjc', component: SYJCComponent,
        data: { breadcrumb: 'page/courses/junior/syjc' }

      },
      // degree
      {
        path: 'page/courses/degree/ba', component: BaComponent,
        data: { breadcrumb: 'page/courses/degree/ba' }

      },
      {
        path: 'page/courses/degree/bcom', component: BcomComponent,
        data: { breadcrumb: 'page/courses/degree/bcom' }

      },

      // sfc
      {
        path: 'page/courses/sfc/bscit', component: BscitComponent,
        data: { breadcrumb: 'page/courses/sfc/bscit' }

      },
      {
        path: 'page/courses/sfc/bms', component: BmsComponent,
        data: { breadcrumb: 'page/courses/sfc/bms' }

      },
      {
        path: 'page/courses/sfc/baf', component: BafComponent,
        data: { breadcrumb: 'page/courses/sfc/baf' }

      },
      {
        path: 'page/courses/sfc/bmmc', component: BmmcComponent,
        data: { breadcrumb: 'page/courses/sfc/bmmc' }

      },

      // PG

      {
        path: 'page/courses/pg/mcom', component: McomComponent,
        data: { breadcrumb: 'page/courses/pg/mcom' }

      },

      //doctoral 

      {
        path: 'page/courses/doctoralprogramme/phd', component: PhdComComponent,
        data: { breadcrumb: 'page/courses/doctoralprogramme/phd' }

      },

      //distance

      {
        path: 'page/courses/distancelearning/ycmou', component: YcmouComponent,
        data: { breadcrumb: 'page/courses/distancelearning/ycmou' }

      },

    ]

  },
  {
    path: 'superadminlogin',
    component: AdminloginComponent,
    children: [
      {
        path: 'superadmin',
        component: SuperadminComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardPageRoutingModule { }

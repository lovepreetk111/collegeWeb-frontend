import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-support',
  templateUrl: './student-support.component.html',
  styleUrls: ['./student-support.component.scss']
})
export class StudentSupportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  currentPageIndex = 0;
  pages: any = [
    {
      pageName: 'support',
      component: [
        {
          compId:1,
          compName:"student support",
          metadata:{
            info:
            {
              data: "Anti-Ragging",
            },
            info1:
            {
              data: "National Service Scheme(NSS)",
            },
            info2:
            {
              data: "National Cadet Corps(NCC)",
            },
            info3:
            {
              data: "Equal Opportunity Centre",
            },
            info4:
            {
              data: "Student Council",
            },
            info5:[
              {
              Text:'To prohibit, prevent and eliminate the scourge of ragging including any conduct by any student whether by words spoken or written or by an act which has the effect of teasing, treating or handling with rudeness a fresher or any other student, or indulging in rowdy or undisciplined activities by any student.',
                url:"../../../assets/images/Chetana Building.jpeg",
                alt:"image"              
            }
          ]
            }
        }
      ]
    }
  ]

}

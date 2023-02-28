import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-placement',
  templateUrl: './placement.component.html',
  styleUrls: ['./placement.component.scss']
})
export class PlacementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  currentPageIndex = 0;
  pages: any = [
    {
      pageName: 'Placement',
      component: [
        {
          compId: 1,
          compName: "Placement",
          metadata: {
            imgCmp: [{

              url: "../../../assets/images/ChetanaDC.jpeg",
              alt: "image",
              text: "Placement"
            }],
            objHeader:
            {
              data: "OBJECTIVES OF THE PLACEMENT TEAM",
            },
            objData:
            {
              text: "<li>Coordinating with the companies on their internship and final Placement requirements.<br><br>  <li>            Organising Career Counselling seminars. <br><br><li>             Engagement Activities for Students.              <br><br> <li>              To place the students according to their areas of interest in organizations.  <br><br> <li>            Help students in development of soft skills through various trainings, seminars and workshops. <br><br> <li>             To bridge the gap between college and industries.    <br><br> <li>          To increase awareness amongst current students about placement opportunities in industries and various skill-sets required.",
            },
            
            info5:
            {
              text: "To bring educational opportunities within the reach of the underprivileged section of the society.<br><br>  <li> To bring educational opportunities within the reach of the underprivileged section of the society.  <br><br>  <li>  To impact value-based education to the students. <br><br>  <li>  To bring educational opportunities within the reach of the under-privileged section of society. <br><br>  <li>   To generate academic environment for enabling the students to mould their personalities by imbibing moral values, professional competencies and the spirit of fair competition. <br><br>  <li>   To ensure participation of the student in co-curricular and extra-curricular activities for their balanced development.  <br><br>  <li>   To stimulate the teachers to continuously enrich their knowledge for the benefit of their students and for the well-being of society.  <br><br>  <li>  To provide infrastructural facilities for the benefit of the students and for the social development of the local community.  <br><br>  <li>   To create among the students and the students and the teaching and non-teaching staff a sense pf pride in belonging to the institution so that it channelizes their energies for the progress of the institution.  <br><br>  <li>   To ensure justice and fair play in all academic and non-academic matters affecting the students and the staff.<br><br>  <li>    To encourage the students to aspire for higher achievements and help them unleash their latent abilities and realize their cherished goals.",
            },
          }
        },
        {
          compId: 2,
          compName: "Information Card",
          metadata:

          {
            teamHeader:
            {
              data: "PLACEMENT MANAGING TEAM",
            },
            cardConfig: [
              {
                url: "../../../assets/images/1.jpg",
                alt: "",
                post: "Faculty",
                facultyName: "Lovepreet"
              },
              {
                url: "../../../assets/images/1.jpg",
                alt: "",
                post: "Faculty",
                facultyName: "Lovepreet"
              },
              {
                url: "../../../assets/images/1.jpg",
                alt: "",
                post: "Faculty",
                facultyName: "Lovepreet"
              },
              {
                url: "../../../assets/images/1.jpg",
                alt: "",
                post: "Faculty",
                facultyName: "Lovepreet"
              },
              {
                url: "../../../assets/images/1.jpg",
                alt: "",
                post: "Faculty",
                facultyName: "Lovepreet"
              },
              {
                url: "../../../assets/images/1.jpg",
                alt: "",
                post: "Faculty",
                facultyName: "Lovepreet"
              }
            ],

          }
        },
        {
          compId: 3,
          compName: '3rd comp',
          metadata:
          {
            traningHeader:
            {
              data: "TRAINING AND DEVELOPMENT ACTIVITIES",
            },
            traningData:
            {
              text: "<li>Sanvitti 20 (Panel Discussion) – Creating a Career Path in Entrepreneurship (Session 1), A story of Success of Cricket (Session 2)<br><br>  <li>            Webinar on Journalism in Digital age on Traditional Platform. <br><br><li>             Webinar on Changing Role of Marketing Professionals in Present Times.              <br><br> <li>              On Going Development sessions conducted by HR and Placement Team Students for all classes of SFC.",
            },
          }

        },
        {
          compId: 4,
          compName: "Alumini",
          metadata: {
            alumini:
            {
              data: "OUR ALUMINAI",
            },
          }
        },
        {
          compId: 5,
          compName: "Recutiers",
          metadata: {
            recuriters:
            {
              data: "OUR ESTEEMED RECRUITERS",
            },
          }
        }
      ]
    }
  ]


}




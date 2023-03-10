import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-sub1',
  templateUrl: './event-sub1.component.html',
  styleUrls: ['./event-sub1.component.scss']
})
export class EventSub1Component implements OnInit {


  currentPageIndex = 0;
  // pages: any = [
  //   {
  //     pageName: 'Events',
  //     component: [
  //       {
  //         compId:1,
  //         compName:'Student Detail',
  //         metadata:[
  //             {
  //               url:'../../../assets/images/event.png',
  //               alt:"koi toh imaage",
  //               text:"EVENT DETAILS"

  //             },
  //         ]

  //       }, 

  //       {
  //         compId:2,
  //         compName:'detail',
  //         metadata:
  //         [
  //           {
  //             image:'../../../assets/images/EventPhoto.jpg',
  //             alt:'Pankaj',
  //             date:'20Th Nov',
  //             eventName:'TECHKRITI 1.0',
  //             time:'9:00 to 11:00',
  //             venu:'CHETANA  COLLEGE'
  //           }
  //         ]
  //       },

  //       {
  //         compId:3,
  //         compName:'detail2',
  //         metadata:
  //         [
  //           {
  //             url:'../../../assets/images/EventPhoto.jpg',
  //             alt:'Pankaj'  
  //           }
  //         ]
  //       },

  //     ]
  //   }
  // ]





  /*   pages: any = [
      {
        pageName: 'Events',
        component: [
          {
            compId:1,
            compName:'Student Detail',
            metadata:[
                {
                  url:'../../../assets/images/event.png',
                  alt:"koi toh imaage",
                  text:"EVENT DETAILS"
                  
                },
            ]
          
          }, 
  
          {
            compId:2,
            compName:'detail',
            metadata:
            [
              {
                image:'../../../assets/images/EventPhoto.jpg',
                alt:'Pankaj',
                date:'20Th Nov',
                eventName:'TECHKRITI 1.0',
                time:'9:00 to 11:00',
                venu:'CHETANA  COLLEGE'
              },
              {
                image:'../../../assets/images/EventPhoto.jpg',
                alt:'Pankaj',
                date:'20Th Nov',
                eventName:'TECHKRITI 1.0',
                time:'9:00 to 11:00',
                venu:'CHETANA  COLLEGE'
              },
              {
                image:'../../../assets/images/EventPhoto.jpg',
                alt:'Pankaj',
                date:'20Th Nov',
                eventName:'TECHKRITI 1.0',
                time:'9:00 to 11:00',
                venu:'CHETANA  COLLEGE'
              }
            ]
          },
          
          {
            compId:3,
            compName:'detail2',
            metadata:
            [
              {
                url:'/assets/images/ChetanaDC.jpeg',
                alt:'Pankaj'  
              }
            ]
          },
  
  
          {
            compId:4,
            compName:"aboutUs",
            metadata:{
        
              info4:
              {
                text: "<h2>ADVANCE WEB DEVELOPMENT WORKSHOP <br><br>  <h4>  Time : 9:30am - 4:45pm Venue : Cristal Centre, 254 New Yourk <br><br><p> I must explain to you how all this a mistaken idea of denouncing great explorer of the rut the is lder of human happiness pcias unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit asnatur aut odit aut fugit, sed quia consequuntur magni dolores eos quit.<br><br> <p> I must explain to you how all this a mistaken idea of denouncing great explorer of the rut the is lder of human happiness pcias unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.<br><br> <p> I must explain to you how all this a mistaken idea of denouncing great explorer of the rut the is lder of human happiness pcias unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
              },
             
              }
          },
  
          {  
            compId: 5,
            compName: 'speaker',
            metadata:
            [
            {
              image:'/assets/images/FACULTY.svg',
              alt:'Reddy',
              name:'Saravanan Reddy',
              role:'Course Co-ordinator'
            },
            {
              image:'/assets/images/FACULTY.svg',
              alt:'Reddy',
              name:'Saravanan Reddy',
              role:'Course Co-ordinator'
            },
            {
              image:'/assets/images/FACULTY.svg',
              alt:'Reddy',
              name:'Saravanan Reddy',
              role:'Course Co-ordinator'
            },
  
          ]
          } 
  
        ]
      }
    ] */

  pages: any = [
    {
      pageName: 'techkriti',
      component: [
        {
          compId: 1,
          compName: 'Image Component 1',
          metadata: [
            {
              url: '../../../assets/images/event.png',
              alt: "koi toh imaage",
              text: "Events Details"

            },
          ]

        },
        {
          compId: 2,
          compName: 'detail',
          metadata:
            [
              {
                image: '../../../assets/images/EventPhoto.jpg',
                alt: 'Pankaj',
                date: '20Th Nov',
                eventName: 'TECHKRITI 1.0',
                time: '9:00 to 11:00',
                venu: 'CHETANA  COLLEGE',
                buttonData: "Read More",
                routeLink: 'techkriti'
              },
              {
                image: '../../../assets/images/EventPhoto.jpg',
                alt: 'Pankaj',
                date: '10Th Nov',
                eventName: 'TECHKRITI 2.0',
                time: '9:00 to 11:00',
                venu: 'CHETANA  COLLEGE',
                buttonData: "Read More",
                routeLink: ''
              },
              {
                image: '../../../assets/images/EventPhoto.jpg',
                alt: 'Pankaj',
                date: '20Th Jan',
                eventName: 'TECHKRITI 3.0',
                time: '9:00 to 11:00',
                venu: 'CHETANA  COLLEGE',
                buttonData: "Read More",
                routeLink: ''
              },
              {
                image: '../../../assets/images/EventPhoto.jpg',
                alt: 'Pankaj',
                date: '20Th Jan',
                eventName: 'TECHKRITI 4.0',
                time: '9:00 to 11:00',
                venu: 'CHETANA  COLLEGE',
                buttonData: "Read More",
                routeLink: ''
              },
              {
                image: '../../../assets/images/EventPhoto.jpg',
                alt: 'Pankaj',
                date: '20Th Nov',
                eventName: 'TECHKRITI 5.0',
                time: '9:00 to 11:00',
                venu: 'CHETANA  COLLEGE',
                buttonData: "Read More",
                routeLink: ''
              },
              {
                image: '../../../assets/images/EventPhoto.jpg',
                alt: 'Pankaj',
                date: '20Th Nov',
                eventName: 'TECHKRITI 6.0',
                time: '9:00 to 11:00',
                venu: 'CHETANA  COLLEGE',
                buttonData: "Read More",
                routeLink: ''
              },
              {
                image: '../../../assets/images/EventPhoto.jpg',
                alt: 'Pankaj',
                date: '20Th Nov',
                eventName: 'TECHKRITI 7.0',
                time: '9:00 to 11:00',
                venu: 'CHETANA  COLLEGE',
                buttonData: "Read More",
                routeLink: ''
              },

            ]
        },
        {
          compId: 6,
          compName: 'tab-view',
          metadata: [
            {
              text: "Arts",
              text1: "The B.Sc. IT programme of the University of Mumbai is designed to provide basic inputs for abroad understanding of information technology and its interfaces. The focus is on information technology and IT Management. Today smart, successful businesses use IT to give them an extra-edge to stay ahead of the competition. IT is soon becoming s ‘driver’ rather than an ‘enabler’ of business. It is used for processes like office Automation, Management information",
              text2: "<li>Program Outcome : To apply the IT skills and knowledge acquired in managing and solving real world problems within their work domain.<br> <li> Program Specific Outcome : To recognize the need for and have the preparation and ability to engage and enhance the skills onto the next level of computing.<br> <li> Course Outcome : Enabling and equipping the students with technological skills as per the industry expectation.<br> <li> Student Vision : To prepare a workforce of professionals who exhibit leadership by creating a platform of opportunities which will help them shape themselves as future entrepreneurs. ",
              text3: "Eligibility Criteria",
              text4: "<li> A candidate for being eligible for admission to the degree Course of Bachelor of Science Information Technology shall have passed XII Standard Examination of the Maharashtra board of Higher Secondary Education or its equivalent with Mathematic and Statistics as one of the subject and one should not have secured less than 35% marks in aggregate for open category and Reserved category candidates.<br> <li> Candidate who have passed Diploma (Three years after S.S.C.- Xth Std.) in Information Technology /Computer technology/ Computer Engineering/ Computer Science / Electrical, electronics and video Engineering and allied branches/ Mechanical and ALLIED Branches/ Civil and Allied Branches are eligible for direct admission to the second year of the B.Sc.(I.T) degree Education course. However, the Diploma should have recognized by the Board of Technical Education or any other recognized Government Body. Minimum marks required 35% aggregate for open reserved category candidates<br>",
              text5: "OR",
              text6: "<li> Candidates with post HSC-Diploma in Information Technology / Computer Technology/ Computer Engineering/ Computer Science and allied branches will be eligible for direct admission to the Second year of B.Sc.(I.T) However the Diploma should be recognized by the board of Technical education or any other recognized Government body minimum marks required 35% aggregate for open category candidates and reserved category candidates.<br> <li> P/S Further candidate should note the criteria of admission procedure is as per University of Mumbai<br>",
              text7: "<li> FYBScIT_First Year_Sem 1and 2_2016_17<br> <li> SYBScIT_Second Year__Sem 3and 4_2017_18<br> <li> TYBScIT_Third Year_Sem 5and 6_2018_19<br>",
              text8: "Duration of the programme and related information:",
              text9: "<li> The programme is full time, consisting of six semester spread over three years.<br> <li> The course consists of 30 modules comprising 30 theory papers and 01 project.<br> <li> As per the University guidelines, degree will be conferred under “Choice Based Credit System” with 20 Credit Points per Semester and 10 Point Grading System<br> <li> A total number of lectures per course (subject) shall be a minimum of 50 and a maximum of 60, each of 50 minutes duration.<br>",
              text10: "BScIT SYLLABUS MUMBAI UNIVERSITY",
              link: "https://mu.ac.in/wp-content/uploads/2021/10/B.Sc.I.T-Syllabus-FY-SY-TY.pdf",
              url: "assets/images/FACULTY.svg",
              alt: "don",
              text11: "MR. SARAVANAN REDDY",
              text12: "HOD,Arts"
            }
          ]
        },
      ],

    },
    {
      pageName: 'iskra.tech',
      component: [
        {
          compId: 1,
          compName: 'Image Component 1',
          metadata: [
            {
              url: '../../../assets/images/event.png',
              alt: "koi toh imaage",
              text: "Iskra Details"

            },
          ]

        },
        {
          compId: 2,
          compName: 'detail',
          metadata:
            [
              {
                image: '../../../assets/images/EventPhoto.jpg',
                alt: 'Pankaj',
                date: '20Th Nov',
                eventName: 'TECHKRITI 1.0',
                time: '9:00 to 11:00',
                venu: 'CHETANA  COLLEGE',
                buttonData: "Read More",
                routeLink: 'techkriti'
              },
              {
                image: '../../../assets/images/EventPhoto.jpg',
                alt: 'Pankaj',
                date: '10Th Nov',
                eventName: 'TECHKRITI 2.0',
                time: '9:00 to 11:00',
                venu: 'CHETANA  COLLEGE',
                buttonData: "Read More",
                routeLink: ''
              },
              {
                image: '../../../assets/images/EventPhoto.jpg',
                alt: 'Pankaj',
                date: '20Th Jan',
                eventName: 'TECHKRITI 3.0',
                time: '9:00 to 11:00',
                venu: 'CHETANA  COLLEGE',
                buttonData: "Read More",
                routeLink: ''
              },
              {
                image: '../../../assets/images/EventPhoto.jpg',
                alt: 'Pankaj',
                date: '20Th Jan',
                eventName: 'TECHKRITI 4.0',
                time: '9:00 to 11:00',
                venu: 'CHETANA  COLLEGE',
                buttonData: "Read More",
                routeLink: ''
              },
              {
                image: '../../../assets/images/EventPhoto.jpg',
                alt: 'Pankaj',
                date: '20Th Nov',
                eventName: 'TECHKRITI 5.0',
                time: '9:00 to 11:00',
                venu: 'CHETANA  COLLEGE',
                buttonData: "Read More",
                routeLink: ''
              },
              {
                image: '../../../assets/images/EventPhoto.jpg',
                alt: 'Pankaj',
                date: '20Th Nov',
                eventName: 'TECHKRITI 6.0',
                time: '9:00 to 11:00',
                venu: 'CHETANA  COLLEGE',
                buttonData: "Read More",
                routeLink: ''
              },
              {
                image: '../../../assets/images/EventPhoto.jpg',
                alt: 'Pankaj',
                date: '20Th Nov',
                eventName: 'TECHKRITI 7.0',
                time: '9:00 to 11:00',
                venu: 'CHETANA  COLLEGE',
                buttonData: "Read More",
                routeLink: ''
              },

            ]
        },
        {
          compId: 6,
          compName: 'tab-view',
          metadata: [
            // courseDetails:
            {
              text: "Arts",
              text1: "The B.Sc. IT programme of the University of Mumbai is designed to provide basic inputs for abroad understanding of information technology and its interfaces. The focus is on information technology and IT Management. Today smart, successful businesses use IT to give them an extra-edge to stay ahead of the competition. IT is soon becoming s ‘driver’ rather than an ‘enabler’ of business. It is used for processes like office Automation, Management information",
              text2: "<li>Program Outcome : To apply the IT skills and knowledge acquired in managing and solving real world problems within their work domain.<br> <li> Program Specific Outcome : To recognize the need for and have the preparation and ability to engage and enhance the skills onto the next level of computing.<br> <li> Course Outcome : Enabling and equipping the students with technological skills as per the industry expectation.<br> <li> Student Vision : To prepare a workforce of professionals who exhibit leadership by creating a platform of opportunities which will help them shape themselves as future entrepreneurs. ",
              text3: "Eligibility Criteria",
              text4: "<li> A candidate for being eligible for admission to the degree Course of Bachelor of Science Information Technology shall have passed XII Standard Examination of the Maharashtra board of Higher Secondary Education or its equivalent with Mathematic and Statistics as one of the subject and one should not have secured less than 35% marks in aggregate for open category and Reserved category candidates.<br> <li> Candidate who have passed Diploma (Three years after S.S.C.- Xth Std.) in Information Technology /Computer technology/ Computer Engineering/ Computer Science / Electrical, electronics and video Engineering and allied branches/ Mechanical and ALLIED Branches/ Civil and Allied Branches are eligible for direct admission to the second year of the B.Sc.(I.T) degree Education course. However, the Diploma should have recognized by the Board of Technical Education or any other recognized Government Body. Minimum marks required 35% aggregate for open reserved category candidates<br>",
              text5: "OR",
              text6: "<li> Candidates with post HSC-Diploma in Information Technology / Computer Technology/ Computer Engineering/ Computer Science and allied branches will be eligible for direct admission to the Second year of B.Sc.(I.T) However the Diploma should be recognized by the board of Technical education or any other recognized Government body minimum marks required 35% aggregate for open category candidates and reserved category candidates.<br> <li> P/S Further candidate should note the criteria of admission procedure is as per University of Mumbai<br>",
              text7: "<li> FYBScIT_First Year_Sem 1and 2_2016_17<br> <li> SYBScIT_Second Year__Sem 3and 4_2017_18<br> <li> TYBScIT_Third Year_Sem 5and 6_2018_19<br>",
              text8: "Duration of the programme and related information:",
              text9: "<li> The programme is full time, consisting of six semester spread over three years.<br> <li> The course consists of 30 modules comprising 30 theory papers and 01 project.<br> <li> As per the University guidelines, degree will be conferred under “Choice Based Credit System” with 20 Credit Points per Semester and 10 Point Grading System<br> <li> A total number of lectures per course (subject) shall be a minimum of 50 and a maximum of 60, each of 50 minutes duration.<br>",
              text10: "BScIT SYLLABUS MUMBAI UNIVERSITY",
              link: "https://mu.ac.in/wp-content/uploads/2021/10/B.Sc.I.T-Syllabus-FY-SY-TY.pdf",
              url: "assets/images/FACULTY.svg",
              alt: "don",
              text11: "MR. SARAVANAN REDDY",
              text12: "HOD,Arts"
            }
          ]
        },


      ],

    },
  ]

  constructor(private activeRouter: ActivatedRoute) { }
  ngOnInit():void {
    this.activeRouter.params.subscribe((params: any) => {

      console.log(params)
      const page = params.eventpage;
      const pageIndex = this.pages.findIndex((pg: { pageName: any; }) => pg.pageName === page)
      console.log(this.pages)
      this.currentPageIndex = pageIndex;
    })
  }
}


/* */


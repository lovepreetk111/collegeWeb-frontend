import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-sub1',
  templateUrl: './course-sub1.component.html',
  styleUrls: ['./course-sub1.component.scss']
})
export class CourseSub1Component implements OnInit {
  currentPageIndex = 0;
  page:any;
  pages:Array<any> = [
    {
      pageName: 'bms',
      component: [
        {
          compId:1,
          compName:'Image Component 1',
          metadata:[
              {
                url:'../../../assets/images/Chetana Building.jpeg',
                alt:"koi toh imaage",
                text:"BACHELOR OF MANAGEMENT STUDIES"
              },
            
          ]
        },
        {
          compId:2,
          compName:"card",
          metadata:[
            {
              info:{
                url:'../../../assets/images/Chetana Building.jpeg',
                alt:"koi toh imaage",
                text:"Courses"
              },
              image:[
              {
                url:'../../../assets/images/ChetanaDC.jpeg',
                alt:'detail',
              }
              ],
              cardData:[
                {
                  id:1,
                header:"Course Features",
                feesdetail:"Courses fees is 75000",
                }
              ],
              values:[
                {
                  key:'1',
                  value:"Shubham",
                },
                {
                  key:'2',
                  value:"LP", 
                },
                {
                  key:'3',
                  value:"NIVU",
                }
              ]
            }
          ],
        },
        {
          compId:3,
          compName:"course-sub1",
          metadata:{
            info1:
            {
              url:'../../../assets/images/ChetanaDC.jpeg',
              alt:'bgbgngggngngnggngn',
              text:'Courses'
             },
             coursesImg:
             {
              url:"../../../assets/images/ChetanaDC.jpeg",
              alt:"leftimag1"
             },
             courseDetails:
             {
        
              text:"BACHELOR OF MANAGEMENT STUDIES",
              text1:"The University of Mumbai has introduced the B.M.S. Course to prepare our students Compete in the field of Management of the new millennium with its emphasis success in the dynamic and globally competitive market place. The course has designed to create professionally qualified management executives, with effect and interpersonal communication in the field of management. hard and soft skills related to the operational environment, use of modern technology",
              text2:"<li>Program Outcome : Development of Managerial Skills.<br> <li> Program Specific Outcome : Developing knowledge and other soft skills required to react aptly for critical decision making to play the roles of businessmen, entrepreneurs, managers and consultants.<br> <li> Course Outcome : Learners will gain knowledge of various disciplines of Management, Banking, Production, Taxation, Finance Marketing and Human Resources.<br> <li> Student Vision : To prepare a workforce of professionals who exhibit leadership by creating a platform of opportunities which will help them shape themselves as future entrepreneurs.",
              text3:"Eligibility Criteria",
              text4:"<li> A Candidate for being eligible for admission to the Bachelor of Management Studies Degree Course shall have passed XII Std. Examination of the Maharashtra Board Higher Secondary Education or its equivalent and secured not less than 45% marks aggregate at first attempt (40% in case of reserved category).",
              text7:"<li> Bachelor of Management Studies First Year Semester I and II<br> <li> Bachelor of Management Studies Second Year Semester III and IV <br> <li> Bachelor of Management Studies Third Year Semester V and VI<br>",
              text8:"Duration of the programme and related information:",
              text9:"<li> The programme is full time, consisting of six semesters spread over three years<br> <li> The course consists of 40 modules comprising 39 theory papers and 01 projects<br> <li> A total number of lectures per course (subject) shall be a minimum of 50 and a maximum of 60, each of 50 minutes duration.",
              text10:"B.M.S. SYLLABUS MUMBAI UNIVERSITY",
              link:"https://archive.mu.ac.in/ug144.pdf",
              url:"assets/images/TQ.png",
              alt:"don",
              text11:"MS. TAQDEES SHAIKH",
              text12:"ASST.CHIEF CO-ORDINATOR , HOD Bachelor Of Management Studies"
             }
            },
        },
      ],
      
    },

    {
      pageName: 'baf',
      component: [
        {
          compId:1,
          compName:'Image Component 1',
          metadata:[
              {
                url:'../../../assets/images/Chetana Building.jpeg',
                alt:"koi toh imaage",
                text:"B.COM (ACCOUNTING & FINANCE)"
              },
            
          ]
        },
        {
          compId:2,
          compName:"card",
          metadata:[
            {
              info:{
                url:'../../../assets/images/Chetana Building.jpeg',
                alt:"koi toh imaage",
                text:"Courses"
              },
              image:[
              {
                url:'../../../assets/images/ChetanaDC.jpeg',
                alt:'detail',
              }
              ],
              cardData:[
                {
                  id:1,
                header:"Course Features",
                feesdetail:"Courses fees is 75000",
                }
              ],
              values:[
                {
                  key:'1',
                  value:"Shubham",
                },
                {
                  key:'2',
                  value:"LP", 
                },
                {
                  key:'3',
                  value:"NIVU",
                }
              ]
            }
          ],
        },
        {
          compId:3,
          compName:"course-sub1",
          metadata:{
            info1:
            {
              url:'../../../assets/images/ChetanaDC.jpeg',
              alt:'bgbgngggngngnggngn',
              text:'Courses'
             },
             coursesImg:
             {
              url:"../../../assets/images/ChetanaDC.jpeg",
              alt:"leftimag1"
             },
             courseDetails:
             {
        
              text:"B.COM (ACCOUNTING & FINANCE)",
              text1:"The BAF course provides comprehensive training to students in the field of Accounting & Finance by way of interaction, projects, presentations, industrial visits, practical training, job orientation and placements. It is a perfectly designed full time course for aspiring Chartered Accountants & Financial Analysts. Chartered Accountants / Financial Analysts are known to excel at analysing and understanding the financial structure of a company. They are expected to take the appropriate decision at the right time and ensure that the same are implemented properly. Such are the people required in todayís globally competitive market and such are the people that NM College produces in abundance.",
              text2:"<li> Program Outcome : Proficiency in Finance and Accounting with ethical responsibility.<br> <li> Program Specific Outcome : Students can acquire skills to work as tax consultant, audit assistant and other financial supporting services and also pursue professional courses and also be self-employed.<br> <li> Course Outcome : Gaining knowledge about Accountancy, Finance, Taxation, and Corporate Laws to become employable in the Finance profession.<br> <li> Student Vision : To become finance professionals with integrity and competency to perform finance related activities by enhancing our analytical, managerial and technological skills. ",
              text3:"Eligibility Criteria",
              text4:"<li> A Candidate for being eligible for admission to the Bachelor of Commerce (Accounting & Finance) Degree Course shall have passed XII Std. Examination of the Maharashtra Board of Higher Secondary Education or its equivalent and secured not less than 45% marks in aggregate at first attempt (40% in case of reserved category).",
              text7:"<li> B.Com Accounting and Finance First Year Semester I & II<br> <li> B.Com Accounting and Finance Second Year Semester III & IV<br> <li> B.Com Accounting and Finance Third Year Semester V & VI<br>",
              text8:"Duration of the programme and related information:",
              text9:"<li> The programme is full time, consisting of six semester spread over three years.<br> <li> The course consists of 40 modules comprising 39 theory papers and 01 projects.<br> <li> As per the University guidelines, degree will be conferred under “Choice  Based Credit System” with 20 Credit Points per Semester and 10 Point Grading System.<br> <li> A total number of lectures per course (subject) shall be a minimum of 50 and a maximum of 60, each of 50 minutes duration.<br>",
              text10:"B.A.F. SYLLABUS MUMBAI UNIVERSITY",
              link:"https://old.mu.ac.in/wp-content/uploads/2016/06/4.77-B.Com-Accounting-and-Finance-Semester-I-and-II-Syllabus-with-Course-Structure.pdf",
              url:"assets/images/FACULTY.svg",
              alt:"don",
              text11:"MS. DEBJANI SINGHA",
              text12:"HOD,B.COM In ACCOUNTING & FINANCE"
             }
            },
        },
      ],
      
    },

    {
      pageName: 'bammc',
      component: [
        {
          compId:1,
          compName:'Image Component 1',
          metadata:[
              {
                url:'../../../assets/images/Chetana Building.jpeg',
                alt:"koi toh imaage",
                text:"BACHELOR OF ARTS IN MASS MEDIA COMMUNICATION"
              },
            
          ]
        },
        {
          compId:2,
          compName:"card",
          metadata:[
            {
              info:{
                url:'../../../assets/images/Chetana Building.jpeg',
                alt:"koi toh imaage",
                text:"Courses"
              },
              image:[
              {
                url:'../../../assets/images/ChetanaDC.jpeg',
                alt:'detail',
              }
              ],
              cardData:[
                {
                  id:1,
                header:"Course Features",
                feesdetail:"Courses fees is 75000",
                }
              ],
              values:[
                {
                  key:'1',
                  value:"Shubham",
                },
                {
                  key:'2',
                  value:"LP", 
                },
                {
                  key:'3',
                  value:"NIVU",
                }
              ]
            }
          ],
        },
        {
          compId:3,
          compName:"course-sub1",
          metadata:{
            info1:
            {
              url:'../../../assets/images/ChetanaDC.jpeg',
              alt:'bgbgngggngngnggngn',
              text:'Courses'
             },
             coursesImg:
             {
              url:"../../../assets/images/ChetanaDC.jpeg",
              alt:"leftimag1"
             },
             courseDetails:
             {
        
              text:"BACHELOR OF ARTS IN MASS MEDIA COMMUNICATION",
              text1:"With the global surge in the media industry over the last two decades, there has been distinct need for an academic programme at the undergraduate level that would meet promising career opportunities in the now booming information and communication business. The Bachelors in Mass Media (BMM) programme has been designed with this very agenda – to produce professionals armed with specialized skills in either advertising or journalism.",
              text2:"<li> Program Outcome : Grooming individuals to take up careers in the media industry.<br> <li> Program Specific Outcome : The program enables learners to gain an understanding of the underlying principles of communication and media industry.<br> <li> Course Outcome : Learners will learn the use of language and traditional and modern means of communication to pursue a career in the media field.<br> <li> Student Vision : To prepare a workforce of professionals who exhibit leadership by creating a platform of opportunities which will help them shape themselves as future entrepreneurs.",
              text3:"Eligibility Criteria",
              text4:"<li> A Candidate for being eligible for admission to the degree course in mass media shall have pass Xll std.<br>  <li> Examination of Maharashtra Board of Higher Secondary Education or Its equivalent and secured not less than 35% marks in aggregate at first attempt.",
              text7:"<li> BA in Multimedia and Mass Communication (BAMMC) First Year Sem I & II<br> <li> BA in Multimedia and Mass Communication (BAMMC) First Year Sem I & II<br> <li> BA in Multimedia and Mass Communication (BAMMC) Second Year Sem V & VI<br>",
              text8:"Duration of the programme and related information:",
              text9:"<li> The programme is full time, consisting of six semester spread over three years.<br> <li> The course consists of 36 module<br> <li> As per the University guidelines, degree will be conferred under “Choice Based Credit System” with 20 Credit Points per Semester and 10 Point Grading System<br> <li>A total number of lectures per course (subject) shall be a minimum of 50 and a maximum of 60, each of 50 minutes duration.",
              text10:"B.A.M.M.C. SYLLABUS MUMBAI UNIVERSITY",
              link:"https://mu.ac.in/wp-content/uploads/2020/01/4.8-AND-4.9BAMMC-SYLLABUS-Sem-3-4-5-6-July-25-2019.pdf",
              url:"assets/images/FACULTY.svg",
              alt:"don",
              text11:"?",
              text12:"HOD,Bachelor Of Arts In Multimedia And Mass Communication"
             }
            },
        },
      ],
      
    },

    {
      pageName: 'bscit',
      component: [
        {
          compId:1,
          compName:'Image Component 1',
          metadata:[
              {
                url:'../../../assets/images/Chetana Building.jpeg',
                alt:"koi toh imaage",
                text:"Bachelor of Science in I.T."
              },
            
          ]
        },
        {
          compId:2,
          compName:"card",
          metadata:[
            {
              info:{
                url:'../../../assets/images/Chetana Building.jpeg',
                alt:"koi toh imaage",
                text:"Courses"
              },
              image:[
              {
                url:'../../../assets/images/ChetanaDC.jpeg',
                alt:'detail',
              }
              ],
              cardData:[
                {
                  id:1,
                header:"Course Features",
                feesdetail:"Courses fees is 75000",
                }
              ],
              values:[
                {
                  key:'1',
                  value:"Shubham",
                },
                {
                  key:'2',
                  value:"LP", 
                },
                {
                  key:'3',
                  value:"NIVU",
                }
              ]
            }
          ],
        },
        {
          compId:3,
          compName:"course-sub1",
          metadata:{
            info1:
            {
              url:'../../../assets/images/ChetanaDC.jpeg',
              alt:'bgbgngggngngnggngn',
              text:'Courses'
             },
             coursesImg:
             {
              url:"../../../assets/images/ChetanaDC.jpeg",
              alt:"leftimag1"
             },
             courseDetails:
             {
        
              text:"Bachelor of Science in I.T.",
              text1:"The B.Sc. IT programme of the University of Mumbai is designed to provide basic inputs for abroad understanding of information technology and its interfaces. The focus is on information technology and IT Management. Today smart, successful businesses use IT to give them an extra-edge to stay ahead of the competition. IT is soon becoming s ‘driver’ rather than an ‘enabler’ of business. It is used for processes like office Automation, Management information",
              text2:"<li>Program Outcome : To apply the IT skills and knowledge acquired in managing and solving real world problems within their work domain.<br> <li> Program Specific Outcome : To recognize the need for and have the preparation and ability to engage and enhance the skills onto the next level of computing.<br> <li> Course Outcome : Enabling and equipping the students with technological skills as per the industry expectation.<br> <li> Student Vision : To prepare a workforce of professionals who exhibit leadership by creating a platform of opportunities which will help them shape themselves as future entrepreneurs. ",
              text3:"Eligibility Criteria",
              text4:"<li> A candidate for being eligible for admission to the degree Course of Bachelor of Science Information Technology shall have passed XII Standard Examination of the Maharashtra board of Higher Secondary Education or its equivalent with Mathematic and Statistics as one of the subject and one should not have secured less than 35% marks in aggregate for open category and Reserved category candidates.<br> <li> Candidate who have passed Diploma (Three years after S.S.C.- Xth Std.) in Information Technology /Computer technology/ Computer Engineering/ Computer Science / Electrical, electronics and video Engineering and allied branches/ Mechanical and ALLIED Branches/ Civil and Allied Branches are eligible for direct admission to the second year of the B.Sc.(I.T) degree Education course. However, the Diploma should have recognized by the Board of Technical Education or any other recognized Government Body. Minimum marks required 35% aggregate for open reserved category candidates<br>",
              text5:"OR",
              text6:"<li> Candidates with post HSC-Diploma in Information Technology / Computer Technology/ Computer Engineering/ Computer Science and allied branches will be eligible for direct admission to the Second year of B.Sc.(I.T) However the Diploma should be recognized by the board of Technical education or any other recognized Government body minimum marks required 35% aggregate for open category candidates and reserved category candidates.<br> <li> P/S Further candidate should note the criteria of admission procedure is as per University of Mumbai<br>",
              text7:"<li> FYBScIT_First Year_Sem 1and 2_2016_17<br> <li> SYBScIT_Second Year__Sem 3and 4_2017_18<br> <li> TYBScIT_Third Year_Sem 5and 6_2018_19<br>",
              text8:"Duration of the programme and related information:",
              text9:"<li> The programme is full time, consisting of six semester spread over three years.<br> <li> The course consists of 30 modules comprising 30 theory papers and 01 project.<br> <li> As per the University guidelines, degree will be conferred under “Choice Based Credit System” with 20 Credit Points per Semester and 10 Point Grading System<br> <li> A total number of lectures per course (subject) shall be a minimum of 50 and a maximum of 60, each of 50 minutes duration.<br>",
              text10:"BScIT SYLLABUS MUMBAI UNIVERSITY",
              link:"https://mu.ac.in/wp-content/uploads/2021/10/B.Sc.I.T-Syllabus-FY-SY-TY.pdf",
              url:"assets/images/FACULTY.svg",
              alt:"don",
              text11:"MR. SARAVANAN REDDY",
              text12:"HOD,B.Sc In Information Technology"
             }
            },
        },
      ],
  },
   
    
  ]

  constructor(private activeRouter: ActivatedRoute){}
  ngOnInit(): void {
    this.activeRouter.params.subscribe((params:any)=>{
      // this.pages = new this.pages;
      
      console.log(params)
      const page = params.coursename;
      const pageIndex = this.pages.findIndex(pg => pg.pageName === page)
      console.log(this.pages)
      this.currentPageIndex = pageIndex;
    })
  }
  
}


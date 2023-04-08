import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-sub1',
  templateUrl: './course-sub1.component.html',
  styleUrls: ['./course-sub1.component.scss']
})
export class CourseSub1Component implements OnInit {
  currentPageIndex = 0;
  // page: any;
  pages: Array<any> = [

    {
      pageName: 'arts',
      component: [
        {
          compId: 1,
          compName: 'Image Component 1',
          metadata: [
            {
              url: '../../../assets/images/Chetana Building.jpeg',
              alt: "koi toh imaage",
              text: "Arts"
            },

          ]
        },
        {
          compId: 2,
          compName: "card",
          metadata: [
            {
              info: {
                url: '../../../assets/images/Chetana Building.jpeg',
                alt: "koi toh imaage",
                text: "Courses"
              },
              image: [
                {
                  url: '../../../assets/images/ChetanaDC.jpeg',
                  alt: 'detail',
                }
              ],
              cardData: [
                {
                  id: 1,
                  header: "Course Features",
                  feesdetail: "Courses fees is 75000",
                }
              ],
              values: [
                {
                  key: '1',
                  value: "Shubham",
                },
                {
                  key: '2',
                  value: "LP",
                },
                {
                  key: '3',
                  value: "NIVU",
                }
              ]
            }
          ],
        },
        {
          compId: 3,
          compName: "course-sub1",
          metadata: {
            info1:
            {
              url: '../../../assets/images/ChetanaDC.jpeg',
              alt: 'bgbgngggngngnggngn',
              text: 'Courses'
            },
            coursesImg:
            {
              url: "../../../assets/images/ChetanaDC.jpeg",
              alt: "leftimag1"
            },
            courseDetails:
            {
              text: "Arts",
              text1: "Arts subjects include Economics, History, Political Science, Geography, Sociology, Philosophy, Psychology, Computer Science, Hindi, Regional Language, etc. There are plenty of careers after Arts stream, which range from Journalism and Literary Studies to Law and Hotel Management.",
              text2: "<li>Program Outcome : To apply the IT skills and knowledge acquired in managing and solving real world problems within their work domain.<br> <li> Program Specific Outcome : To recognize the need for and have the preparation and ability to engage and enhance the skills onto the next level of computing.<br> <li> Course Outcome : Enabling and equipping the students with technological skills as per the industry expectation.<br> <li> Student Vision : To prepare a workforce of professionals who exhibit leadership by creating a platform of opportunities which will help them shape themselves as future entrepreneurs. ",
              text3: "Eligibility Criteria",
              text4: "<li> A candidate for being eligible for admission to the degree Course of Bachelor of Science Information Technology shall have passed XII Standard Examination of the Maharashtra board of Higher Secondary Education or its equivalent with Mathematic and Statistics as one of the subject and one should not have secured less than 35% marks in aggregate for open category and Reserved category candidates.<br> <li> Candidate who have passed Diploma (Three years after S.S.C.- Xth Std.) in Information Technology /Computer technology/ Computer Engineering/ Computer Science / Electrical, electronics and video Engineering and allied branches/ Mechanical and ALLIED Branches/ Civil and Allied Branches are eligible for direct admission to the second year of the B.Sc.(I.T) degree Education course. However, the Diploma should have recognized by the Board of Technical Education or any other recognized Government Body. Minimum marks required 35% aggregate for open reserved category candidates<br>",
              text5: "OR",
              text6: "<li> Candidates with post HSC-Diploma in Information Technology / Computer Technology/ Computer Engineering/ Computer Science and allied branches will be eligible for direct admission to the Second year of B.Sc.(I.T) However the Diploma should be recognized by the board of Technical education or any other recognized Government body minimum marks required 35% aggregate for open category candidates and reserved category candidates.<br> <li> P/S Further candidate should note the criteria of admission procedure is as per University of Mumbai<br>",
              text7: "<li> FYBScIT_First Year_Sem 1and 2_2016_17<br> <li> SYBScIT_Second Year__Sem 3and 4_2017_18<br> <li> TYBScIT_Third Year_Sem 5and 6_2018_19<br>",
              text8: "Duration of the programme and related information:",
              text9: "<li> The programme is full time, consisting of six semester spread over three years.<br> <li> The course consists of 30 modules comprising 30 theory papers and 01 project.<br> <li> As per the University guidelines, degree will be conferred under “Choice Based Credit System” with 20 Credit Points per Semester and 10 Point Grading System<br> <li> A total number of lectures per course (subject) shall be a minimum of 50 and a maximum of 60, each of 50 minutes duration.<br>",
              text10: "ARTS SYLLABUS MUMBAI UNIVERSITY",
              link: "https://mu.ac.in/wp-content/uploads/2021/10/B.Sc.I.T-Syllabus-FY-SY-TY.pdf",
              facultyData: [

              ],
              table: [
                {
                  id: 1,
                  category: "Eligible for admission",
                  criteria: "X Passed",
                },
                {
                  id: 2,
                  category: "Board",
                  criteria: "SSC or equivalent exam with English as one of the subjects.",
                },
                {
                  id: 3,
                  category: "Marks",
                  criteria: "Not less than 35%",
                },
                {
                  id: 4,
                  category: "Category",
                  criteria: "Open and Reserved",
                }
              ],
            }
          },
        },
      ],
    },

    {
      pageName: 'commerce',
      component: [
        {
          compId: 1,
          compName: 'Image Component 1',
          metadata: [
            {
              url: '../../../assets/images/Chetana Building.jpeg',
              alt: "koi toh imaage",
              text: "Commerce"
            },

          ]
        },
        {
          compId: 2,
          compName: "card",
          metadata: [
            {
              info: {
                url: '../../../assets/images/Chetana Building.jpeg',
                alt: "koi toh imaage",
                text: "Courses"
              },
              image: [
                {
                  url: '../../../assets/images/ChetanaDC.jpeg',
                  alt: 'detail',
                }
              ],
              cardData: [
                {
                  id: 1,
                  header: "Course Features",
                  feesdetail: "Courses fees is 75000",
                }
              ],
              values: [
                {
                  key: '1',
                  value: "Shubham",
                },
                {
                  key: '2',
                  value: "LP",
                },
                {
                  key: '3',
                  value: "NIVU",
                }
              ]
            }
          ],
        },
        {
          compId: 3,
          compName: "course-sub1",
          metadata: {
            info1:
            {
              url: '../../../assets/images/ChetanaDC.jpeg',
              alt: 'bgbgngggngngnggngn',
              text: 'Courses'
            },
            coursesImg:
            {
              url: "../../../assets/images/ChetanaDC.jpeg",
              alt: "leftimag1"
            },
            courseDetails:
            {

              text: "Commerce",
              text1: "Commerce stream is great for those students who are serious about pursuing a career in finance, accounts, chartered accountancy, economics, banking, business and management. Commerce course covers basically accounting, economics and related subjects relevant to trade and business.",
              text2: "<li>Program Outcome : To apply the IT skills and knowledge acquired in managing and solving real world problems within their work domain.<br> <li> Program Specific Outcome : To recognize the need for and have the preparation and ability to engage and enhance the skills onto the next level of computing.<br> <li> Course Outcome : Enabling and equipping the students with technological skills as per the industry expectation.<br> <li> Student Vision : To prepare a workforce of professionals who exhibit leadership by creating a platform of opportunities which will help them shape themselves as future entrepreneurs. ",
              text3: "Eligibility Criteria",
              text4: "<li> A candidate for being eligible for admission to the degree Course of Bachelor of Science Information Technology shall have passed XII Standard Examination of the Maharashtra board of Higher Secondary Education or its equivalent with Mathematic and Statistics as one of the subject and one should not have secured less than 35% marks in aggregate for open category and Reserved category candidates.<br> <li> Candidate who have passed Diploma (Three years after S.S.C.- Xth Std.) in Information Technology /Computer technology/ Computer Engineering/ Computer Science / Electrical, electronics and video Engineering and allied branches/ Mechanical and ALLIED Branches/ Civil and Allied Branches are eligible for direct admission to the second year of the B.Sc.(I.T) degree Education course. However, the Diploma should have recognized by the Board of Technical Education or any other recognized Government Body. Minimum marks required 35% aggregate for open reserved category candidates<br>",
              text5: "OR",
              text6: "<li> Candidates with post HSC-Diploma in Information Technology / Computer Technology/ Computer Engineering/ Computer Science and allied branches will be eligible for direct admission to the Second year of B.Sc.(I.T) However the Diploma should be recognized by the board of Technical education or any other recognized Government body minimum marks required 35% aggregate for open category candidates and reserved category candidates.<br> <li> P/S Further candidate should note the criteria of admission procedure is as per University of Mumbai<br>",
              text7: "<li> FYBScIT_First Year_Sem 1and 2_2016_17<br> <li> SYBScIT_Second Year__Sem 3and 4_2017_18<br> <li> TYBScIT_Third Year_Sem 5and 6_2018_19<br>",
              text8: "Duration of the programme and related information:",
              text9: "<li> The programme is full time, consisting of six semester spread over three years.<br> <li> The course consists of 30 modules comprising 30 theory papers and 01 project.<br> <li> As per the University guidelines, degree will be conferred under “Choice Based Credit System” with 20 Credit Points per Semester and 10 Point Grading System<br> <li> A total number of lectures per course (subject) shall be a minimum of 50 and a maximum of 60, each of 50 minutes duration.<br>",
              text10: "COMMERCR SYLLABUS MUMBAI UNIVERSITY",
              link: "https://mu.ac.in/wp-content/uploads/2021/10/B.Sc.I.T-Syllabus-FY-SY-TY.pdf",
              facultyData: [

              ],
              table: [
                {
                  id: 1,
                  category: "Eligible for admission",
                  criteria: "X Passed",
                },
                {
                  id: 2,
                  category: "Board",
                  criteria: "SSC or equivalent exam with English as one of the subjects.",
                },
                {
                  id: 3,
                  category: "Marks",
                  criteria: "Not less than 35%",
                },
                {
                  id: 4,
                  category: "Category",
                  criteria: "Open and Reserved",
                }
              ],
            }
          },
        },
      ],
    },

    {
      pageName: 'mcvc',
      component: [
        {
          compId: 1,
          compName: 'Image Component 1',
          metadata: [
            {
              url: '../../../assets/images/Chetana Building.jpeg',
              alt: "koi toh imaage",
              text: "M.C.V.C"
            },

          ]
        },
        {
          compId: 2,
          compName: "card",
          metadata: [
            {
              info: {
                url: '../../../assets/images/Chetana Building.jpeg',
                alt: "koi toh imaage",
                text: "Courses"
              },
              image: [
                {
                  url: '../../../assets/images/ChetanaDC.jpeg',
                  alt: 'detail',
                }
              ],
              cardData: [
                {
                  id: 1,
                  header: "Course Features",
                  feesdetail: "Courses fees is 75000",
                }
              ],
              values: [
                {
                  key: '1',
                  value: "Shubham",
                },
                {
                  key: '2',
                  value: "LP",
                },
                {
                  key: '3',
                  value: "NIVU",
                }
              ]
            }
          ],
        },
        {
          compId: 3,
          compName: "course-sub1",
          metadata: {
            info1:
            {
              url: '../../../assets/images/ChetanaDC.jpeg',
              alt: 'bgbgngggngngnggngn',
              text: 'Courses'
            },
            coursesImg:
            {
              url: "../../../assets/images/ChetanaDC.jpeg",
              alt: "leftimag1"
            },
            courseDetails:
            {

              text: "M.C.V.C",
              text1: "Minimum Competency andVocational Courses (MCVC). The student after passing 10th standard, instead of going for traditional courses of Arts/Commerce/Science can seek admission for these Job-oriented courses.These courses are of two years duration i.e. of 10+2 pattern. ",
              text2: "<li>Program Outcome : To apply the IT skills and knowledge acquired in managing and solving real world problems within their work domain.<br> <li> Program Specific Outcome : To recognize the need for and have the preparation and ability to engage and enhance the skills onto the next level of computing.<br> <li> Course Outcome : Enabling and equipping the students with technological skills as per the industry expectation.<br> <li> Student Vision : To prepare a workforce of professionals who exhibit leadership by creating a platform of opportunities which will help them shape themselves as future entrepreneurs. ",
              text3: "Eligibility Criteria",
              text4: "<li> A candidate for being eligible for admission to the degree Course of Bachelor of Science Information Technology shall have passed XII Standard Examination of the Maharashtra board of Higher Secondary Education or its equivalent with Mathematic and Statistics as one of the subject and one should not have secured less than 35% marks in aggregate for open category and Reserved category candidates.<br> <li> Candidate who have passed Diploma (Three years after S.S.C.- Xth Std.) in Information Technology /Computer technology/ Computer Engineering/ Computer Science / Electrical, electronics and video Engineering and allied branches/ Mechanical and ALLIED Branches/ Civil and Allied Branches are eligible for direct admission to the second year of the B.Sc.(I.T) degree Education course. However, the Diploma should have recognized by the Board of Technical Education or any other recognized Government Body. Minimum marks required 35% aggregate for open reserved category candidates<br>",
              text5: "OR",
              text6: "<li> Candidates with post HSC-Diploma in Information Technology / Computer Technology/ Computer Engineering/ Computer Science and allied branches will be eligible for direct admission to the Second year of B.Sc.(I.T) However the Diploma should be recognized by the board of Technical education or any other recognized Government body minimum marks required 35% aggregate for open category candidates and reserved category candidates.<br> <li> P/S Further candidate should note the criteria of admission procedure is as per University of Mumbai<br>",
              text7: "<li> FYBScIT_First Year_Sem 1and 2_2016_17<br> <li> SYBScIT_Second Year__Sem 3and 4_2017_18<br> <li> TYBScIT_Third Year_Sem 5and 6_2018_19<br>",
              text8: "Duration of the programme and related information:",
              text9: "<li> The programme is full time, consisting of six semester spread over three years.<br> <li> The course consists of 30 modules comprising 30 theory papers and 01 project.<br> <li> As per the University guidelines, degree will be conferred under “Choice Based Credit System” with 20 Credit Points per Semester and 10 Point Grading System<br> <li> A total number of lectures per course (subject) shall be a minimum of 50 and a maximum of 60, each of 50 minutes duration.<br>",
              text10: "M.C.V.C SYLLABUS MUMBAI UNIVERSITY",
              link: "https://mu.ac.in/wp-content/uploads/2021/10/B.Sc.I.T-Syllabus-FY-SY-TY.pdf",
              facultyData: [

              ],
              table: [
                {
                  id: 1,
                  category: "Eligible for admission",
                  criteria: "X Passed",
                },
                {
                  id: 2,
                  category: "Board",
                  criteria: "SSC or equivalent exam with English as one of the subjects.",
                },
                {
                  id: 3,
                  category: "Marks",
                  criteria: "Not less than 35%",
                },
                {
                  id: 4,
                  category: "Category",
                  criteria: "Open and Reserved",
                }
              ],
            }
          },
        },
      ],
    },

    {
      pageName: 'BA',
      component: [
        {
          compId: 1,
          compName: 'Image Component 1',
          metadata: [
            {
              url: '../../../assets/images/Chetana Building.jpeg',
              alt: "koi toh imaage",
              text: "Bachelor of Arts"
            },

          ]
        },
        {
          compId: 2,
          compName: "card",
          metadata: [
            {
              info: {
                url: '../../../assets/images/Chetana Building.jpeg',
                alt: "koi toh imaage",
                text: "Courses"
              },
              image: [
                {
                  url: '../../../assets/images/ChetanaDC.jpeg',
                  alt: 'detail',
                }
              ],
              cardData: [
                {
                  id: 1,
                  header: "Course Features",
                  feesdetail: "Courses fees is 75000",
                }
              ],
              values: [
                {
                  key: '1',
                  value: "Shubham",
                },
                {
                  key: '2',
                  value: "LP",
                },
                {
                  key: '3',
                  value: "NIVU",
                }
              ]
            }
          ],
        },
        {
          compId: 3,
          compName: "course-sub1",
          metadata: {
            info1:
            {
              url: '../../../assets/images/ChetanaDC.jpeg',
              alt: 'bgbgngggngngnggngn',
              text: 'Courses'
            },
            coursesImg:
            {
              url: "../../../assets/images/ChetanaDC.jpeg",
              alt: "leftimag1"
            },
            courseDetails:
            {

              text: "Bachelor of Arts",
              text1: "Bachelor of Arts or BA is an undergraduate program. The full form of BA is Bachelor of Arts and it comes under the discipline of humanities/arts. BA course duration is 3 years. BA course is divided equally into 6 semesters. One with good creativity and wanting to explore the different forms of arts can take up the BA course. There are various job opportunities provided in various sectors for Bachelor of Arts graduates and BA subjects such as Advertising, Law, Public Planning, Graphics, and Printing Industry, Journalism is highly career-oriented.",
              text2: "<li>Program Outcome : The students acquire knowledge in the field of social sciences and humanities to help them become sensitive and sensible citizens of the society.<br> <li>Program Specific Outcome : The program enables the students to acquire the knowledge with human values and act over solutions for various issues related to the society.<br> <li>Course Outcome : Learners will be study various social and political, ideology and philosophical tradition and thinking. <br>",
              text3: "Eligibility Criteria",
              text4: "<li>As per the guidelines issued by the University of Mumbai, A student must have passed Std. XII (Higher Secondary Certificate Examination) conducted by any statutory board.<br> <li>The admission of students belonging to the states other than the Maharashtra State will be confirmed after obtaining Eligibility conformation from the University of Mumbai..<br>",
              text8: "Duration of the programme and related information:",
              text9: "<li>The programme is full time, consisting of six semesters spread over three years<br>",
              text10: "B.A. SYLLABUS MUMBAI UNIVERSITY",
              link: "https://mu.ac.in/wp-content/uploads/2021/10/B.Sc.I.T-Syllabus-FY-SY-TY.pdf",
              url: "assets/images/FACULTY.svg",
              alt: "don",
              text11: "MR. SARAVANAN REDDY",
              text12: "HOD,B.A.",
              table: [
                {
                  id: 1,
                  category: "Eligible for admission",
                  criteria: "Xll Passed",
                },
                {
                  id: 2,
                  category: "Board",
                  criteria: "Maharashtra board of higher secondary education",
                },
                {
                  id: 3,
                  category: "Marks",
                  criteria: "Not less than 35%",
                },
                {
                  id: 4,
                  category: "Category",
                  criteria: "Open and Reserved",
                }
              ],
            }
          },
        },
      ],
    },

    {
      pageName: 'bcom',
      component: [
        {
          compId: 1,
          compName: 'Image Component 1',
          metadata: [
            {
              url: '../../../assets/images/Chetana Building.jpeg',
              alt: "koi toh imaage",
              text: "Bachelor of Commerce"
            },

          ]
        },
        {
          compId: 2,
          compName: "card",
          metadata: [
            {
              info: {
                url: '../../../assets/images/Chetana Building.jpeg',
                alt: "koi toh imaage",
                text: "Courses"
              },
              image: [
                {
                  url: '../../../assets/images/ChetanaDC.jpeg',
                  alt: 'detail',
                }
              ],
              cardData: [
                {
                  id: 1,
                  header: "Course Features",
                  feesdetail: "Courses fees is 75000",
                }
              ],
              values: [
                {
                  key: '1',
                  value: "Shubham",
                },
                {
                  key: '2',
                  value: "LP",
                },
                {
                  key: '3',
                  value: "NIVU",
                }
              ]
            }
          ],
        },
        {
          compId: 3,
          compName: "course-sub1",
          metadata: {
            info1:
            {
              url: '../../../assets/images/ChetanaDC.jpeg',
              alt: 'bgbgngggngngnggngn',
              text: 'Courses'
            },
            coursesImg:
            {
              url: "../../../assets/images/ChetanaDC.jpeg",
              alt: "leftimag1"
            },
            courseDetails:
            {

              text: "Bachelor of Commerce",
              text1: "The Bachelor of Commerce degree is designed to provide students with a wide range of managerial skills, while building competence in a particular area of business (see aside). Most universities, therefore, plan the degree such that in addition to their major, students are exposed to general business principles, taking courses in accounting, finance, economics, business management, human resources and marketing.",
              text2: "<li>Program Outcome : The students will be ready for employment in functional areas like accounting, taxation, banking, insurance and corporate law and develop an attitude for working effectively and efficiently in a business environment.<br> <li>Program Specific Outcome : Students can acquire skills to work as office assistants, accountants and other supporting services in the field of commerce and business.<br> <li>Course Outcome : Learners will gain knowledge of various disciplines of commerce, business, accounting, economics, and finance, auditing and marketing.<br>",
              text3: "Eligibility Criteria",
              text4: "<liAs per the guidelines issued by the University of Mumbai, A student must have passed Std. XII (Higher Secondary Certificate Examination) conducted by any statutory board.><br> <li>The admission of students belonging to the states other than the Maharashtra State will be confirmed after obtaining Eligibility conformation from the University of Mumbai.<br>",
              text8: "Duration of the programme and related information:",
              text9: "<li>The programme is full time, consisting of six semesters spread over three year<br>",
              text10: "B.Com SYLLABUS MUMBAI UNIVERSITY",
              link: "https://mu.ac.in/wp-content/uploads/2021/10/B.Sc.I.T-Syllabus-FY-SY-TY.pdf",
              url: "assets/images/FACULTY.svg",
              alt: "don",
              text11: "MR. SARAVANAN REDDY",
              text12: "HOD,B.Com",
              table: [
                {
                  id: 1,
                  category: "Eligible for admission",
                  criteria: "Xll Passed",
                },
                {
                  id: 2,
                  category: "Board",
                  criteria: "Maharashtra board of higher secondary education",
                },
                {
                  id: 3,
                  category: "Marks",
                  criteria: "Not less than 35%",
                },
                {
                  id: 4,
                  category: "Category",
                  criteria: "Open and Reserved",
                }
              ],
            }
          },
        },
      ],
    },

    {
      pageName: 'bms',
      component: [
        {
          compId: 1,
          compName: 'Image Component 1',
          metadata: [
            {
              url: '../../../assets/images/Chetana Building.jpeg',
              alt: "koi toh imaage",
              text: "BACHELOR OF MANAGEMENT STUDIES"
            },

          ]
        },
        {
          compId: 2,
          compName: "card",
          metadata: [
            {
              info: {
                url: '../../../assets/images/Chetana Building.jpeg',
                alt: "koi toh imaage",
                text: "Courses"
              },
              image: [
                {
                  url: '../../../assets/images/ChetanaDC.jpeg',
                  alt: 'detail',
                }
              ],
              cardData: [
                {
                  id: 1,
                  header: "Course Features",
                  feesdetail: "Courses fees is 75000",
                }
              ],
              values: [
                {
                  key: '1',
                  value: "Shubham",
                },
                {
                  key: '2',
                  value: "LP",
                },
                {
                  key: '3',
                  value: "NIVU",
                }
              ]
            }
          ],
        },
        {
          compId: 3,
          compName: "course-sub1",
          metadata: {
            info1:
            {
              url: '../../../assets/images/ChetanaDC.jpeg',
              alt: 'bgbgngggngngnggngn',
              text: 'Courses'
            },
            coursesImg:
            {
              url: "../../../assets/images/ChetanaDC.jpeg",
              alt: "leftimag1"
            },
            courseDetails:
            {

              text: "BACHELOR OF MANAGEMENT STUDIES",
              text1: "The University of Mumbai has introduced the B.M.S. Course to prepare our students Compete in the field of Management of the new millennium with its emphasis success in the dynamic and globally competitive market place. The course has designed to create professionally qualified management executives, with effect and interpersonal communication in the field of management. hard and soft skills related to the operational environment, use of modern technology",
              text2: "<li>Program Outcome : Development of Managerial Skills.<br> <li> Program Specific Outcome : Developing knowledge and other soft skills required to react aptly for critical decision making to play the roles of businessmen, entrepreneurs, managers and consultants.<br> <li> Course Outcome : Learners will gain knowledge of various disciplines of Management, Banking, Production, Taxation, Finance Marketing and Human Resources.<br> <li> Student Vision : To prepare a workforce of professionals who exhibit leadership by creating a platform of opportunities which will help them shape themselves as future entrepreneurs.",
              text3: "Eligibility Criteria",
              text4: "<li> A Candidate for being eligible for admission to the Bachelor of Management Studies Degree Course shall have passed XII Std. Examination of the Maharashtra Board Higher Secondary Education or its equivalent and secured not less than 45% marks aggregate at first attempt (40% in case of reserved category).",
              text7: "<li> Bachelor of Management Studies First Year Semester I and II<br> <li> Bachelor of Management Studies Second Year Semester III and IV <br> <li> Bachelor of Management Studies Third Year Semester V and VI<br>",
              text8: "Duration of the programme and related information:",
              text9: "<li> The programme is full time, consisting of six semesters spread over three years<br> <li> The course consists of 40 modules comprising 39 theory papers and 01 projects<br> <li> A total number of lectures per course (subject) shall be a minimum of 50 and a maximum of 60, each of 50 minutes duration.",
              text10: "B.M.S. SYLLABUS MUMBAI UNIVERSITY",
              link: "https://archive.mu.ac.in/ug144.pdf",
              facultyData: [
                {
                  url: "assets/images/FACULTY.svg",
                  alt: "Taqdees Ma'am",
                  facultyName: "MS. TAQDEES SHAIKH",
                  facultyDetails: "ASST.CHIEF CO-ORDINATOR ,<br> HOD Bachelor Of Management Studies"
                },
                {
                  url: "assets/image/amisha.jpeg",
                  alt: "Amisha Ma'am",
                  facultyName: "Prof.Amisha Merchant",
                  facultyDetails: "Department of Bms and bscIT"
                },
                {
                  url: "assets/image/shubham.jpeg",
                  alt: "Shubham Sir",
                  facultyName: "Prof.Shubham Shinde",
                  facultyDetails: "Depratment of Bmm and bms"
                },
                {
                  url: "assets/image/praglab.JPG",
                  alt: "Praglab Sir",
                  facultyName: "Prof.Praglab Jha",
                  facultyDetails: "Department of BMM , bms and baf"
                },
                {
                  url: "assets/image/pranali.jpeg",
                  alt: "Pranali Ma'am",
                  facultyName: "Prof.Pranali Chandanshiv",
                  facultyDetails: "Department of bmm , bms and baf"
                }
              ],
              table: [
                {
                  id: 1,
                  category: "Eligible for admission",
                  criteria: "Xll Passed",
                },
                {
                  id: 2,
                  category: "Board",
                  criteria: "Maharashtra board of higher secondary education",
                },
                {
                  id: 3,
                  category: "Marks",
                  criteria: "Not less than 35%",
                },
                {
                  id: 4,
                  category: "Category",
                  criteria: "Open and Reserved",
                }
              ],

            },
          },

        },
      ],

    },

    {
      pageName: 'baf',
      component: [
        {
          compId: 1,
          compName: 'Image Component 1',
          metadata: [
            {
              url: '../../../assets/images/Chetana Building.jpeg',
              alt: "koi toh imaage",
              text: "B.COM (ACCOUNTING & FINANCE)"
            },

          ]
        },
        {
          compId: 2,
          compName: "card",
          metadata: [
            {
              info: {
                url: '../../../assets/images/Chetana Building.jpeg',
                alt: "koi toh imaage",
                text: "Courses"
              },
              image: [
                {
                  url: '../../../assets/images/ChetanaDC.jpeg',
                  alt: 'detail',
                }
              ],
              cardData: [
                {
                  id: 1,
                  header: "Course Features",
                  feesdetail: "Courses fees is 75000",
                }
              ],
              values: [
                {
                  key: '1',
                  value: "Shubham",
                },
                {
                  key: '2',
                  value: "LP",
                },
                {
                  key: '3',
                  value: "NIVU",
                }
              ]
            }
          ],
        },
        {
          compId: 3,
          compName: "course-sub1",
          metadata: {
            info1:
            {
              url: '../../../assets/images/ChetanaDC.jpeg',
              alt: 'bgbgngggngngnggngn',
              text: 'Courses'
            },
            coursesImg:
            {
              url: "../../../assets/images/ChetanaDC.jpeg",
              alt: "leftimag1"
            },
            courseDetails:
            {

              text: "B.COM (ACCOUNTING & FINANCE)",
              text1: "The BAF course provides comprehensive training to students in the field of Accounting & Finance by way of interaction, projects, presentations, industrial visits, practical training, job orientation and placements. It is a perfectly designed full time course for aspiring Chartered Accountants & Financial Analysts. Chartered Accountants / Financial Analysts are known to excel at analysing and understanding the financial structure of a company. They are expected to take the appropriate decision at the right time and ensure that the same are implemented properly. Such are the people required in todayís globally competitive market and such are the people that NM College produces in abundance.",
              text2: "<li> Program Outcome : Proficiency in Finance and Accounting with ethical responsibility.<br> <li> Program Specific Outcome : Students can acquire skills to work as tax consultant, audit assistant and other financial supporting services and also pursue professional courses and also be self-employed.<br> <li> Course Outcome : Gaining knowledge about Accountancy, Finance, Taxation, and Corporate Laws to become employable in the Finance profession.<br> <li> Student Vision : To become finance professionals with integrity and competency to perform finance related activities by enhancing our analytical, managerial and technological skills. ",
              text3: "Eligibility Criteria",
              text4: "<li> A Candidate for being eligible for admission to the Bachelor of Commerce (Accounting & Finance) Degree Course shall have passed XII Std. Examination of the Maharashtra Board of Higher Secondary Education or its equivalent and secured not less than 45% marks in aggregate at first attempt (40% in case of reserved category).",
              text7: "<li> B.Com Accounting and Finance First Year Semester I & II<br> <li> B.Com Accounting and Finance Second Year Semester III & IV<br> <li> B.Com Accounting and Finance Third Year Semester V & VI<br>",
              text8: "Duration of the programme and related information:",
              text9: "<li> The programme is full time, consisting of six semester spread over three years.<br> <li> The course consists of 40 modules comprising 39 theory papers and 01 projects.<br> <li> As per the University guidelines, degree will be conferred under “Choice  Based Credit System” with 20 Credit Points per Semester and 10 Point Grading System.<br> <li> A total number of lectures per course (subject) shall be a minimum of 50 and a maximum of 60, each of 50 minutes duration.<br>",
              text10: "B.A.F. SYLLABUS MUMBAI UNIVERSITY",
              link: "https://old.mu.ac.in/wp-content/uploads/2016/06/4.77-B.Com-Accounting-and-Finance-Semester-I-and-II-Syllabus-with-Course-Structure.pdf",
              facultyData: [
                {
                  url: "assets/images/FACULTY.svg",
                  alt: "Debjani ma'am",
                  facultyName: "MS. DEBJANI SINGHA",
                  facultyDetails: "HOD,B.COM In ACCOUNTING & FINANCE"
                },
                {
                  url: "assets/image/praglab.JPG",
                  alt: "praglab sir",
                  facultyName: "Prof.Praglab Jha",
                  facultyDetails: "Department of BMM , bms and baf"
                },
                {
                  url: "assets/image/pranali.jpeg",
                  alt: "pranali maam",
                  facultyName: "Prof.Pranali Chandanshiv",
                  facultyDetails: "Department of bmm , bms and baf"
                }
              ],
            }
          },
        },
      ],

    },

    {
      pageName: 'bammc',
      component: [
        {
          compId: 1,
          compName: 'Image Component 1',
          metadata: [
            {
              url: '../../../assets/images/Chetana Building.jpeg',
              alt: "koi toh imaage",
              text: "BACHELOR OF ARTS IN MASS MEDIA COMMUNICATION"
            },

          ]
        },
        {
          compId: 2,
          compName: "card",
          metadata: [
            {
              info: {
                url: '../../../assets/images/Chetana Building.jpeg',
                alt: "koi toh imaage",
                text: "Courses"
              },
              image: [
                {
                  url: '../../../assets/images/ChetanaDC.jpeg',
                  alt: 'detail',
                }
              ],
              cardData: [
                {
                  id: 1,
                  header: "Course Features",
                  feesdetail: "Courses fees is 75000",
                }
              ],
              values: [
                {
                  key: '1',
                  value: "Shubham",
                },
                {
                  key: '2',
                  value: "LP",
                },
                {
                  key: '3',
                  value: "NIVU",
                }
              ]
            }
          ],
        },
        {
          compId: 3,
          compName: "course-sub1",
          metadata: {
            info1:
            {
              url: '../../../assets/images/ChetanaDC.jpeg',
              alt: 'bgbgngggngngnggngn',
              text: 'Courses'
            },
            coursesImg:
            {
              url: "../../../assets/images/ChetanaDC.jpeg",
              alt: "leftimag1"
            },
            courseDetails:
            {

              text: "BACHELOR OF ARTS IN MASS MEDIA COMMUNICATION",
              text1: "With the global surge in the media industry over the last two decades, there has been distinct need for an academic programme at the undergraduate level that would meet promising career opportunities in the now booming information and communication business. The Bachelors in Mass Media (BMM) programme has been designed with this very agenda – to produce professionals armed with specialized skills in either advertising or journalism.",
              text2: "<li> Program Outcome : Grooming individuals to take up careers in the media industry.<br> <li> Program Specific Outcome : The program enables learners to gain an understanding of the underlying principles of communication and media industry.<br> <li> Course Outcome : Learners will learn the use of language and traditional and modern means of communication to pursue a career in the media field.<br> <li> Student Vision : To prepare a workforce of professionals who exhibit leadership by creating a platform of opportunities which will help them shape themselves as future entrepreneurs.",
              text3: "Eligibility Criteria",
              text4: "<li> A Candidate for being eligible for admission to the degree course in mass media shall have pass Xll std.<br>  <li> Examination of Maharashtra Board of Higher Secondary Education or Its equivalent and secured not less than 35% marks in aggregate at first attempt.",
              text7: "<li> BA in Multimedia and Mass Communication (BAMMC) First Year Sem I & II<br> <li> BA in Multimedia and Mass Communication (BAMMC) First Year Sem I & II<br> <li> BA in Multimedia and Mass Communication (BAMMC) Second Year Sem V & VI<br>",
              text8: "Duration of the programme and related information:",
              text9: "<li> The programme is full time, consisting of six semester spread over three years.<br> <li> The course consists of 36 module<br> <li> As per the University guidelines, degree will be conferred under “Choice Based Credit System” with 20 Credit Points per Semester and 10 Point Grading System<br> <li>A total number of lectures per course (subject) shall be a minimum of 50 and a maximum of 60, each of 50 minutes duration.",
              text10: "B.A.M.M.C. SYLLABUS MUMBAI UNIVERSITY",
              link: "https://mu.ac.in/wp-content/uploads/2020/01/4.8-AND-4.9BAMMC-SYLLABUS-Sem-3-4-5-6-July-25-2019.pdf",
              facultyData: [
                {
                  url: "assets/image/sabir.jpeg",
                  alt: "sabir sir",
                  facultyName: "Prof. Sabir Mujhavar",
                  facultyDetails: "HOD,Bachelor Of Arts In Multimedia And Mass Communication"
                },
                {
                  url: "assets/image/shubham.jpeg",
                  alt: "shubham sir",
                  facultyName: "Prof.Shubham Shinde",
                  facultyDetails: "Depratment of Bmm and bms"
                },
                {
                  url: "assets/image/praglab.JPG",
                  alt: "praglab",
                  facultyName: "Prof.Praglab Jha",
                  facultyDetails: "Department of BMM , bms and baf"
                },
                {
                  url: "assets/image/pranali.jpeg",
                  alt: "pranali",
                  facultyName: "Prof.Pranali Chandanshiv",
                  facultyDetails: "Department of bmm , bms and baf"
                }
              ],
              table: [
                {
                  id: 1,
                  category: "Eligible for admission",
                  criteria: "Xll Passed",
                },
                {
                  id: 2,
                  category: "Board",
                  criteria: "Maharashtra board of higher secondary education",
                },
                {
                  id: 3,
                  category: "Marks",
                  criteria: "Not less than 35%",
                },
                {
                  id: 4,
                  category: "Category",
                  criteria: "Open and Reserved",
                }
              ],
            }
          },
        },
      ],

    },

    {
      pageName: 'bscit',
      component: [
        {
          compId: 1,
          compName: 'Image Component 1',
          metadata: [
            {
              url: '../../../assets/images/Chetana Building.jpeg',
              alt: "koi toh imaage",
              text: "Bachelor of Science in I.T."
            },

          ]
        },
        {
          compId: 2,
          compName: "card",
          metadata: [
            {
              info: {
                url: '../../../assets/images/Chetana Building.jpeg',
                alt: "koi toh imaage",
                text: "Courses"
              },
              image: [
                {
                  url: '../../../assets/images/ChetanaDC.jpeg',
                  alt: 'detail',
                }
              ],
              cardData: [
                {
                  id: 1,
                  header: "Course Features",
                  feesdetail: "Courses fees is 75000",
                }
              ],
              values: [
                {
                  key: '1',
                  value: "Shubham",
                },
                {
                  key: '2',
                  value: "LP",
                },
                {
                  key: '3',
                  value: "NIVU",
                }
              ]
            }
          ],
        },
        {
          compId: 3,
          compName: "course-sub1",
          metadata: {
            info1:
            {
              url: '../../../assets/images/ChetanaDC.jpeg',
              alt: 'bgbgngggngngnggngn',
              text: 'Courses'
            },
            coursesImg:
            {
              url: "../../../assets/images/ChetanaDC.jpeg",
              alt: "leftimag1"
            },
            courseDetails:
            {

              text: "Bachelor of Science in I.T.",
              text1: "The B.Sc. IT programme of the University of Mumbai is designed to provide basic inputs for abroad understanding of information technology and its interfaces. The focus is on information technology and IT Management. Today smart, successful businesses use IT to give them an extra-edge to stay ahead of the competition. IT is soon becoming s ‘driver’ rather than an ‘enabler’ of business. It is used for processes like office Automation, Management information",
              text2: "<li> <b> Program Outcome :</b> To apply the IT skills and knowledge acquired in managing and solving real world problems within their work domain.<br> <li> <b> Program Specific Outcome : </b> To recognize the need for and have the preparation and ability to engage and enhance the skills onto the next level of computing.<br> <li> <b>Course Outcome :</b> Enabling and equipping the students with technological skills as per the industry expectation.<br> <li> <b>Student Vision :</b> To prepare a workforce of professionals who exhibit leadership by creating a platform of opportunities which will help them shape themselves as future entrepreneurs. ",
              text3: "Duration of the programme and related information:",
              text4: "Eligibility Criteria",
              text10: "BScIT SYLLABUS MUMBAI UNIVERSITY",
              link: "https://mu.ac.in/wp-content/uploads/2021/10/B.Sc.I.T-Syllabus-FY-SY-TY.pdf",
              facultyData: [
                {
                  url: "assets/images/FACULTY.svg",
                  alt: "Reddy sir",
                  facultyName: "Dr. SARAVANAN REDDY",
                  facultyDetails: "HOD,B.Sc In Information Technology"
                },
                {
                  url: "assets/image/amisha.jpeg",
                  alt: "amisha",
                  facultyName: "Prof.Amisha Merchant",
                  facultyDetails: "Department of Bms and bscIT"
                },
              ],


              table: [
                {
                  id: 1,
                  category: "Eligible for admission",
                  criteria: "Xll Passed",
                },
                {
                  id: 2,
                  category: "Board",
                  criteria: "Maharashtra board of higher secondary education",
                },
                {
                  id: 3,
                  category: "Marks",
                  criteria: "Not less than 35%",
                },
                {
                  id: 4,
                  category: "Category",
                  criteria: "Open and Reserved",
                }
              ],
              table2: [
                {
                  id: 1,
                  category: "Eligible for admission",
                  criteria: " Diploma ( 3 year after ssc-10th) or post HSC Diploma",
                },
                {
                  id: 2,
                  category: "Special in",
                  criteria: "Information technology/ Computer Technology/ Computer Engineering/ computer Science/ Electrical/Electronics",
                },
                {
                  id: 3,
                  category: "Branches",
                  criteria: "Video Engineering and Allied/ Mechanical and Allied/ Civil and Allied ",
                },
                {
                  id: 4,
                  category: "Eligible in",
                  criteria: "Direct admission in second year of the BSc.IT degree education ",
                },
                {
                  id: 5,
                  category: "Recognize Board",
                  criteria: "Technical education or any other Government ",
                },
                {
                  id: 6,
                  category: "Marks",
                  criteria: "Not less than 35%",
                }
              ]

            }
          },
        },
      ],
    },

    {
      pageName: 'mcom',
      component: [
        {
          compId: 1,
          compName: 'Image Component 1',
          metadata: [
            {
              url: '../../../assets/images/Chetana Building.jpeg',
              alt: "koi toh imaage",
              text: "Master OF Commerce"
            },

          ]
        },
        {
          compId: 2,
          compName: "card",
          metadata: [
            {
              info: {
                url: '../../../assets/images/Chetana Building.jpeg',
                alt: "koi toh imaage",
                text: "Courses"
              },
              image: [
                {
                  url: '../../../assets/images/ChetanaDC.jpeg',
                  alt: 'detail',
                }
              ],
              cardData: [
                {
                  id: 1,
                  header: "Course Features",
                  feesdetail: "Courses fees is 75000",
                }
              ],
              values: [
                {
                  key: '1',
                  value: "Shubham",
                },
                {
                  key: '2',
                  value: "LP",
                },
                {
                  key: '3',
                  value: "NIVU",
                }
              ]
            }
          ],
        },
        {
          compId: 3,
          compName: "course-sub1",
          metadata: {
            info1:
            {
              url: '../../../assets/images/ChetanaDC.jpeg',
              alt: 'bgbgngggngngnggngn',
              text: 'Courses'
            },
            coursesImg:
            {
              url: "../../../assets/images/ChetanaDC.jpeg",
              alt: "leftimag1"
            },
            courseDetails:
            {

              text: "Master OF Commerce",
              text1: "Masters of Commerce is the progression of the undergraduate course in Commerce i.e. B.Com. The specializations are in Advance Accountancy, Business Management and Banking & Finance. The Masters programme is beneficial to students to enhance their competitive advantage with regards to their career prospects.",
              text2: "<li>Program Outcome : To acquaint a student with conventional as well as contemporary areas in the discipline of Commerce.<br> <li>Program Specific Outcome : The program enables the students to acquire advanced knowledge in the areas of accountancy, management, banking and finance to enhance their career opportunities or be self-employed.<br> <li>Course Outcome : To provide an understanding of all core areas of   Advanced Accounting, Banking and Finance and Business Management.<br>",
              text3: "Eligibility Criteria",
              text4: "<li>A learner for being eligible for admission to the Master of Commerce Programme, shall have passed the examination for the degree of Bachelor of Commerce (three years) or the degree B. Com. (Old Course) or the other Semester based Programmes i.e. Bachelor of Commerce (Banking & Insurance) or Bachelor of Commerce (Accounting & Finance) or Bachelor of Commerce (Financial Markets) or Bachelor of Management Studies (B.M.S.) of the University of Mumbai, or an examination of any other University recognized as equivalent thereto.<br> <li>Students seeking admissions to this college are required to apply online on the University portal as well fill the college form available on College website (www.chetanacollege.in). Students must affix recent photograph on the filled admission form along with copies of the statement of all the lower semester mark sheet for verification to the office staff. Incomplete forms will be rejected.<br>",
              text8: "Duration of the programme and related information:",
              text9: "<li>The programme is full time, consisting of Four semesters spread over three years<br> <li>The course consists of 16 modules comprising 14 theory papers and 2 projects<br> <li>A total number of lectures per course (subject) shall be a minimum of 50 and a maximum of 60, each of 50 minutes duration.<br>",
              text10: "M.Com SYLLABUS MUMBAI UNIVERSITY",
              link: "https://old.mu.ac.in/wp-content/uploads/2016/06/M.Com_Semester_III_and_IV_Syllabus_to_be_implememnted_2017_2018_-_Final.pdf",
              url: "assets/images/FACULTY.svg",
              alt: "don",
              text11: "MR. SARAVANAN REDDY",
              text12: "HOD,M.COm",

            }
          },
        },
      ],
    },
    {
      pageName: 'phd',
      component: [
        {
          compId: 1,
          compName: 'Image Component 1',
          metadata: [
            {
              url: '../../../assets/images/Chetana Building.jpeg',
              alt: "koi toh imaage",
              text: "RESEARCH CENTRE"
            },

          ]
        },
        {
          compId: 2,
          compName: "card",
          metadata: [
            {
              info: {
                url: '../../../assets/images/Chetana Building.jpeg',
                alt: "koi toh imaage",
                text: "Courses"
              },
              image: [
                {
                  url: '../../../assets/images/ChetanaDC.jpeg',
                  alt: 'detail',
                }
              ],
              cardData: [
                {
                  id: 1,
                  header: "Course Features",
                  feesdetail: "Courses fees is 75000",
                }
              ],
              values: [
                {
                  key: '1',
                  value: "Shubham",
                },
                {
                  key: '2',
                  value: "LP",
                },
                {
                  key: '3',
                  value: "NIVU",
                }
              ]
            }
          ],
        },
        {
          compId: 3,
          compName: "course-sub1",
          metadata: {
            info1:
            {
              url: '../../../assets/images/ChetanaDC.jpeg',
              alt: 'bgbgngggngngnggngn',
              text: 'Courses'
            },
            coursesImg:
            {
              url: "../../../assets/images/ChetanaDC.jpeg",
              alt: "leftimag1"
            },
            courseDetails:
            {

              text: "RESEARCH CENTRE",
              text1: "PhD is a doctoral degree with an academic focus. A PhD course is usually of three years duration and candidates need to complete the course within a maximum time span of five to six years. However, the course duration may vary from one institute to the other. Aspirants need to possess a master’s degree to be eligible to pursue a PhD programme.<br> Candidates can pursue a PhD programme in any stream. In a PhD course aspirants need to select a topic or a subject and do in-depth research on it and answer any queries related to the topic/ subject.<br> Earlier, candidates could pursue PhD course through the distance mode, however, as per a circular issued by UGC in 2017 it has been informed that a PhD course pursued through the distance education mode would no longer be recognised.",
              text3: "Eligibility Criteria",
              text4: "<li>Master’s Degree of any recognized University/other qualification in a relevant discipline. The minimum qualifying marks are 55% at Post Graduation level (Relaxation of 5% of marks, from 55% to 50%, or an equivalent relaxation of grade, may be allowed for those belonging to SC/ST/OBC(non-creamy layer)/Differently-Abled and other categories.)<br> <li>In the Entrance Examination conducted by the University at the national level on the pattern of UGC followed by interview.<br>",
              text5: "AND",
              text6: "<li>Candidate must not be more than 55 years of age on the date of the entrance test.<br>",
              text7: "<li> FYBScIT_First Year_Sem 1and 2_2016_17<br> <li> SYBScIT_Second Year__Sem 3and 4_2017_18<br> <li> TYBScIT_Third Year_Sem 5and 6_2018_19<br>",
              text8: "Duration of the programme and related information:",
              text9: "<li> The programme is full time, consisting of six semester spread over three years.<br> <li> The course consists of 30 modules comprising 30 theory papers and 01 project.<br> <li> As per the University guidelines, degree will be conferred under “Choice Based Credit System” with 20 Credit Points per Semester and 10 Point Grading System<br> <li> A total number of lectures per course (subject) shall be a minimum of 50 and a maximum of 60, each of 50 minutes duration.<br>",
              text10: "SYLLABUS MUMBAI UNIVERSITY",
              link: "https://mu.ac.in/wp-content/uploads/2021/10/B.Sc.I.T-Syllabus-FY-SY-TY.pdf",
              url: "assets/images/FACULTY.svg",
              alt: "don",
              text11: "MR. SARAVANAN REDDY",
              text12: "HOD,PHD"
            }
          },
        },
      ],
    },

  ]

  constructor(private activeRouter: ActivatedRoute) { }
  ngOnInit(): void {
    this.activeRouter.params.subscribe
      ((params: any) => {
        // this.pages = new this.pages;
        const page = params.coursename;
        const pageIndex = this.pages.findIndex
          (pg => pg.pageName === page)
        this.currentPageIndex = pageIndex;
      })
  }

}



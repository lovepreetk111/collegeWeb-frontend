import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-support',
  templateUrl: './student-support.component.html',
  styleUrls: ['./student-support.component.scss']
})
export class StudentSupportComponent implements OnInit {

  supportdata!: boolean;
  wdcdata!: boolean;
  gvtdata!: boolean;
  workshopData!: boolean;
  antiraggingData!:boolean;

  currentPageIndex = 0;
  pages: Array<any> = [
    {
      pageName: 'support',
      component: [
        {
          compId: 1,
          compName: "student support",
          metadata: {
            antiHeader:
            {
              data: "Anti-Ragging",
            },
            antiData: [
              {
                Text: 'To prohibit, prevent and eliminate the scourge of ragging including any conduct by any student whether by words spoken or written or by an act which has the effect of teasing, treating or handling with rudeness a fresher or any other student, or indulging in rowdy or undisciplined activities by any student.',
                url: "../../../assets/image/antiragging.jpg",
                alt: "image"
              }
            ],

            nssHeader:
            {
              data: "National Service Scheme(NSS)",
            },
            nssData: [
              {
                Text: "The National Service Scheme (NSS) is an Indian government sector public service program conducted by the Ministry of Youth Affairs[1] and Sports of the Government of India. Popularly known as NSS, the scheme was launched in Gandhiji's Centenary year in 1969. Aimed at developing student's personality through community service, NSS is a voluntary association of young people in Colleges, Universities and at +2 level working for a campus-community (esp. Villages) linkage.",
                url: "../../../assets/image/nss.png",
                alt: "image"
              }
            ],

            nccHeader:
            {
              data: "National Cadet Corps(NCC)",
            },
            nccData: [
              {
                Text: "The National Cadet Corps (NCC) is the youth wing of the Indian Armed Forces with its headquarters in New Delhi, India. It is open to school and college students on voluntary basis as a Tri-Services Organisation, comprising the Army, the Navy and the Air Force, engaged in developing the youth of the country into disciplined and patriotic citizens. The soldier youth foundation in India is a voluntary organization which recruits cadets from high schools, higher secondary, colleges and universities all over India. The cadets are given basic military training in small arms and drill. The officers and cadets have no liability for active military service once they complete their course.",
                url: "../../../assets/image/ncc.png",
                alt: "image"
              }
            ],

            eqcHeader:
            {
              data: "Equal Opportunity Centre",
            },
            eqcData: [
              {
                Text: "“India is a country of diversity. It is a hub of different religions, castes and cultures. However, the Indian society is characterized by a highly entrenched system of social stratification. It is these social inequalities that created the barriers of denial of access to materials, cultural and educational resources to the disadvantaged groups of society. These disadvantaged groups are SCs, STs, women, OBC (non-creamy layer), minorities and physically challenged persons. It is clear from the demographic factors that a large section of population of our country is still disadvantaged and marginalized.”",
                url: "../../../assets/images/Chetana Building.jpeg",
                alt: "image"
              }
            ],

            scHeader:
            {
              data: "Student Council",
            },
            scData: [
              {
                Text: "A student council (also known as a student union or associated student body) is an administrative organization of students in different educational institutes ranging from elementary schools to universities and research organizations around the world.[1][2] These councils exist in most public and private K-12 school systems in different countries.[3][4][5] Many universities, both private and public, have a student council as an apex body of all their students' organisations.[6][7] Student councils often serve to engage students in learning about democracy and leadership, as originally espoused by John Dewey in Democracy and Education (1917).",
                url: "../../../assets/images/Chetana Building.jpeg",
                alt: "image"
              }
            ],
          }
        }
      ]
    },
    {
      pageName: 'wdc',
      component: [
        {
          compId: 1,
          compName: "image-comp1",
          metadata: [
            {
              url: '../../../assets/images/Chetana Building.jpeg',
              alt: "koi toh imaage",
              text: "Women's Development Cell"
            }

          ]
        },
        {
          compId: 2,
          compName: "button comp 1",
          metadata: {
            buttonData: {
              data: "About WDC"
            },
            dataText: {
              text: "The Cell works with an aim to create a gender sensitized community within the campus as well as in the society. It has been organising varied academic, technical, medical, cultural and social events for the upliftment of women and spread the real importance of gender equality."
            },
            buttonData2: {
              data: "OBJECTIVES OF THE WDC"
            },
            dataText2: {
              text: "<li>Creating awareness about the need of gender equality, Inclusion and Diversity.</li><li>To instill positive self-esteem and confidence in the female students so that they can take the right decision in and for-their lives.</li><li>Spreading awareness among the students about the social, legal and constitutional rights of women in order to prevent the exploitation based on gender.</li><li>Making females aware about different kinds of violence: sexual, physical and mental and to further equip them with the knowledge and strength to fight against them.</li><li> Providing on going workshops on self-grooming, mental and physical well being </li>"
            }
          }
        },
        {
          compId: 3,
          compName: "Information Card",
          metadata:
          {
            teamHeader:
            {
              data: "MANAGING TEAM",
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
      ]
    },
    {
      pageName: 'gvt',
      component: [
        {
          compId: 2,
          compName: "image-comp1",
          metadata: [
            {
              url: '../../../assets/images/Chetana Building.jpeg',
              alt: "koi toh imaage",
              text: "SCHOLARSHIP & FREESHIP"
            }

          ]
        },
        {
          compId: 3,
          compName: "button comp 1",
          metadata: {
            buttonData: {
              data: "RESERVATION"
            },
            dataText: {
              text: "As per the directives issued by the Government of Maharashtra, seats will be reserved for students belonging to backward classes and other category, if any. The Student who fail to process or submit the Online Scholarship or Free-Ship Form with the concerned authority will have to deposit remaining fee before the declaration of the First Term Examination Result."
            },

            buttonData2: {
              data: "IMPORTANT NOTICE"
            },
            dataText2: {
              text: "<li><a href='https://drive.google.com/file/d/1TE_GjsjHhW7sdT_-bvLuwtTzhWzwHvAQ/view' target=_blank>JUNIOR COLLEGE</a></li> <li><a href='https://drive.google.com/file/d/1TE_GjsjHhW7sdT_-bvLuwtTzhWzwHvAQ/view' target=_blank>Degree College (BA/BCOM)</a></li> <li><a href='https://drive.google.com/file/d/1TE_GjsjHhW7sdT_-bvLuwtTzhWzwHvAQ/view' target=_blank>Self Financing Courses (BMS/BAF/BAMMC/BSCIT)</a></li>"
            },

            buttonData3: {
              data: "FORM LINK"
            },
            dataText3: {
              text: "<li>FOR EXISITING STUDENTS</li> <li>FOR NEW STUDENTS​</li>"
            },

            buttonData4: {
              data: "IMPORTANT LINK"
            },
            dataText4: {
              text: "<li><a href='https://eoffice.mu.ac.in/statistical/login.php' target=_blank>University of Mumbai (Reservation)</a></li> <li><a href='https://dhemis.maharashtra.gov.in/' target=_blank>Management Information System of Higher Educational Institution</a></li> <li><a href='https://aishe.gov.in/aishe/instituteLoginPage' target=_blank>All India Survey for Higher Education (AISHE)</a></li>"
            },
          }
        }
      ]
    },
    {
      pageName: 'workshop',
      component: [
        {
          compId: 1,
          compName: "button",
          metadata: {
            data: "WORKSHOP TO ENHANCE RESEARCH"
          }
        },
        {
          compId: 2,
          compName: "Table comp",
          metadata: {
            thead: [
              {
                tablehead: [
                  {
                    thdata: "Sr.No"
                  },
                  {
                    thdata: "Date"
                  },
                  {
                    thdata: "Title"
                  },
                  {
                    thdata: "Speaker"
                  },
                  {
                    thdata: "Course"
                  }
                ]
              }
            ],
            data: [
              {
                trdata: [
                  {
                    tdData: "1",
                  },
                  {
                    tdData: "12/02/2923"
                  },
                  {
                    tdData: "Research Methodology"
                  },
                  {
                    tdData: "Dr.Nishikant Jha (M.Com, ICWA, PGDM, PhD, D.Litt, Research Guide)"
                  },
                  {
                    tdData: "TYBMS(Finance), TYBAF and M. Com"
                  }
                ],
              },
              {
                trdata: [
                  {
                    tdData: "1",
                  },
                  {
                    tdData: "12/02/2923"
                  },
                  {
                    tdData: "Research Methodology"
                  },
                  {
                    tdData: "Dr.Nishikant Jha (M.Com, ICWA, PGDM, PhD, D.Litt, Research Guide)"
                  },
                  {
                    tdData: "TYBMS(Finance), TYBAF and M. Com"
                  }
                ],
              },
              {
                trdata: [
                  {
                    tdData: "1",
                  },
                  {
                    tdData: "12/02/2923"
                  },
                  {
                    tdData: "Research Methodology"
                  },
                  {
                    tdData: "Dr.Nishikant Jha (M.Com, ICWA, PGDM, PhD, D.Litt, Research Guide)"
                  },
                  {
                    tdData: "TYBMS(Finance), TYBAF and M. Com"
                  }
                ],
              },
              {
                trdata: [
                  {
                    tdData: "1",
                  },
                  {
                    tdData: "12/02/2923"
                  },
                  {
                    tdData: "Research Methodology"
                  },
                  {
                    tdData: "Dr.Nishikant Jha (M.Com, ICWA, PGDM, PhD, D.Litt, Research Guide)"
                  },
                  {
                    tdData: "TYBMS(Finance), TYBAF and M. Com"
                  }
                ],
              },

            ]
          }
        },
        {
          compId: 3,
          compName: "Button",
          metadata: {
            header:{
              data: "WORKSHOP BY INDUSTRY EXPERTS"
            },
            table: {
              thead: [
                {
                  tablehead: [
                    {
                      thdata: "Sr.No"
                    },
                    {
                      thdata: "Date"
                    },
                    {
                      thdata: "Title"
                    },
                    {
                      thdata: "Speaker"
                    },
                    {
                      thdata: "Course"
                    }
                  ]
                }
              ],
              data: [
                {
                  trdata: [
                    {
                      tdData: "1",
                    },
                    {
                      tdData: "12/02/2923"
                    },
                    {
                      tdData: "Research Methodology"
                    },
                    {
                      tdData: "Dr.Nishikant Jha (M.Com, ICWA, PGDM, PhD, D.Litt, Research Guide)"
                    },
                    {
                      tdData: "TYBMS(Finance), TYBAF and M. Com"
                    }
                  ],
                },
                {
                  trdata: [
                    {
                      tdData: "1",
                    },
                    {
                      tdData: "12/02/2923"
                    },
                    {
                      tdData: "Research Methodology"
                    },
                    {
                      tdData: "Dr.Nishikant Jha (M.Com, ICWA, PGDM, PhD, D.Litt, Research Guide)"
                    },
                    {
                      tdData: "TYBMS(Finance), TYBAF and M. Com"
                    }
                  ],
                },
                {
                  trdata: [
                    {
                      tdData: "1",
                    },
                    {
                      tdData: "12/02/2923"
                    },
                    {
                      tdData: "Research Methodology"
                    },
                    {
                      tdData: "Dr.Nishikant Jha (M.Com, ICWA, PGDM, PhD, D.Litt, Research Guide)"
                    },
                    {
                      tdData: "TYBMS(Finance), TYBAF and M. Com"
                    }
                  ],
                },
                {
                  trdata: [
                    {
                      tdData: "1",
                    },
                    {
                      tdData: "12/02/2923"
                    },
                    {
                      tdData: "Research Methodology"
                    },
                    {
                      tdData: "Dr.Nishikant Jha (M.Com, ICWA, PGDM, PhD, D.Litt, Research Guide)"
                    },
                    {
                      tdData: "TYBMS(Finance), TYBAF and M. Com"
                    }
                  ],
                },

              ]
            }
          }
        },
        {
          compId: 4,
          compName: "Button",
          metadata: {
            header:{
              data: "WORKSHOPS CONDUCTED BY ALUMNI"
            },
            table: {
              thead: [
                {
                  tablehead: [
                    {
                      thdata: "Sr.No"
                    },
                    {
                      thdata: "Date"
                    },
                    {
                      thdata: "Title"
                    },
                    {
                      thdata: "Speaker"
                    },
                    {
                      thdata: "Course"
                    }
                  ]
                }
              ],
              data: [
                {
                  trdata: [
                    {
                      tdData: "1",
                    },
                    {
                      tdData: "12/02/2923"
                    },
                    {
                      tdData: "Research Methodology"
                    },
                    {
                      tdData: "Dr.Nishikant Jha (M.Com, ICWA, PGDM, PhD, D.Litt, Research Guide)"
                    },
                    {
                      tdData: "TYBMS(Finance), TYBAF and M. Com"
                    }
                  ],
                },
                {
                  trdata: [
                    {
                      tdData: "1",
                    },
                    {
                      tdData: "12/02/2923"
                    },
                    {
                      tdData: "Research Methodology"
                    },
                    {
                      tdData: "Dr.Nishikant Jha (M.Com, ICWA, PGDM, PhD, D.Litt, Research Guide)"
                    },
                    {
                      tdData: "TYBMS(Finance), TYBAF and M. Com"
                    }
                  ],
                },
                {
                  trdata: [
                    {
                      tdData: "1",
                    },
                    {
                      tdData: "12/02/2923"
                    },
                    {
                      tdData: "Research Methodology"
                    },
                    {
                      tdData: "Dr.Nishikant Jha (M.Com, ICWA, PGDM, PhD, D.Litt, Research Guide)"
                    },
                    {
                      tdData: "TYBMS(Finance), TYBAF and M. Com"
                    }
                  ],
                },
                {
                  trdata: [
                    {
                      tdData: "1",
                    },
                    {
                      tdData: "12/02/2923"
                    },
                    {
                      tdData: "Research Methodology"
                    },
                    {
                      tdData: "Dr.Nishikant Jha (M.Com, ICWA, PGDM, PhD, D.Litt, Research Guide)"
                    },
                    {
                      tdData: "TYBMS(Finance), TYBAF and M. Com"
                    }
                  ],
                },

              ]
            }
          }
        },
        {
          compId:5,
          compName:"button and Text",
          metadata:{
            header:{
              data:"CAREER GUIDANCE WORKSHOPS:"
            },
            text:{
              text:"<li>Careers and Challenges in Journalism for BMM students by Renu Nauriyal (Former Journalist)</li><li> Careers in Import-Export for SYBMS students by Dr.PP Radhakrishnan, President- Indian Institution of Export and Import Management) </li><li>Seminar on Financial Markets and Prospects as a Chartered Accountant by CA Hitesh Thakkar and ICAI for FY and TYBAF</li>"
            }
          },

        }

      ]
    },
    {
      pageName:"anti-ragging",
      component:[
        {
          compId:1, 
          compName:"button and text",
          metadata:{
            header:{
              data:"Anti-Ragging",
            },
            text:{
              text:"Ragging means any conduct whether by words spoken or written or by an act which has the effect of teasing, treating or handling with rudeness any other student, indulging in rowdy or undisciplined activities which causes or is likely to cause annoyance, hardship or psychological harm to raise fear or apprehension thereof in a fresher or junior student or asking the students to do any act or perform something which such student will not in the ordinary course and which has the effect of causing or generating a sense of shame or embarrassment so as to adversely affect the physique or psyche of a fresher or a junior student. The student indulging in above act is liable for punishment of suspension, debarring from examination, rustication or cancellation of admission or fine etc. <br> <br> <b>UGC Regulation on Curbing the Menace of Ragging in Higher Educational Institutions 2009No: F.1-16/2007 (CPP-II) dated 13 April 2009 </b> <br> <br> Ragging in all its forms is prohibited in the College Campus, including the departments, all its premises (academic, residential, sports, canteen, restrooms etc.), within the campus or outside it and all means of transportation whether public or private. The provisions of the Act of the Central Government and the State Governments if enacted will consider ragging as a cognizable offence under the law on a par with rape and other atrocities against women and ill-treatment of persons belonging to SC/ ST. <br><br><b>You can register your complaints with the following Phone Numbers.</b>"
            }
          }
        },
        {
          compId:2,
          compName:"accordian",
          metadata:{
            AccordianData:[
              {
                Title:"Duties",
                SubTitles:[
                  {
                    title:"<li>To ensure overall disciplined environment in the College.</li><li>To initiate timely action against erring students.</li><li>To sensitise students about the evils of ragging and its prevention in the College Campus by organizingtalks/ programmes etc.</li><li> To address complaints about ragging as per the Govt. and University procedures.</li><li>To maintain records of the cases investigated and submit the same to the IQAC Committee.</li>"
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  ]



  constructor(private activeRoute: ActivatedRoute) {
    // console.log(function show("hello"))
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe
      ((params: any) => {
        const page = params.scpages;
        const pageIndex = this.pages.findIndex
          (pg => pg.pageName === page)
        this.currentPageIndex = pageIndex
        console.log(this.currentPageIndex, "currentpageinsed checking")
        console.log("index bro", pageIndex)
        if (pageIndex == 0) {
          this.supportdata = true;
          this.wdcdata = false;
          this.workshopData = false;
          this.gvtdata = false;
          this.antiraggingData= false;
        }
        else if (pageIndex == 1) {
          this.wdcdata = true;
          this.supportdata = false;
          this.workshopData = false;
          this.antiraggingData = false
          this.gvtdata = false;
        }
        else if (pageIndex == 2) {
          this.wdcdata = false;
          this.supportdata = false;
          this.gvtdata = true;
          this.workshopData = false;
          this.antiraggingData = false
        }
        else if (pageIndex == 3) {
          this.wdcdata = false;
          this.supportdata = false;
          this.gvtdata = false;
          this.workshopData = true;
          this.antiraggingData = false
        }
        else if (pageIndex == 4) {
          this.wdcdata = false;
          this.supportdata = false;
          this.gvtdata = false;
          this.workshopData = false;
          this.antiraggingData = true;
        }
      })


  }

}


/* {
      pageName: 'gvt',
      component: [
        {
          compId: 2,
          compName: "image-comp1",
          metadata: [
            {
              url: '../../../assets/images/Chetana Building.jpeg',
              alt: "koi toh imaage",
              text: "SCHOLARSHIP & FREESHIP"
            }

          ]
        },
        {
          compId: 3,
          compName: "button comp 1",
          metadata: {
            buttonData: {
              data: "RESERVATION"
            },
            dataText: {
              text: "As per the directives issued by the Government of Maharashtra, seats will be reserved for students belonging to backward classes and other category, if any. The Student who fail to process or submit the Online Scholarship or Free-Ship Form with the concerned authority will have to deposit remaining fee before the declaration of the First Term Examination Result."
            },

            buttonData2: {
              data: "IMPORTANT NOTICE"
            },
            dataText2: {
              text: "<li><a href='https://drive.google.com/file/d/1TE_GjsjHhW7sdT_-bvLuwtTzhWzwHvAQ/view' target=_blank>JUNIOR COLLEGE</a></li> <li><a href='https://drive.google.com/file/d/1TE_GjsjHhW7sdT_-bvLuwtTzhWzwHvAQ/view' target=_blank>Degree College (BA/BCOM)</a></li> <li><a href='https://drive.google.com/file/d/1TE_GjsjHhW7sdT_-bvLuwtTzhWzwHvAQ/view' target=_blank>Self Financing Courses (BMS/BAF/BAMMC/BSCIT)</a></li>"
            },

            buttonData3: {
              data: "FORM LINK"
            },
            dataText3: {
              text: "<li>FOR EXISITING STUDENTS</li> <li>FOR NEW STUDENTS​</li>"
            },

            buttonData4: {
              data: "IMPORTANT LINK"
            },
            dataText4: {
              text: "<li><a href='https://eoffice.mu.ac.in/statistical/login.php' target=_blank>University of Mumbai (Reservation)</a></li> <li><a href='https://dhemis.maharashtra.gov.in/' target=_blank>Management Information System of Higher Educational Institution</a></li> <li><a href='https://aishe.gov.in/aishe/instituteLoginPage' target=_blank>All India Survey for Higher Education (AISHE)</a></li>"
            },
          }
        }
      ]
    },
  */
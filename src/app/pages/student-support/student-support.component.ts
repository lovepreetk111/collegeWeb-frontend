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
                Text: "The National Service Scheme (NSS) is an Indian government sector public service program conducted by the Ministry of Youth Affairs[1] and Sports of the Government of India. Popularly known as NSS, the scheme was launched in Gandhiji's Centenary year in 1969. Aimed at developing student's personality through community service, NSS is a voluntary association of young people in Colleges, Universities and at +2 level working for a campus-community (esp. Villages) linkage.",
                url: "../../../assets/images/Chetana Building.jpeg",
                alt: "image"
              }
            ],

            nssHeader:
            {
              data: "National Service Scheme(NSS)",
            },
            nssData: [
              {
                Text: 'To prohibit, prevent and eliminate the scourge of ragging including any conduct by any student whether by words spoken or written or by an act which has the effect of teasing, treating or handling with rudeness a fresher or any other student, or indulging in rowdy or undisciplined activities by any student.',
                url: "../../../assets/images/Chetana Building.jpeg",
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
                url: "../../../assets/images/Chetana Building.jpeg",
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
          compId: 2,
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
          compId: 3,
          compName: "button comp 1",
          metadata: {
            buttonData:{
              data:"About WDC"
            },
            dataText:{
              text:"The Cell works with an aim to create a gender sensitized community within the campus as well as in the society. It has been organising varied academic, technical, medical, cultural and social events for the upliftment of women and spread the real importance of gender equality."
            },
            buttonData2:{
              data:"OBJECTIVES OF THE WDC"
            },
            dataText2:{
              text:"<li>Creating awareness about the need of gender equality, Inclusion and Diversity.</li><li>To instill positive self-esteem and confidence in the female students so that they can take the right decision in and for-their lives.</li><li>Spreading awareness among the students about the social, legal and constitutional rights of women in order to prevent the exploitation based on gender.</li><li>Making females aware about different kinds of violence: sexual, physical and mental and to further equip them with the knowledge and strength to fight against them.</li><li> Providing on going workshops on self-grooming, mental and physical well being </li>"
            }
          }
        }
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
            buttonData:{
              data:"RESERVATION"
            },
            dataText:{
              text:"As per the directives issued by the Government of Maharashtra, seats will be reserved for students belonging to backward classes and other category, if any. The Student who fail to process or submit the Online Scholarship or Free-Ship Form with the concerned authority will have to deposit remaining fee before the declaration of the First Term Examination Result."
            },

            buttonData2:{
              data:"IMPORTANT NOTICE"
            },
            dataText2:{
              text:"<li><a href='https://drive.google.com/file/d/1TE_GjsjHhW7sdT_-bvLuwtTzhWzwHvAQ/view' target=_blank>JUNIOR COLLEGE</a></li> <li><a href='https://drive.google.com/file/d/1TE_GjsjHhW7sdT_-bvLuwtTzhWzwHvAQ/view' target=_blank>Degree College (BA/BCOM)</a></li> <li><a href='https://drive.google.com/file/d/1TE_GjsjHhW7sdT_-bvLuwtTzhWzwHvAQ/view' target=_blank>Self Financing Courses (BMS/BAF/BAMMC/BSCIT)</a></li>"
            },

            buttonData3:{
              data:"FORM LINK"
            },
            dataText3:{
              text:"<li>FOR EXISITING STUDENTS</li> <li>FOR NEW STUDENTS​</li>"
            },

            buttonData4:{
              data:"IMPORTANT LINK"
            },
            dataText4:{
              text:"<li><a href='https://eoffice.mu.ac.in/statistical/login.php' target=_blank>University of Mumbai (Reservation)</a></li> <li><a href='https://dhemis.maharashtra.gov.in/' target=_blank>Management Information System of Higher Educational Institution</a></li> <li><a href='https://aishe.gov.in/aishe/instituteLoginPage' target=_blank>All India Survey for Higher Education (AISHE)</a></li>"
            },
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
          this.gvtdata = false;
        }
        else if (pageIndex == 1) {
          this.wdcdata = true;
          this.supportdata = false;
          this.gvtdata = false;
        }
        else if (pageIndex==2){
          this.wdcdata = false;
          this.supportdata = false;
          this.gvtdata = true;
        }
      })


  }

}

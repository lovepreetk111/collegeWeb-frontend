import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.scss']
})
export class AlumniComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currentPageIndex = 0;
  pages: Array<any> = [
    {
      pageName: 'Alumni',
      component: [
        {
          compId: 0,
          compName: "image-comp1",
          metadata: [
            {
              url: '../../../assets/images/Chetana Building.jpeg',
              alt: "koi toh imaage",
              text: "alumni"
            }

          ]
        },
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

  ]
}


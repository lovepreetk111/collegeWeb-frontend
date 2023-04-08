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
          compId: 1,
          compName: "image-comp1",
          metadata: [
            {
              url: '../../../assets/images/Chetana Building.jpeg',
              alt: "koi toh imaage",
              text: "Alumini"
            },
          ]
        },
        {
          compId: 2,
          compname: "Button Comp",
          metadata: {
            info: {
              data: "About Alumini Association"
            },
            info2: {
              text: "<b>Chetana Alumni Association is Registered under the Societies Registration Act 1860 with a registration number, “Mumbai 1415/2019” on 02 August 2019. The registered address of this trust is:<b>"
            },
            info3: {
              data: "C/O Principal"
            },
            info4: {
              text: "<b>Chetana H. S. College of Commerce and Economics, Sr. No. 341, Near Government Colony, Bandra (E) Mumbai 400 051.<b>"
            },
            info5: {
              data: "Bank Account Details:"
            },
            info6: {
              text: "<li><b>Account Name : CHETANA ALUMNI ASSOCIATION</b></li>  <li><b>BANK NAME: SARASWAT C0-OP BANK LTD </b></li>   <li><b> BRANCH : BANDRA EAST </b></li>  <li><b>ACCOUNT : SAVING </b></li>  <li><b> A/C No. : 20209100000604</b></li>  <li><b>IFSC CODE : SRCB00000020 </b></li>  <li><b> MICR CODE : 400088003</b></li>"
            }
          }
        },
        {
          compId: 3,
          compName: "image-comp1",
          metadata: [
            {
              url: '../../../assets/images/Chetana Building.jpeg',
              alt: "koi toh imaage",
              text: "<h2><b>Alumini! We'd love to hear from you</b></h2><h6>Write your experiences with the Chetana College. <br> Feedback from Alumni are most welcome for display on our site.</h6>"
            },
          ]
        },
        {
          compId: 4,
          compname: "Button Comp",
          metadata: {
            info: {
              data: "About Alumini Association"
            },
            info2: {
              text: "<b><ol> <li>To create unity, brotherhood etc. amongst the members and general public. </li>     <li>To provide a platform of exchange of ideas, issues, professional skills, networking for its members. </li>   <li> To facilitate academic and professional networking between alumni, existing students and teachers, retired teachers.</li>    <li>To provide a platform for social interactions amongst the alumni and students.</li>   <li>To generate grants, scholarships and funds for existing students and to provide assistance in professional placements to the students.</li>      <li>To help the Institute achieve academic excellence in academics by encouraging visiting faculty programs and research.</li>      <li>To offer expertise to not for profit organization dedicated to improvement of a society.</li>     <li>To provide group benefits like health services, health insurance, medical services etc. to retired school teachers, students, and their families and to public at large. To work for the improvement of the Chetana H. S. College of Commerce and Economics.</li>     <li>To promote, give, impart, spread, and advance education in all its branches including academic, technical, vocational and professional amongst poor, needy, destitute and orphan children.</li>   <li>To build, establish, construct, manage, administer, support, and assist primary, pre-primary, secondary, higher secondary, schools, Colleges, technical and vocational institutes and hostel.</li>     <li>To give educational help to the poor and deserving students also to provide education aid to orphans, blind, physically handicapped students for their education and to provide them such facilities for educational purpose like uniforms, books scholarships etc. and also to give to the serving students for acquiring higher qualification. To help the poor by providing free legal aid and assistance to them. To give educational help to the poor and deserving students. </li>    <li> To conduct and organize lectures, seminars and meetings by inviting well known educationist and experts.</li>    <li> First Aid in medical and surgical emergencies. To conduct first aid classes, Grant of medical help to the poor and deserving person during epidemic, famine, flood, earthquake or any unforeseen calamity or war or war like operation, riots, civil commotion and similar occurrences or any other time of need.</li>    <li> To conduct sports for various Districts, zonal /state and national level tournaments /camps seminar /workshop /gathering etc.</li>     <li>To provide relief to the people who affected by Natural Calamities. </li>      <li> To establish, maintain or grant aid to homes for aged, orphanages or other establishments for the relief and help to the poor, needy and destitute people, orphans, widows and aged person.</li>   <li>To take, efforts for maintaining cleanliness in the society. To arrange tree plantation programs.</li> <li> To promote clean India movement.</li> <li>To implement various schemes of Government for the Welfare of women and children.</li>  <li> To do such other things which are incidental conducive to attainment of above objects.</li> </ol><b>"
            },
          }
        },
        {
          compId: 5,
          compName: "Place Table",
          metadata: {
            thead: [
              {
                tablehead: [
                  {
                    thdata: "Sr No "
                  },
                  {
                    thdata: "Name of Alumini"
                  },
                  {
                    thdata: "Batch"
                  },
                ],

              }
            ],
            data: [
              {
                trdata: [
                  {
                    tdData: "1",
                  },
                  {
                    tdData: "Rushikesh Bamne (Sports Correspondent- Loksatta)"
                  },
                  {
                    tdData: "BMM (2012-15)"
                  },

                ],
              },
              {
                trdata: [
                  {
                    tdData: "2",
                  },
                  {
                    tdData: "CA Deepak Dayanand"
                  },
                  {
                    tdData: "BAF(2009-12)"
                  },

                ],
              },
              {
                trdata: [
                  {
                    tdData: "3",
                  },
                  {
                    tdData: "Olvy Fernandes (Head of Operations-Noor Bank)"
                  },
                  {
                    tdData: "B.Com Alumni"
                  },

                ],
              },
              {
                trdata: [
                  {
                    tdData: "4",
                  },
                  {
                    tdData: "Jayesh Shinde (Marketing and Brand Consultant"
                  },
                  {
                    tdData: "BMS (2004-07)"
                  },

                ],
              },
              {
                trdata: [
                  {
                    tdData: "5",
                  },
                  {
                    tdData: "Gaurav Pandey (Finance Professional- CapGemini)"
                  },
                  {
                    tdData: "BMS (2009-11)"
                  },

                ],
              },
              {
                trdata: [
                  {
                    tdData: "6",
                  },
                  {
                    tdData: "Sanskruti Adivarekar (Industrial Relations Officer- Mahindra and Mahindra)"
                  },
                  {
                    tdData: "BMS (2009-11)"
                  },

                ],
              },
            ]
          }
        },
        {
          compId: 6,
          compName: "button cmp",
          metadata: {
            info: {
              data: "Know Our Alumini"
            },
            info2: {
              text: "<a target='_blank' href='https://drive.google.com/file/d/1bbtIgTnwZW4AtED65g6qdMlMixGXxhdv/view'>Alumini Association Report</a>"
            },
          }
        }
      ]
    },

  ]
}


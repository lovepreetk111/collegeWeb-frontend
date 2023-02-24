import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  // currentPageIndex = 0;
  // pages: any = [
  // {
  //   compId: 1,
  //   compName: 'button-cmp1',
  //    component: [
  //    { 
  //     compName:"button-cmp1",
  //     metadata:[ 
  //     {
  //         data: "About Us",
  //       }
  //    ]
  //     }
  //    ]
  // }
  // ]


  aboutpage!: boolean;
  campus!: boolean;

  currentPageIndex = 0;
  pages:Array<any> = [
    {
      pageName: 'us',
      component: [
        {
          compId:1,
          compName:"aboutUs",
          metadata:{
            info:
            {
              data: "About Us",
            },
            info1:
            {
              data: "Goals",
            },
            info2:
            {
              data: "Achivements",
            },
            info3:
            {
              text: "The meaning of the word “Chetana” is consciousness. Consciousness is the essence of all creation. It is all-pervasive and infinite. It is the essence that unifies all beings and things. The cultural advancement of the human race itself can be attributed to the awareness of this consciousness. This consciousness requires a blend of emotional awareness and wisdom, which are the primary goals of education. Hence this  name was suggested by Late Smt. Kusumtai Chaudhari while forming this profound education movement.      Chetana, a service oriented educational trust was established on 09th September, 1969 by Respected Balasaheb Madhukarrao Chaudhari (former Education and Finance Minister, Government of Maharashtra and Ex-Speaker, Maharashtra Legislative Assembly). <br><br>      Chetana, one of the dreams Balasaheb, has consistently progressed over the years and has today become an institution to reckon with. Now centrally located Chetana, was once a part of the suburb, located along the Mahim creek connected to Mithi River. Majority of the local population was totally dependent on this river and the creek for livelihood. As a Minister, whenever Balasaheb visited the nearby area, he was perturbed by the severe problem of illiteracy and poverty. His concern for the social and educational development of the region led him to decide over the establishment of an educational institution for the children of fishermen and other marginalized communities in the vicinity. He even travelled by boat to search for a suitable piece of land for Chetana. Finally, this search ended when the Government of Maharashtra allotted an open plot for Chetana. However, developing this plot was another task as it was a marshy land. It was filled by stone, sand and with the soil. He assembled a team of educationists and social workers to contribute to the development of Chetana.   <br><br>      It was predetermined that Chetana will strive to provide educational facilities to students coming from underprivileged strata of society. Till today, Chetana is committed to its mission framed by its founder. Considering the need of time, Chetana has expanded its scope of operations and set up two more institutions: Chetana’s Ramprasad Khandelwal Institute of Management & Research and Chetana’s Institute of Management and Research. Today these two institutions are rated among the best institutions in the field of Management Education. Hon’ble Shri Shirish Madhukarrao Chaudhari, Honorary Secretary of Chetana Education Trust; is now shaping this movement towards excellent group of institutes with the support of his colleagues. The development of Chetana can be traced as given below.",
            },
            info4:
            {
              text: "<li>To bring educational opportunities within the reach of the underprivileged section of the society.<br><br>  <li>            To bring educational opportunities within the reach of the underprivileged section of the society. <br><br><li>             To impact value-based education to the students.              To bring educational opportunities within the reach of the under-privileged section of society.<br><br> <li>              To generate academic environment for enabling the students to mould their personalities by imbibing moral values, professional competencies and the spirit of fair competition.  <br><br> <li>            To ensure participation of the student in co-curricular and extra-curricular activities for their balanced development. <br><br> <li>             To stimulate the teachers to continuously enrich their knowledge for the benefit of their students and for the well-being of society.    <br><br> <li>          To provide infrastructural facilities for the benefit of the students and for the social development of the local community.   <br><br> <li>           To create among the students and the students and the teaching and non-teaching staff a sense pf pride in belonging to the institution so that it channelizes their energies for the progress of the institution.  <br><br> <li>            To ensure justice and fair play in all academic and non-academic matters affecting the students and the staff.   <br><br> <li>          To encourage the students to aspire for higher achievements and help them unleash their latent abilities and realize their cherished goals.",
            },
            info5:
            {
              text: "To bring educational opportunities within the reach of the underprivileged section of the society.<br><br>  <li> To bring educational opportunities within the reach of the underprivileged section of the society.  <br><br>  <li>  To impact value-based education to the students. <br><br>  <li>  To bring educational opportunities within the reach of the under-privileged section of society. <br><br>  <li>   To generate academic environment for enabling the students to mould their personalities by imbibing moral values, professional competencies and the spirit of fair competition. <br><br>  <li>   To ensure participation of the student in co-curricular and extra-curricular activities for their balanced development.  <br><br>  <li>   To stimulate the teachers to continuously enrich their knowledge for the benefit of their students and for the well-being of society.  <br><br>  <li>  To provide infrastructural facilities for the benefit of the students and for the social development of the local community.  <br><br>  <li>   To create among the students and the students and the teaching and non-teaching staff a sense pf pride in belonging to the institution so that it channelizes their energies for the progress of the institution.  <br><br>  <li>   To ensure justice and fair play in all academic and non-academic matters affecting the students and the staff.<br><br>  <li>    To encourage the students to aspire for higher achievements and help them unleash their latent abilities and realize their cherished goals.",
            },
            info6:[{
              
                url:"../../../assets/images/ChetanaDC.jpeg",
                alt:"image",
                text:"About Us"
              
            }]
            ,
            aboutMain:
            {
              url:'../../../assets/images/MChaudhary.png',
              alt:'panj',
              text:'Our Inspiration',
              text1:'Late Shri Madhukarrao Chaudhari',
              text2:'Founder President Chetana Trust',
              textMain:'Chetana’s was established with the twin objective of providing quality education and infusing students with dynamism. Chetana has created many success stories and today it has become one of the most preferred Institutes in India.<br><br> I see many opportunities to be seized as our country stands at the hub of Economic growth. Our economy alone shall make India a super power on the Global Scenario. It is only natural that this accelerated phase of growth would result in investment in people and infrastructure. Therefore, all our initiatives are aimed at developing competent and committed managers who will be very much part of these efforts. <br><br>            Our high caliber faculty with vast experience would add the required momentum to the whole process. Apart from core faculty, who are always a source of motivation for the students, we have an erudite industry experts that comprises of top managers from the corporate world who share their rich experience with the students.   <br><br>        I take pride in welcoming you all to Chetana’s Institute.'
            }

            }
        }
      ]
    },
    {
      pageName:"campus"
    }
  ]

  constructor(private activeRoute: ActivatedRoute) {
    // console.log(function show("hello"))
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe
      ((params: any) => {
        const page = params.aboutpage;
        const pageIndex = this.pages.findIndex((pg: { pageName: any; }) => pg.pageName === page)
        this.currentPageIndex = pageIndex
        console.log(this.currentPageIndex, "currentpageinsed checking")
        console.log("index bro", pageIndex)
        if (pageIndex == 0) {
          this.aboutpage = true;
          this.campus = false;
        }
        else if (pageIndex == 1) {
          this.campus = true;
          this.aboutpage = false
        }
      })


  }


}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  outPutData = '';
  receiveData(childData: any) {
    console.log(childData);
    this.outPutData = childData.title;
  }
  constructor() {
    // console.log(this.pages);
    // console.log(this.outPutData)
  }
  ngOnInit(): void {
  }

  currentPageIndex = 0;
  pages: any = [
    {
      pageName: 'Home',
      component: [
        {
          compID: 2,
          compName: 'notices',
          metadata: [
            {
              id: 1,
              noticeLink: "Lorem ipsum dolor sit amet",
            },
            {
              id: 2,
              noticeLink: "consectetur adipiscing elit",
            },
            {
              id: 3,
              noticeLink: "Ut et massa mi. Aliquam in hendrerit urna",
            },
            {
              id: 4,
              noticeLink: "Lorem ipsum dolor sit amet",
            },
            {
              id: 5,
              noticeLink: "consectetur adipiscing elit",
            },
            {
              id: 6,
              noticeLink: "Ut et mass ",
            },
          ]
        },
        {
          compId: 3,
          compName: 'banner-carousel',
          metadata: [
            {
              id: 1,
              innerData: {
                header: 'Techkriti 6.0',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. ',
                buttonText: 'readMore',
              },
              background: {
                url: '../../../assets/image/ChetanaDC.jpeg',
                alt: 'yeh bhi hai kych',
              },
              image: {
                url: '../../../assets/image/BestCollegeCertificate.jpeg',
                alt: 'IDK'
              },
              routeLink: 'route karo and ghar bhejo',
            },
            {
              id: 2,
              innerData: {
                header: 'Techkriti 6.0',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. ',
                buttonText: 'readMore',
              },
              background: {
                url: '../../../assets/image/ChetanaDC.jpeg',
                alt: 'yeh bhi hai kych',
              },
              image: {
                url: '../../../assets/image/idbicertificate.jpg',
                alt: 'IDK'
              },
              routeLink: 'route karo and ghar bhejo',
            },
            {
              id: 1,
              innerData: {
                header: 'Techkriti 6.0',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. ',
                buttonText: 'readMore',
              },
              background: {
                url: '../../../assets/image/ChetanaDC.jpeg',
                alt: 'yeh bhi hai kych',
              },
              image: {
                url: '../../../assets/image/ISO Certificate.jpg',
                alt: 'IDK'
              },
              routeLink: 'route karo and ghar bhejo',
            },
            {
              id: 3,
              innerData: {
                header: 'Techkriti 6.0',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. ',
                buttonText: 'readMore',
              },
              background: {
                url: '../../../assets/images/ChetanaJC.svg',
                alt: 'yeh bhi hai kych',
              },
              image: {
                url: '../../../assets/images/ChetanaJC.svg',
                alt: 'IDK'
              },
              routeLink: 'route karo and ghar bhejo',
            },
          ]
        },
        {
          compId: 4,
          compName: 'aboutus-section',
          metadata: {
            id: 1,
            style:
            {
              backgroundColor: 'rgb(236, 236, 236)'
            },
            info:
            {
              data: "About Chetanas",
            },
            imgText: {
              url: '../../../assets/images/ChetanaJC.svg',
              alt: 'image hai clg ka',
              para1: " The meaning of the word <span class='blue'>“Chetana”</span> is consciousness. Consciousness is the essence of all creation. It isall-pervasive and infinite. It is the essence that unifies all beings and things. The cultural advancement of the human race itself can be attributed to the awareness of this consciousness. Thisconsciousness requires a blend of emotional awareness and wisdom, which are the primary goals of education.<br> <br>    Hence this name was suggested by <span class='blue'>Late Smt. Kusumtai Chaudhari</span> while forming this profound education movement. Chetana, a service oriented educational trust was established on 09th September, 1969 by Respected <span class='blue'>Balasaheb Madhukarrao Chaudhari</span> (former Education and Finance Minister, Government of Maharashtra and Ex-Speaker, Maharashtra Legislative Assembly)",
              para2: ""
            },
            topimgText: [
              {
                url: "../../../assets/images/vision.svg",
                alt: 'example3',
                header: 'Vision',
                text: 'To raise our institution to higher levels of academic and cultural excellence and create an urge to enrich the personality of our students to serve humanity as one global family.',
                description1: '',
                description2: ''
              },
              {
                url: "../../../assets/images/mission.svg",
                alt: 'example3',
                header: 'Mission',
                text: 'To raise our institution to higher levels of academic and cultural excellence and create an urge to enrich the personality of our students to serve humanity as one global family.',
                description1: '',
                description2: ''
              },
              {
                url: "../../../assets/images/values.svg",
                alt: 'example3',
                header: 'Values',
                text: 'To raise our institution to higher levels of academic and cultural excellence and create an urge to enrich the personality of our students to serve humanity as one global family.',
                description1: '',
                description2: ''
              }
            ]
          }
        },
        {
          compID: 5,
          compName: "Accordian",
          metadata: [
            {
              data: [
                {
                  url: "../../../assets//images/ChetanaJC.svg",
                  alt: 'kuch toh hai',
                  Text: 'Acedemic'
                }]
            },
            {
              AccordianData: [
                {
                  Title: 'JUNIOR COLLEGE',
                  SubTitles:[
                    {
                      id:1,
                      title:"Arts",
                      link:"course/arts"
                    },
                    {
                      id:2,
                      title:"Commerce",
                      link:"course/comm"
                    },
                    {
                      id:3,
                      title:"MCVC",
                      link:"course/mcvc"
                    }
                  ]
                },
                {
                  Title: 'DEGREE COLLEGE',
                  SubTitles:[
                    {
                      id:1,
                      title:"BA",
                      link:"course/ba"
                    },
                    {
                      id:2,
                      title:"BCOM",
                      link:"course/bcom"
                    },
                    
                  ]
                },
                {
                  Title: 'SELF FINANCING COURSES',
                  SubTitles:[
                    {
                      id:1,
                      title:"BMS",
                      link:"course/bms"
                    },
                    {
                      id:2,
                      title:"BAF",
                      link:"course/baf"
                    },
                    {
                      id:3,
                      title:"BAMMC",
                      link:"course/bammc"
                    },
                    {
                      id:4,
                      title:"B.Sc.IT",
                      link:"course/bscit"
                    }
                  ]
                },
                {
                  Title: 'POST GRADUATE PROGRAMME',
                  SubTitles:[
                    {
                      id:1,
                      title:"MASTER OF COMMERCE",
                      link:"course/mcom"
                    },
                    
                  ]
                },
                {
                  Title: 'DOCTORAL Programme',
                  SubTitles:[
                    {
                      id:1,
                      title:"PH. D. In Commerce",
                      link:"course/arts"
                    },
                    
                  ]
                },
                {
                  Title: 'DISTANCE LEARNING',
                  SubTitles:[
                    {
                      id:1,
                      title:"Y.C.M.O.U",
                      link:"course/yomuc"
                    },
                    
                  ]
                }
              ]
            }
          ],
        },
        {
          compId: 6,
          compName: "cardcarosuel",
          metadata: 
            {
              title:"Our Campus",
              slides: [
                {
                    url: "assets/images/bg.png",
                    alt: "image",
                    routeLink:'ground/kuch-toh',
                    cardHeading:"Ground",
                    description:"Lorem ki maa ki chudiya"
                  },
                  {
                    url: "assets/images/bg2.png",
                    alt: "image",
                    routeLink:'ground/kuch-toh',
                    cardHeading:"Ground",
                    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  },
                {
                    url: "assets/images/bg1.png",
                    alt: "image",
                    routeLink:'ground/kuch-toh',
                    cardHeading:"Ground",
                    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
              ]
            }

          
        },
        {
          compId: 7,
          compName: 'testimonials',
          metadata:
          {
            title: "Testimonials",
            description: "my name is ghazala.Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.",
            cardsData: [
              {
                comment: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.",
                name: "Ghazala",
                designation: "student",
                companyName: "chetana",
                profileUrl: "assets/img/ghazala.svg"
              },
              {
                comment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                name: "Lappi",
                designation: "ncc candidate",
                companyName: "Gareeb chetana",
                profileUrl: "assets/img/lappi.svg"
              },
              {
                comment: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                name: "vandita",
                designation: "pgl",
                companyName: "BscIT",
                profileUrl: "assets/img/vandita.svg"
              }
            ]
          }
        },
      {  
          compId: 8,
          compName: 'detailcard2',
          metadata:
          {
            image:'../../../assets/images/EventPhoto.jpg',
            alt:'Pankaj',
            date:'20TH NOV',
            eventName:'TECHKRITI 6.0',
            time:'9:00 to 11:00',
            venu:'CHETANA COLLEGE'
          }
        } ,
        
        {  
          compId: 9,
          compName: 'speaker',
          metadata:
          [
          {
            image:'/assets/images/FACULTY.svg',
            alt:'Reddy',
            name:'Saravanan Reddy',
            role:'Course Co-ordinator'
          }
        ]
        } 

      ]
    }
  ]
}


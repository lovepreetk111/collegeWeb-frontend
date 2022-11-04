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
    console.log(this.pages);
    console.log(this.outPutData)
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
                text: 'Lorem',
                buttonText: 'readMore',
              },
              background: {
                url: '../../../assets/images/ChetanaDC.jpeg',
                alt: 'yeh bhi hai kych',
              },
              image: {
                url: '../../../assets/images/ChetanaJC.svg',
                alt: 'IDK'
              },
              routeLink: 'route karo and ghar bhejo',
            },
            {
              id: 2,
              innerData: {
                header: 'Techkriti 6.0',
                text: 'Lorem',
                buttonText: 'readMore',
              },
              background: {
                url: '../../../assets/images/ChetanaDC.jpeg',
                alt: 'yeh bhi hai kych',
              },
              image: {
                url: '../../../assets/images/ChetanaJC.svg',
                alt: 'IDK'
              },
              routeLink: 'route karo and ghar bhejo',
            },
            {
              id: 3,
              innerData: {
                header: 'Techkriti 6.0',
                text: 'Lorem',
                buttonText: 'readMore',
              },
              background: {
                url: 'kuch toh',
                alt: 'yeh bhi hai kych',
              },
              image: {
                url: 'kuch hai IDK',
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
              para1: " The meaning of the word '“Chetana”' is consciousness. Consciousness is the essence of all creation. It isall-pervasive and infinite. It is the essence that unifies all beings and things. The culturaladvancement of the human race itself can be attributed to the awareness of this consciousness. Thisconsciousness requires a blend of emotional awareness and wisdom, which are the primary goals ofeducation.",
              para2: "Hence this name was suggested by Late Smt. Kusumtai Chaudhari while forming this profound education movement. Chetana, a service oriented educational trust was established on 09th September, 1969 by Respected Balasaheb Madhukarrao Chaudhari (former Education and Finance Minister, Government of Maharashtra and Ex-Speaker, Maharashtra Legislative Assembly)"
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
                  SubTitle1: 'Commerce',
                  SubTitle2: 'Arts',
                  SubTitle3: 'Mcvc',
                },
                {
                  Title: 'DEGREE COLLEGE',
                  SubTitle1: 'Commerce',
                  SubTitle2: 'Arts',
                  SubTitle3: 'Mcvc'
                },
                {
                  Title: 'SELF FINANCING COURSES',
                  SubTitle1: 'Commerce',
                  SubTitle2: 'Arts',
                  SubTitle3: 'Mcvc'
                },
                {
                  Title: 'MASTER OF COMMERCE',
                  SubTitle1: 'Commerce',
                  SubTitle2: 'Arts',
                  SubTitle3: 'Mcvc'
                },
                {
                  Title: 'DOCTORAL Programme',
                  SubTitle1: 'Commerce',
                  SubTitle2: 'Arts',
                  SubTitle3: 'Mcvc'
                }
              ]
            }
          ],
        },
        {
          compId: 6,
          compName: "cardcarosuel",
          metadata: [
           {
            id:1,
            /* slides:[
              {
                slideNo:1,
                cards:[
                  {
                    id:1,
                    img:{
                      url:"",
                      alt:"",
                      routeLink:"",
                    },
                    data:{
                      cardHeading:"Lab",
                      description:""
                    }
                  },
                  {
                    id:2,
                    img:{
                      url:"",
                      alt:"",
                      routeLink:"",
                    },
                    data:{
                      cardHeading:"Lab",
                      description:""
                    }
                  },
                  {
                    id:3,
                    img:{
                      url:"",
                      alt:"",
                      routeLink:"",
                    },
                    data:{
                      cardHeading:"Lab",
                      description:""
                    }
                  }
                ]
              }
            ] */
            slides:[
              {
                id:1,
                cards:[
                  {
                    id:1,
                    img:{
                      url:"../../../assets/images/Chetana Building.jpeg",
                      alt:"",
                      routeLink:""
                    },
                    data:{
                      cardHeading:"Lab",
                      description:""
                    }
                  },
                  {
                    id:2,
                    img:{
                      url:"../../../assets/images/Chetana Building.jpeg",
                      alt:"",
                      routeLink:""
                    },
                    data:{
                      cardHeading:"Lab",
                      description:""
                    }
                  },
                  {
                    id:3,
                    img:{
                      url:"../../../assets/images/Chetana Building.jpeg",
                      alt:"",
                      routeLink:""
                    },
                    data:{
                      cardHeading:"Lab",
                      description:""
                    }
                  }
                ]
              }
            ]
           },{
            id:2,
            slides:[
              {
                id:1,
                cards:[
                  {
                    id:1,
                    img:{
                      url:"../../../assets/images/Chetana Building.jpeg",
                      alt:"",
                      routeLink:""
                    },
                    data:{
                      cardHeading:"Lab",
                      description:""
                    }
                  },
                  {
                    id:2,
                    img:{
                      url:"../../../assets/images/Chetana Building.jpeg",
                      alt:"",
                      routeLink:""
                    },
                    data:{
                      cardHeading:"Lab",
                      description:""
                    }
                  },
                  {
                    id:3,
                    img:{
                      url:"../../../assets/images/Chetana Building.jpeg",
                      alt:"",
                      routeLink:""
                    },
                    data:{
                      cardHeading:"Lab",
                      description:""
                    }
                  }
                ]
              }
            ]
           }
          ]
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
                profileUrl: "https://play-lh.googleusercontent.com/0pyqGxdVkQsZUyWiDkvlUHRfCNcHdFS9Sq8G-GpCl9Idvd2fEUakpboNxqlMNVdDqMA=w240-h480-rw"
              },
              {
                comment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                name: "Lappi",
                designation: "ncc candidate",
                companyName: "Gareeb chetana",
                profileUrl: "https://www.inpixio.com/remove-background/images/main-before.jpg"
              },
              {
                comment: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                name: "vandita",
                designation: "pgl",
                companyName: "BscIT",
                profileUrl: "https://us.123rf.com/450wm/marctran/marctran1804/marctran180400117/99234583-passport-photo-portrait-of-asian-smiling-woman-.jpg?ver=6"
              }
            ]
          }
        },


      ]
    }
  ]
}


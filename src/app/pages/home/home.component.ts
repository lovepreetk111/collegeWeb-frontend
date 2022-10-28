import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() {
    console.log(this.pages)
  }

  ngOnInit(): void {
  }

  currentPageIndex = 0;
  pages: any = [
    {
      pageName: 'Home',
      component: [
        {
          compId: 1,
          compName: 'header',
          metadata: [
            {
              id: 1,
              nav: 'About',
              link: '/pages/aboout'
            },
            {
              id: 2,
              nav: 'Course',
              link: '/pages/course',
              child: [
                {
                  dropdown: 'JUNIOR COLLEGE',
                  url: 'something'
                },
                {
                  dropdown: 'DEGREE COLLEGE',
                  url: 'something'
                },
                {
                  dropdown: 'SELF FINANCE COURSES',
                  url: 'something'
                },
                {
                  dropdown: 'MASTER OF COMMERCE',
                  url: 'something'
                },
                {
                  dropdown: 'DOCTORAL PROGRAMME',
                  url: 'something'
                }
              ]
            },
            {
              id: 3,
              nav: 'Examination',
              link: '/pages/examination',
              child: [
                {
                  dropdown: "PLACEMENT AT CHETANA'S",
                  url: 'something'
                },
                {
                  dropdown: 'TRANNING PROGRAME',
                  url: 'something'
                },
                {
                  dropdown: 'PLACEMENT TRACKER',
                  url: 'something'
                },
                {
                  dropdown: 'M.COM',
                  url: 'something'
                },
                {
                  dropdown: 'RESULT ANALYSIS',
                  url: 'something'
                }
              ]
            },
            {
              id: 4,
              nav: 'Admision',
              link: '/pages/admission',
            },
            {
              id: 5,
              nav: 'Placemant',
              link: '/pages/placemant',
              child: [
                {
                  dropdown: "PLACEMENT AT CHETANA'S",
                  url: 'something'
                },
                {
                  dropdown: 'TRANNING PROGRAME',
                  url: 'something'
                },
                {
                  dropdown: 'PLACEMENT TRACKER',
                  url: 'something'
                }
              ]
            },
            {
              id: 6,
              nav: 'Research',
              link: '/pages/research',
              child: [
                {
                  dropdown: "ABOUT RESEARCH COLLEGE"
                },
                {
                  dropdown: "PUBLICATION"
                },
                {
                  dropdown: "PROSPECTUS"
                },
                {
                  dropdown: "CONFERENCE PROCEDINGS"
                },

              ]
            },
            {
              id: 8,
              nav: "Student’s Corner",
              link: '/pages/Contact-Us',
            },
            {
              id: 8,
              nav: 'Contact-Us',
              link: '/pages/Contact-Us',
            }
          ]
        },
        {
          compID: 2,
          compName: 'notices',
          metadata:
          {
            noticeLink1: 'Pankaj',
            noticeLink2: 'Pankaj VISHWAKARMA',
            noticeLink3: 'Pankaj BHOLE',
            noticeLink4: 'Pankaj SHANKAR',
          },
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
          metadata: {}
        },
        {
          compID: 5,
          compName: "Accordian",
          metadata: [
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
            },
          ],
        },
        {
          compId: 6,
          compName: "cardcarosuel",
          metadata: [
            {
              id:1,
              img: {
                url: "../../../assets/images/next.svg",
                alt: "image",
                routeLink: "/page/ground",
                data: {
                  cardHeading: "Ground",
                  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                }
              }
            },
            {
              id:2,
              img: {
                url: "../../../assets/images/next.svg",
                alt: "image",
                routeLink: "/page/lab",
                data: {
                  cardHeading: "Lab",
                  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                }
              }
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
        {
          compId: 8,
          compName: 'footer',
          metadata: [
            {
              ContactCall: {
                Number: '9321992130',
              },
              ContactMail: {
                mail: 'chetanahscce@yahool.com'
              },
              socialMedia: [
                {
                  url: "../../assets/img/ig.png",
                  alt: 'college insta page',
                  link: 'https://www.instagram.com/chetanas_sfc/?hl=en'
                },
                {
                  url: '../../assets/img/yt.png',
                  alt: 'college youtube channel',
                  link: 'https://www.youtube.com/channel/UCr2658Nq363khQvTSIxntwQ'
                },
                {
                  url: '../../assets/img/fb.png',
                  alt: 'college facebook page',
                  link: 'https://www.facebook.com/people/Chetanas-Self-Financing-Courses/100064103347725/'
                },
              ]
            }
          ]
        },
        /*  {
           compID: 5,
           compName: "Accordian",
           metadata: [
             {
               img: {
                 url: "../../../assets/images/ChetanaJC.svg",
                 alt: 'kuch toh hai',
                 Text: 'Acedemic'
               },
               data: [
                 {
                   Title: 'JUNIOR COLLEGE',
                   SubTitle1: 'Commerce',
                   SubTitle2: 'Arts',
                   SubTitle3: 'Mcvc',
                 }
               ]
             },
             {
               data: [
                 {
                   Title: 'JUNIOR COLLEGE',
                   SubTitle1: 'Commerce',
                   SubTitle2: 'Arts',
                   SubTitle3: 'Mcvc',
                 }
               ]
             },
             {
               data: [
                 {
                   Title: 'SELF FINANCING COURSES',
                   SubTitle1: 'Commerce',
                   SubTitle2: 'Arts',
                   SubTitle3: 'Mcvc'
                 }
               ]
             },
             {
               data: [
                 {
                   Title: 'MASTER OF COMMERCE',
                   SubTitle1: 'Commerce',
                   SubTitle2: 'Arts',
                   SubTitle3: 'Mcvc'
                 }
               ]
             },
             
             {
               data:[
                 {
                   Title: 'DOCTORAL Programme',
               SubTitle1: 'Commerce',
               SubTitle2: 'Arts',
               SubTitle3: 'Mcvc'
                 }
               ]
             },
            
           ],
         }, */
      ]
    }
  ]
}


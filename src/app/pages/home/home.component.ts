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
      component:[
        {
          compId:1,
          compName:'header',
          metadata:[
            {
              id:1,
              nav:'About',
              link:'/pages/about',
              child:[
                {
                  dropdown:'something',
                  url:'something'
                },
                {
                  dropdown:'something',
                  url:'something'
                },
                {
                  dropdown:'something',
                  url:'something'
                }
              ]
            },
            {
              id:1,
              nav:'About',
              link:'/pages/about',
              child:[
                {
                  dropdown:'something',
                  url:'something'
                },
                {
                  dropdown:'something',
                  url:'something'
                },
                {
                  dropdown:'something',
                  url:'something'
                }
              ]
            },
            {
              id:1,
              nav:'About',
              link:'/pages/about',
              child:[
                {
                  dropdown:'something',
                  url:'something'
                },
                {
                  dropdown:'something',
                  url:'something'
                },
                {
                  dropdown:'something',
                  url:'something'
                }
              ]
            }
          ]
        },
        {
          compId:2,
          compName:'notices',
          metadata:{}
        },
        {
        compId:3,
        compName:'banner-carousel',
        metadata:[
          {
            id: 1,
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
          {
            id: 2,
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
        compId:4,
        compName:'testimonials',
        metadata:
          {
            title: "Testimonials",
            description: "my name is ghazala.Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.",
            cardsData:[
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
        compId:5,
        compName:'footer',
        metadata:[
          {
            call:{
              
            },
            mail:{

            },
            socialMedia:[
              {
                url:"../../assets/img/ig.png",
                alt:'college insta page',
                link:'https://www.instagram.com/chetanas_sfc/?hl=en'
              },
              {
                url:"../../assets/img/ig.png",
                alt:'college insta page',
                link:'https://www.instagram.com/chetanas_sfc/?hl=en'
              },
              {
                url:"../../assets/img/ig.png",
                alt:'college insta page',
                link:'https://www.instagram.com/chetanas_sfc/?hl=en'
              },
            ]
          }
        ]
      }
      ]
    }
  ]
}


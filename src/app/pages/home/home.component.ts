import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

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
          metadata:{}
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
        compName:'',
        metadata:[
          
        ]
      }
      ]
    }
  ]
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container1',
  templateUrl: './container1.component.html',
  styleUrls: ['./container1.component.scss']
})
export class Container1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  currentPageIndex = 0;
  pages: any = [
    {
      pageName: 'button-comp',
      components: [
        {
          compID: 1,
          metadata: {
            style: {
              'background-color': 'rgb(236, 236, 236)'
            },
          }
        },
        {
          compID: 2,
          metadata: {
            Text: 'About Chetanas',
          },
        },
        {
          compID: 3,
          metadata: {
            url: '../../../assets/images/ChetanaJC.svg',
            alt: 'image hai clg ka'
          },
        },

        {
          compID: 4,
          metadata: [
            
            {
              url: "../../../assets/images/vision.svg",
              alt: 'example3',
              header: 'Vision',
              text: 'To raise our institution to higher levels of academic and cultural excellence and create an urge to enrich the personality of our students to serve humanity as one global family.'
            },
            {
              url: "../../../assets/images/mission.svg",
              alt: 'example3',
              header: 'Mission',
              text: 'To raise our institution to higher levels of academic and cultural excellence and create an urge to enrich the personality of our students to serve humanity as one global family.'
            },
            {
              url: "../../../assets/images/values.svg",
              alt: 'example3',
              header: 'Values',
              text: 'To raise our institution to higher levels of academic and cultural excellence and create an urge to enrich the personality of our students to serve humanity as one global family.'
            }
          ]
        }
      ],
    },
  ];
}

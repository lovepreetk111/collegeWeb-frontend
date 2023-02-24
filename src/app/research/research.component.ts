import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  currentPageIndex = 0;
  pages: any = [
    {
      pageName: 'Research',
      component: [
        {
          compId: 1,
          compName: 'Image Component 1',
          metadata: [
            {
              url: '../../../assets/images/Chetana Building.jpeg',
              alt: "koi toh imaage",
              text: "Research"
            },
          ]
        },
        {
          compId:2,
          compname:"Button Comp",
          metadata:{
            info:{
              data:"Publications"
            }
          }
        },
        {
          compId:3,
          compname:"Button Comp",
          metadata:{
            info:{
              data:""
            }
          }
        },
        {
          compId:4,
          compname:"Button Comp",
          metadata:{
            info:{
              data:"Magzine"
            }
          }
        },
        {
          compId:5,
          compname:"Button Comp",
          metadata:{
            info:{
              data:""
            }
          }
        },
        {
          compId:6,
          compname:"Button Comp",
          metadata:{
            info:{
              data:"Conference proceeding"
            }
          }
        }


      ]
    }
  ]
}



/*  */
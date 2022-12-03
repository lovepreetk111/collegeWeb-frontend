import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-sub1',
  templateUrl: './event-sub1.component.html',
  styleUrls: ['./event-sub1.component.scss']
})
export class EventSub1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  currentPageIndex = 0;
  pages: any = [
    {
      pageName: 'Events',
      component: [
        {
          compId:1,
          compName:'Student Detail',
          metadata:[
              {
                url:'../../../assets/images/event.png',
                alt:"koi toh imaage",
                text:"EVENT DETAILS"
                
              },
          ]
        
        }, 

        {
          compId:2,
          compName:'detail',
          metadata:
          [
            {
              image:'../../../assets/images/EventPhoto.jpg',
              alt:'Pankaj',
              date:'20Th Nov',
              eventName:'TECHKRITI 1.0',
              time:'9:00 to 11:00',
              venu:'CHETANA  COLLEGE'
            }
          ]
        },
        
        {
          compId:3,
          compName:'detail2',
          metadata:
          [
            {
              url:'../../../assets/images/EventPhoto.jpg',
              alt:'Pankaj'  
            }
          ]
        },

      ]
    }
  ]
}


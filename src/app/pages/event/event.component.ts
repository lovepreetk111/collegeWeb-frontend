import { Component, Input, OnInit } from '@angular/core';
import { IDetailsCard2 } from 'src/app/service/data';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
@Input() cardData!:IDetailsCard2;
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
          compName:'Image Component 1',
          metadata:[
              {
                url:'../../../assets/images/event.png',
                alt:"koi toh imaage",
                text:"Events"
                
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
              venu:'CHETANA  COLLEGE',
              buttonData:"Read More",
              routeLink:'techkriti'
            },
            {
              image:'../../../assets/images/EventPhoto.jpg',
              alt:'Pankaj',
              date:'10Th Nov',
              eventName:'TECHKRITI 2.0',
              time:'9:00 to 11:00',
              venu:'CHETANA  COLLEGE',
              buttonData:"Read More",
              routeLink:''
            },
            {
              image:'../../../assets/images/EventPhoto.jpg',
              alt:'Pankaj',
              date:'20Th Jan',
              eventName:'TECHKRITI 3.0',
              time:'9:00 to 11:00',
              venu:'CHETANA  COLLEGE',
              buttonData:"Read More",
              routeLink:''
            },
            {
              image:'../../../assets/images/EventPhoto.jpg',
              alt:'Pankaj',
              date:'20Th Jan',
              eventName:'TECHKRITI 4.0',
              time:'9:00 to 11:00',
              venu:'CHETANA  COLLEGE',
              buttonData:"Read More",
              routeLink:''
            },
            {
              image:'../../../assets/images/EventPhoto.jpg',
              alt:'Pankaj',
              date:'20Th Nov',
              eventName:'TECHKRITI 5.0',
              time:'9:00 to 11:00',
              venu:'CHETANA  COLLEGE',
              buttonData:"Read More",
              routeLink:''
            }, 
            {
              image:'../../../assets/images/EventPhoto.jpg',
              alt:'Pankaj',
              date:'20Th Nov',
              eventName:'TECHKRITI 6.0',
              time:'9:00 to 11:00',
              venu:'CHETANA  COLLEGE',
              buttonData:"Read More",
              routeLink:''
            },
            {
              image:'../../../assets/images/EventPhoto.jpg',
              alt:'Pankaj',
              date:'20Th Nov',
              eventName:'TECHKRITI 7.0',
              time:'9:00 to 11:00',
              venu:'CHETANA  COLLEGE',
              buttonData:"Read More",
              routeLink:''
            },
            
          ]
        },
       
      ]
    }
  ]
}




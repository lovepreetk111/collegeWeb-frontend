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
  // pages: any = [
  //   {
  //     pageName: 'Events',
  //     component: [
  //       {
  //         compId:1,
  //         compName:'Student Detail',
  //         metadata:[
  //             {
  //               url:'../../../assets/images/event.png',
  //               alt:"koi toh imaage",
  //               text:"EVENT DETAILS"
                
  //             },
  //         ]
        
  //       }, 

  //       {
  //         compId:2,
  //         compName:'detail',
  //         metadata:
  //         [
  //           {
  //             image:'../../../assets/images/EventPhoto.jpg',
  //             alt:'Pankaj',
  //             date:'20Th Nov',
  //             eventName:'TECHKRITI 1.0',
  //             time:'9:00 to 11:00',
  //             venu:'CHETANA  COLLEGE'
  //           }
  //         ]
  //       },
        
  //       {
  //         compId:3,
  //         compName:'detail2',
  //         metadata:
  //         [
  //           {
  //             url:'../../../assets/images/EventPhoto.jpg',
  //             alt:'Pankaj'  
  //           }
  //         ]
  //       },

  //     ]
  //   }
  // ]


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
              venu:'CHETANA  COLLEGE'
            },
            {
              image:'../../../assets/images/EventPhoto.jpg',
              alt:'Pankaj',
              date:'10Th Nov',
              eventName:'TECHKRITI 2.0',
              time:'9:00 to 11:00',
              venu:'CHETANA  COLLEGE'
            },
            {
              image:'../../../assets/images/EventPhoto.jpg',
              alt:'Pankaj',
              date:'20Th Jan',
              eventName:'TECHKRITI 3.0',
              time:'9:00 to 11:00',
              venu:'CHETANA  COLLEGE'
            },
            {
              image:'../../../assets/images/EventPhoto.jpg',
              alt:'Pankaj',
              date:'20Th Jan',
              eventName:'TECHKRITI 4.0',
              time:'9:00 to 11:00',
              venu:'CHETANA  COLLEGE'
            },
            {
              image:'../../../assets/images/EventPhoto.jpg',
              alt:'Pankaj',
              date:'20Th Nov',
              eventName:'TECHKRITI 5.0',
              time:'9:00 to 11:00',
              venu:'CHETANA  COLLEGE'
            }, 
            {
              image:'../../../assets/images/EventPhoto.jpg',
              alt:'Pankaj',
              date:'20Th Nov',
              eventName:'TECHKRITI 6.0',
              time:'9:00 to 11:00',
              venu:'CHETANA  COLLEGE'
            },
            {
              image:'../../../assets/images/EventPhoto.jpg',
              alt:'Pankaj',
              date:'20Th Nov',
              eventName:'TECHKRITI 7.0',
              time:'9:00 to 11:00',
              venu:'CHETANA  COLLEGE'
            },
            
          ]
        },
       
      ]
    }
  ]




  
}


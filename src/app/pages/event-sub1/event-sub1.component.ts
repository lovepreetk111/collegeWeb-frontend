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
            },
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
              url:'/assets/images/ChetanaDC.jpeg',
              alt:'Pankaj'  
            }
          ]
        },


        {
          compId:4,
          compName:"aboutUs",
          metadata:{
      
            info4:
            {
              text: "<h2>ADVANCE WEB DEVELOPMENT WORKSHOP <br><br>  <h4>  Time : 9:30am - 4:45pm Venue : Cristal Centre, 254 New Yourk <br><br><p> I must explain to you how all this a mistaken idea of denouncing great explorer of the rut the is lder of human happiness pcias unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit asnatur aut odit aut fugit, sed quia consequuntur magni dolores eos quit.<br><br> <p> I must explain to you how all this a mistaken idea of denouncing great explorer of the rut the is lder of human happiness pcias unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.<br><br> <p> I must explain to you how all this a mistaken idea of denouncing great explorer of the rut the is lder of human happiness pcias unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
            },
           
            }
        },

        {  
          compId: 5,
          compName: 'speaker',
          metadata:
          [
          {
            image:'/assets/images/FACULTY.svg',
            alt:'Reddy',
            name:'Saravanan Reddy',
            role:'Course Co-ordinator'
          },
          {
            image:'/assets/images/FACULTY.svg',
            alt:'Reddy',
            name:'Saravanan Reddy',
            role:'Course Co-ordinator'
          },
          {
            image:'/assets/images/FACULTY.svg',
            alt:'Reddy',
            name:'Saravanan Reddy',
            role:'Course Co-ordinator'
          },

        ]
        } 

      ]
    }
  ]

  
}


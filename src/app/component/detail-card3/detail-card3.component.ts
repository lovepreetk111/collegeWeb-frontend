import { Component, Input, OnInit } from '@angular/core';
import { ICourseFeature } from 'src/app/service/data';

@Component({
  selector: 'app-detail-card3',
  templateUrl: './detail-card3.component.html',
  styleUrls: ['./detail-card3.component.scss']
})
export class DetailCard3Component implements OnInit {
@Input() CourseData:ICourseFeature[]=[];
  constructor() { }

  ngOnInit(): void {
  }


  currentPageIndex = 0;
  pages: any = [
    {
      pageName: 'detailcard3',
      component: [
        {
          compId:1,
          compName:"detail-card3",
          metadata:{
            info1:
            {
              url:'../../../assets/images/ChetanaDC.jpeg',
              alt:'detail',
             },
            },
        }
      ]
    }
  ]
}

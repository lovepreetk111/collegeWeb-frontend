import { Component, Input, OnInit } from '@angular/core';
import { INoticeDetails } from 'src/app/service/data';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

    /* function Image_OnError(img){
      image.onerror ="";
      image.style.visibility ="hidden";
      return true;
    } */
  }
  currentPageIndex = 0;
  pages: any = [
    {
      pageName: "Notice",
      component: [
        {
          compId:1,
          compname: "ButtonComp & ModalCmp",
          metadata: {
            buttonData: {
              data: "New Notices"
            },
            NoticeDetails:[
              {
                currentId:"1",
                noticeHeader: "Exam",
                noticeContentName: "TY TimeTable",
                createdAt: "12/12/2023",
                createdBy: "Lovepreet Kaur",
                modalData: {
                  driveLink: "I Frame ki aarati"
                }
              }
            ]

          }
        },
        {
          compId:2,
          compName:"cmp and ModalCmp",
          metadata:{
            buttonData: {
              data: "Old Notices"
            },
            noticeDetails:[
              {
                noticeHeader: "Exam",
                noticeContentName: "TY TimeTable",
                createdAt: "12/12/2023",
                createdBy: "Lovepreet Kaur",
                modalData: {
                  driveLink: "I Frame ki aarati"
                }
              }
            ]
          }
        }
      ]

    }
  ]
}

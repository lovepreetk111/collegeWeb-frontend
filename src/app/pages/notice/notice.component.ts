import { Component, Input, OnInit } from '@angular/core';
import { INoticeConfig, INoticeDetails } from 'src/app/service/data';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {
  @Input() noticeData: INoticeConfig[] = []
  constructor( private noticeDatas:DataServiceService) { }

  ngOnInit(): void {

    this.noticeDatas.getNoticeData().subscribe(
      data =>{
        this.noticeData = data;
      }
    )
  }
  currentPageIndex = 0;
  pages: any = [
    {
      pageName: "Notice",
      component: [
        {
          compId: 1,
          compname: "ButtonComp & ModalCmp",
          metadata: {
            buttonData: {
              data: "New Notices"
            },
            /* data: [
              {
                currentId: "3",
                noticeHeader: "Exam",
                noticeContentName: "TY TimeTable",
                createdAt: "12/12/2023",
                createdBy: "Lovepreet Kaur",
                modalData: {
                  driveLink: "https://drive.google.com/file/d/1OrGlV8cKLruZgN-SF09aNFMBcW7zyDUU/view"
                }
              },
              {
                currentId: "4",
                noticeHeader: "DataBase",
              },
              {
                noticeHeader: "Another"
              }
            ] */
            data:[
              {
                noticeHeader:"Exam",
                noticeContentName:"TY-TimeTable",
                createdBy:"John Deo",
                createdAt:"12/03/2023",
                driveLink:"https://drive.google.com/file/d/1OrGlV8cKLruZgN-SF09aNFMBcW7zyDUU/preview"
              },
              {
                noticeHeader:"Events",
                noticeContentName:"TY-TimeTable",
                createdBy:"John Deo",
                createdAt:"12/03/2023",
                driveLink:"https://drive.google.com/file/d/1OrGlV8cKLruZgN-SF09aNFMBcW7zyDUU/preview"
              }
            ]
          }
        },
        {
          compId: 2,
          compName: "cmp and ModalCmp",
          metadata: {
            buttonData: {
              data: "Old Notices"
            },
            newData: [
              {
                noticeHeader: "Exam",
                noticeContentName: "TY TimeTable",
                createdAt: "12/12/2023",
                createdBy: "Lovepreet Kaur",
                modalData: {
                  driveLink: "I Frame ki aarati"
                }
              },
              {
                currentId: "4",
                noticeHeader: "DataBase",
              },
              {
                noticeHeader: "Another"
              }
            ]
          }
        }
      ]

    }
  ]
}

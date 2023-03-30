import { Component, Input, OnInit } from '@angular/core';
import { Inotice, INoticeConfig } from 'src/app/service/data';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.scss']
})
export class NoticesComponent implements OnInit {
  @Input() InputData:Inotice[]=[]
  @Input() noticeData: INoticeConfig[] = []
  constructor(  private noticeDatas:DataServiceService) { }

  ngOnInit(): void {
    this.noticeDatas.getNoticeData().subscribe(
      data =>{
        console.log(data);
        this.noticeData = data;
      }
    )
  }

}

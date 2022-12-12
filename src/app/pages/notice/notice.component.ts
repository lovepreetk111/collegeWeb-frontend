import { Component, Input, OnInit } from '@angular/core';
import { INoticeDetails } from 'src/app/service/data';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {
@Input() NoticeDetails: INoticeDetails[]=[];
  constructor() { }

  ngOnInit(): void {

    /* function Image_OnError(img){
      image.onerror ="";
      image.style.visibility ="hidden";
      return true;
    } */
  }

  

}

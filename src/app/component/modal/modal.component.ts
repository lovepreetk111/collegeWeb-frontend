import { Component, Input, OnInit } from '@angular/core';
import { INoticeDetails } from 'src/app/service/data';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() NoticeDetails: INoticeDetails[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  

}

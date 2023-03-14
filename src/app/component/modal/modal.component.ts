import { Component, Input, OnInit } from '@angular/core';
import { INoticeDetails } from 'src/app/service/data';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() NoticeDetails: INoticeDetails[] = [];
  displayMaximizable!: boolean;

  constructor() { }
  displayBasic!: boolean;

  ngOnInit(): void {
    // this.displayMaximizable = true
  }
  showBasicDialog() {
    this.displayBasic = true;
  }

  showMaximizableDialog() {
    this.displayMaximizable = true;
    console.log("Got the hit")
  }

}

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
  displayBasic2!: boolean;

  ngOnInit(): void {
  }
  showBasicDialog() {
    this.displayBasic2 = true;
  }

  showMaximizableDialog() {
    this.displayMaximizable = true;
  }

}

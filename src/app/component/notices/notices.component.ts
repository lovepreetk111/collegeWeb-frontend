import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.scss']
})
export class NoticesComponent implements OnInit {
  @Input() InputData!:Inotice;
  constructor() { }

  ngOnInit(): void {
  }

}
interface Inotice{
  noticeLink1: string;
  noticeLink2: string;
  noticeLink3: string;
  noticeLink4: string;
}
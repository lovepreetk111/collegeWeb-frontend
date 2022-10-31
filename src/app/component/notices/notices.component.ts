import { Component, Input, OnInit } from '@angular/core';
import { Inotice } from 'src/app/service/data';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.scss']
})
export class NoticesComponent implements OnInit {
  @Input() InputData:Inotice[]=[]
  constructor() { }

  ngOnInit(): void {
  }

}

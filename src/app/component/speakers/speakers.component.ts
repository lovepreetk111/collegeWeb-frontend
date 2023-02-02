import { Component, Input, OnInit } from '@angular/core';
import { ISpeaker } from 'src/app/service/data';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {
@Input() speakerData:ISpeaker[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}

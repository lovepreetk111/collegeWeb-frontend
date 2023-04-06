import { Component, Input, OnInit } from '@angular/core';
import { IBtnCmpData } from 'src/app/service/data';

@Component({
  selector: 'app-button-cmp1',
  templateUrl: './button-cmp1.component.html',
  styleUrls: ['./button-cmp1.component.scss']
})
export class ButtonCmp1Component implements OnInit {
  @Input() Text!:IBtnCmpData
  constructor() { 
  }

  ngOnInit(): void {
  }

}

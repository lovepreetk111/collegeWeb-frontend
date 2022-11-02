import { Component, Input, OnInit } from '@angular/core';
import { text } from 'src/app/pages/about/about.component';

@Component({
  selector: 'app-text-cmp1',
  templateUrl: './text-cmp1.component.html',
  styleUrls: ['./text-cmp1.component.scss']
})
export class TextCmp1Component implements OnInit {
@Input() datas!:text;
  constructor() { }

  ngOnInit(): void {
  }

}

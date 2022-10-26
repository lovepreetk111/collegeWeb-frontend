import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-cmp1',
  templateUrl: './button-cmp1.component.html',
  styleUrls: ['./button-cmp1.component.scss']
})
export class ButtonCmp1Component implements OnInit {
  @Input() Text!: string;
  constructor() { }

  ngOnInit(): void {
  }

}

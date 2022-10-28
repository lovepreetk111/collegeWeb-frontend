import { Component, Input, OnInit } from '@angular/core';
import { IFooterCmp } from '../service/data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() footerData: IFooterCmp[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

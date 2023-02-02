import { Component, Input, OnInit } from '@angular/core';
import { IDropDown } from 'src/app/service/data';

@Component({
  selector: 'app-accordian-dropdwn',
  templateUrl: './accordian-dropdwn.component.html',
  styleUrls: ['./accordian-dropdwn.component.scss']
})
export class AccordianDropdwnComponent implements OnInit {
  @Input() DropDownData:IDropDown[]=[];

  constructor() { }

  ngOnInit(): void {
  }

 
}

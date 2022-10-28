import { Component, OnInit } from '@angular/core';

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

  currentPageIndex = 0;
  pages: any = [
    {
      pageName: 'accordian-dropdwn',
      component: [
        {
          compID: 2,
          metadata: {
            url: '../../assets/image/ChetanaJC1.svg',
            alt:'kuch toh hai',
            Text:'Acedemic'
          },
        },
        
      ],
    },
  ];

}

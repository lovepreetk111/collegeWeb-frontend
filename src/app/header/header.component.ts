import { Component, Input, OnInit } from '@angular/core';
import { InavbarConfig } from '../service/data';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Input() headerData:InavbarConfig[] = []
  // DataserviceService: any;
  constructor( private dataservice: DataserviceService) { }

  ngOnInit(): void {
    this.dataservice.getNavbarData().subscribe(
      data => {
        console.log(data)
        this.headerData = data;
      }
    );
  }
}

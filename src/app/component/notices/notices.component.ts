import { Component, Input, OnInit } from '@angular/core';
import { BanDataService } from 'src/app/service/ban-data.service';
import { Inotice } from 'src/app/service/data';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.scss']
})
export class NoticesComponent implements OnInit {
  @Input() InputData:Inotice[]=[]
  constructor(private banData:BanDataService) { }

  ngOnInit(): void {
    this.banData.getNoticeData().subscribe(
      data => {
        console.log(data)
        this.InputData = data;
      }
    );
  }

}

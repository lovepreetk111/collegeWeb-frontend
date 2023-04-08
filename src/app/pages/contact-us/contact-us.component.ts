import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { __values } from 'tslib';
// import { IContact } from 'src/app/service/data';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
@Input() item!:string;

dataModel ='';
dataModel1 = '';
dataModel2 = '';
dataModel3 = '';
 
@Output() 
sendDataEmitter: EventEmitter<any> = new EventEmitter();
  sendData(){
    const obj = {
      name: this.dataModel,
      email: this.dataModel1,
      contact: this.dataModel2,
      message: this.dataModel3
    }
  this.sendDataEmitter.emit(obj);
  }



  constructor() {
   }

  ngOnInit(): void {
  }

  currentPageIndex = 0;
  pages: any = [
    {
      pageName: 'Contact',
      component: [
        {
          compId:1,
          compName:"top-img-btm-txt",
          metadata:[
            {
              url:'../../../assets/images/vision.svg',
              alt:'bgbgngggngngnggngn',
              header:'Address',
              text:'Survey No.341, Chetana Mahavidyalaya marg, Bandra (E) Mumbai-55 Maharashtra India',
              description1:'',
              description2:'',
             },
             {
               url:'../../../assets/images/vision.svg',
               alt:'jcnjcejjenc',
               header:'Call Us',
               text:'Degree College:(022) 22 6215 7898',
               description1:'Junior College: (+91) 7208698343, 9167156186, 9869247175',
               description2:'SFC(BMS/BAF/BAMMC/BSCIT): (022) 62157867',
              },
              {
               url:'../../../assets/images/vision.svg',
               alt:'cjnecjecj',
               header:'Email Us',
               text:'chetanahscce@yahoo.com',
               description1:'',
               description2:'',
              },
          ],
        },
        {
          compId:2,
          compName:"card",
          metadata1:[
            {
              url:'../../../assets/images/previous.svg',
              alt:'bgbgngggngngnggngn',
             }
          ],
        }
      ]
    }
  ]
}



import { Component, Input, OnInit } from '@angular/core';
// import { IContact } from 'src/app/service/data';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  // @Input() contactData:IContact[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  
        metadata:any = [
          {
           url:'',
           alt:'bgbgngggngngnggngn',
           MainText:'Address',
           description:'Survey No.341, Chetana Mahavidyalaya marg, Bandra (E) Mumbai-55 Maharashtra India',
           description1:'',
           description2:'',
          },
          {
            url:'',
            alt:'jcnjcejjenc',
            MainText:'Call Us',
            description:'Degree College:(022) 22 6215 7898',
            description1:'Junior College: (+91) 7208698343, 9167156186, 9869247175',
            description2:'SFC(BMS/BAF/BAMMC/BSCIT): (022) 62157867',
           },
           {
            url:'',
            alt:'cjnecjecj',
            MainText:'Email Us',
            description:'chetanahscce@yahoo.com',
            description1:'',
           description2:'',
           },
           

        ]
    


// export interface IContact{
// url:string,
// alt:string,
// MainText:string,
// description:string,
// description1:string,
// description2:string
// }
      }
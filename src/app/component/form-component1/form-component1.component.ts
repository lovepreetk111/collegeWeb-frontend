import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-component1',
  templateUrl: './form-component1.component.html',
  styleUrls: ['./form-component1.component.scss']
})
export class FormComponent1Component implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }

}

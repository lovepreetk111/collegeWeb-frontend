import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Iregistration } from '../../service/data.interface';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {
  allRegisterData: Iregistration[] = []
  parentSelector:boolean = false
  // dar: any;
  constructor(private data:DataService,private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
   this.getRegister();

  }
  getRegister() {
    this.data.getRegister().subscribe(res => {
      this.allRegisterData = res;
      // const data = res;
      console.log(this.allRegisterData)
    })
  }

  deleteClass(_id:string){
    this.confirmationService.confirm({
        message: 'Are you sure that you want to perform this action?',
        accept: () => {
            //Actual logic to perform a confirmation
            const datadelete = this.allRegisterData.length;
            if(datadelete === 1){
              alert("You Can't delete this User atleast 1 User should be present")
            }else
            this.data.deleteRegisterData(_id).subscribe((res)=>{
              console.log(res,'delete')
              this.getRegister();
            })
        }
    });
}

  // deleteClass(_id:string){
  // this.data.deleteRegisterData(_id).subscribe((res)=>{
  //   console.log(res,'delete')
  //   this.getRegister();
  // })
  // }

  onChangeCheckBox($event: any) {
    const id = $event.target.value;
    const isChecked = $event.target.checked;
  
    console.log('id:', id);
    console.log('isChecked:', isChecked);
  
    console.log('allRegisterData:', this.allRegisterData);
  
    this.allRegisterData = this.allRegisterData.map((d) => {
      console.log('_id:', d._id);
      if (d._id === id) {
        d.Active = isChecked;
        this.parentSelector = false;
        return d;
      }
  
      if (id === '-1') {
        d.Active = this.parentSelector;
        return d;
      }
  
      return d;
    });
  
    console.log('modified allRegisterData:', this.allRegisterData);
  
    this.data.saveRegisterData( this.allRegisterData ).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  

}



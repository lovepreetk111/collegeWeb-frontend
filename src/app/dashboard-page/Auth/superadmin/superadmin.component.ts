import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Iregistration } from '../../service/data.interface';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrls: ['./superadmin.component.scss']
})
export class SuperadminComponent implements OnInit {

  
  allRegisterDatas: Iregistration[] = [];
  parentSelector:boolean = false
  // dar: any;
  constructor(private data:DataService,private confirmationService: ConfirmationService ,private http: HttpClient,private router :Router) { }

  ngOnInit(): void {
   this.getRegister();

  }
  getRegister() {
    this.data.getRegister().subscribe(res => {
      this.allRegisterDatas = res;
      // const data = res;
      console.log(this.allRegisterDatas)
    })
  }

  deleteClass(_id:string){
    this.confirmationService.confirm({
        message: 'Are you sure that you want to perform this action?',
        accept: () => {
            //Actual logic to perform a confirmation
            const datadelete = this.allRegisterDatas.length;
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

onChangeCheckBox($event: any) {
  const id = $event.target.value;
  const isChecked = $event.target.checked;
  
  console.log('id:', id);
  console.log('isChecked:', isChecked);

  console.log('allRegisterData:', this.allRegisterDatas);

  this.allRegisterDatas = this.allRegisterDatas.map((d) => {
    console.log('_id:', d._id);
    if (d._id === id) {
      // Prevent unchecking the checkbox if there is only one checkbox checked
      const numChecked = this.allRegisterDatas.filter(data => data.Active).length;
      if (numChecked === 1 && d.Active && !isChecked) {
        alert('At least one checkbox must be checked!');
        return d;
      }

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

  console.log('modified allRegisterData:', this.allRegisterDatas);

  // check if at least one checkbox is checked
  const isAtLeastOneChecked = this.allRegisterDatas.some(d => d.Active);
  if (!isAtLeastOneChecked) {
    // display an error message
    alert('At least one checkbox must be checked!');
    // restore the previous checked state of each checkbox
    this.allRegisterDatas = this.allRegisterDatas.map((d) => {
      const prevChecked = d.Active; // retrieve the previous checked state
      d.Active = prevChecked;
      return d;
    });
    return;
  }

  this.data.saveRegisterData(this.allRegisterDatas).subscribe((res:any)=>{
    console.log(res);
  });
}









  apiUrl = "http://localhost:3000/"
  adminLogOut() {
    this.http.post(`${this.apiUrl}adminlogin/adminlogout`, {}).subscribe((res) => {
      // console.log(res);
      localStorage.removeItem('AdminToken');
      this.router.navigate(['admin/admindashboard']);
    });
  
  }


  
}

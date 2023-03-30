import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { INoticeConfig } from '../service/data.interface';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashnotice',
  templateUrl: './dashnotice.component.html',
  styleUrls: ['./dashnotice.component.scss']
})
export class DashnoticeComponent implements OnInit {

 
  allNoticeDatas: INoticeConfig[] = []
  formValue!: FormGroup
  parentSelector:boolean = false
  AddData=false
  EditData=false

  constructor(private noticeservice: DataService,  private formbuilder: FormBuilder,private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.getNoticeData();
    this.formValue = this.formbuilder.group(
      {
        noticeName: new FormControl(''), 
        noticeLink: new FormControl(''),
        noticeDate: new FormControl(''),
        modifiedBy: new FormControl(''),
        createdAt: new FormControl(''),
        updatedAt: new FormControl(''),
      }

    )
  }

  AddFlag(item: any){
    if(item == 'add'){
      this.formValue.reset()
      this.AddData = true
      this.EditData = false
    }
    if(item == 'edit'){
      this.AddData = false
      this.EditData = true
    }
  }

  getNoticeData() {
    this.noticeservice.getNoticeData().subscribe((datas) => {
      this.allNoticeDatas = datas;
      console.log(datas)
    })
  }

  editNoticeData(item: any) {
    console.log(item, "edit click items")
    delete item.createdAt;
    delete item.updatedAt;
    delete item.__v;
    this.formValue.addControl("_id", new FormControl(''))
    this.formValue.setValue(item)
  }

  update() {
    const id = this.formValue.value._id;
    this.noticeservice.updateNoticeData(id, this.formValue.value).subscribe((data:any)=>{
      this.allNoticeDatas = data
      alert("Data updated")
      console.log(data, "Updated data")
    })
    let ref = document.getElementById('cancel')
    ref?.click();
    this.getNoticeData()
  }
  
  postNoticeData() {
    this.allNoticeDatas = this.formValue.value;
    this.noticeservice.postNoticeData(this.formValue.value)
      .subscribe((res) => {
        console.log(res)
        this.formValue.reset()
        alert("Data Added")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.getNoticeData()
      })
  }

  /* deleteNoticeData(item: any) { 
    console.log(item._id, "delete ka id")
    this.noticeservice.deleteNoticeData(item._id).subscribe(data=>{
      alert("Data Deleted");
      this.getNoticeData()
    })
  } */

  deleteNoticeData(_id:string){

    this.confirmationService.confirm({
      message: 'Are you sure that you want to Delete this ?',
      accept: () => {
          //Actual logic to perform a confirmation
          const datadelete = this.allNoticeDatas.length;
          if(datadelete === 1){
            alert("You Can't delete this data atleast 1 data should be present")
          }else
          this.noticeservice.deleteNoticeData(_id).subscribe((res) => {
            console.log(res , 'Data Deleted Successfully')
            this.getNoticeData();
            
          })
           
      }
  });
  }



  onChangeCheckBox($event: any) {
    const id = $event.target.value;
    const isChecked = $event.target.checked;
  
    console.log('id:', id);
    console.log('isChecked:', isChecked);
  
    console.log('allNoticeDatas:', this.allNoticeDatas);
  
    this.allNoticeDatas = this.allNoticeDatas.map((d) => {
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
  
    console.log('modified allNoticeDatas:', this.allNoticeDatas);
  
    // this.noticeservice.saveNoticeData( this.allNoticeDatas ).subscribe(
    //   (res) => {
    //     console.log(res);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );

    this.noticeservice.saveNoticeData(this.allNoticeDatas).subscribe((res:any)=>{
console.log(res)
    })
  }




  }

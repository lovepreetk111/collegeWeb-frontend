import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormGroupName, FormArray } from '@angular/forms';
import { IBannerCarosuelComponent } from '../service/data.interface';
import { DataService } from '../service/data.service';
interface Product {
  name: string;
  id: any;
}

@Component({
  selector: 'app-dashdata-table',
  templateUrl: './dashdata-table.component.html',
  styleUrls: ['./dashdata-table.component.scss']
})
export class DashdataTableComponent implements OnInit {

  
  allBanData!: IBannerCarosuelComponent;
  allBanDatas: IBannerCarosuelComponent[] = []
  AddCarousel=false
  EditCarousel=false
  formValue!: FormGroup
  constructor(private data: DataService, private formbuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.getBanData();
    this.formValue = this.formbuilder.group( //object
      {
        innerData: this.formbuilder.array([
          this.formbuilder.group(
            {
              header: new FormControl(''),
              text: new FormControl(''),
              buttonText: new FormControl(''),
            }
          )
        ]),
        background: this.formbuilder.array([
          this.formbuilder.group({
            url: new FormControl(''),
            alt: new FormControl('')
          })
        ]),
        image: this.formbuilder.array([
          this.formbuilder.group(
            {
              url: new FormControl(''),
              alt: new FormControl('')
            }
          )
        ]),
        carouselDetails: this.formbuilder.array([
          this.formbuilder.group(
            {
              name: new FormControl(''),
              createdBy: new FormControl(''),
              modifiedBy: new FormControl(''),
              description: new FormControl('')
            }
          )
        ]),
        routeLink: new FormControl(''),
      })
  }
  AddFlag(item: any){
    if(item == 'add'){
      this.formValue.reset()
      this.AddCarousel = true
      this.EditCarousel = false
    }
    if(item == 'edit'){
      this.AddCarousel = false
      this.EditCarousel = true
    }
  }
  getBanData() {
    this.data.getBanData().subscribe((datas) => {
      this.allBanDatas = datas;
      console.log(datas)
    })
  }
  editBanData(item: any) {
    console.log(item, "edit click items")
    delete item.createdAt;
    delete item.updatedAt;
    delete item.__v;
    this.formValue.addControl("_id", new FormControl(''))
    this.formValue.setValue(item)
    // this.AddCarousel=false;
  }

  update() {
    const id = this.formValue.value._id
    console.log(id, "id")
    this.data.updateBanData(id, this.formValue.value).subscribe((result: any) => {
      this.allBanDatas = result
      console.log(result, "result")
    })
    let ref = document.getElementById('cancel')
    ref?.click();
    this.getBanData()
  }

    postBanData() {
    this.allBanDatas = this.formValue.value;
    console.log(this.allBanDatas)
    this.data.postBanData(this.formValue.value)
      .subscribe((res) => {
        console.log(res)
        this.formValue.reset()
        alert("Data Added")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.getBanData()
        // this.AddCarousel = false
      })
  }

/*   deleteBanData(item: any) {
    console.log("ID", item)
    this.data.deleteBanData(item._id).subscribe(res => {
      alert("Data Deleted")
      this.getBanData();
    })
  } */


  deleteBanData(item: any) {
    const datadelete = this.allBanDatas.length;
    if(datadelete === 1){
      alert("You Can't delete this data atleast 1 data should be present")
    }
    else{
      console.log( this.allBanData)
    this.data.deleteBanData(item._id).subscribe(() => {
      alert("Data Deleted")
      this.getBanData();
      
    })
    }
  }


}

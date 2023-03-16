import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ConfirmationService, Message } from 'primeng/api';
import { IBannerCarosuelComponent } from 'src/app/dashboard-page/service/data.interface';
import { DataService } from 'src/app/dashboard-page/service/data.service';

@Component({
  selector: 'app-d-carousel',
  templateUrl: './d-carousel.component.html',
  styleUrls: ['./d-carousel.component.scss']
})
export class DCarouselComponent implements OnInit {

 

  // allBanData!: IBannerCarosuelComponent;
  // selectedCars:IBannerCarosuelComponent[] = [];

  msgs: Message[] = [];

  allBanDatas: IBannerCarosuelComponent[] = []
  AddCarousel=false
  EditCarousel=false
  parentSelector:boolean = false
  formValue:any = FormGroup
  selectedFile: any;
  SERVER_URL = "http://localhost:3000/bannerData/upload";
 
  constructor(private data: DataService, private formbuilder: FormBuilder, private http: HttpClient , private confirmationService: ConfirmationService) {
  }


  


  
// this.primengConfig.ripple = true;
  ngOnInit(): void {


    
    this.getBanData();
    this.formValue = this.formbuilder.group(
      {
       
          // profile:[''],
      
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
              profile: new FormControl(''),
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
    this.data.getBanData().subscribe(
      (datas: IBannerCarosuelComponent[]) => {
        this.allBanDatas = datas;
        console.log('allBanDatas:', this.allBanDatas);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  editBanData(item: any) {
    // this.formValue.controls['innerData'].setValue(item.header[0])
    this.formValue.addControl('_id',  new FormControl(''));
    this.formValue.setValue(item);
    console.log(item, "edit click items")
    // delete item.createdAt;
    // delete item.updatedAt
    delete item.__v;
    // this.formValue.patchValue({
    //   innerData:[
    //     {
    //       header: item.header,
    //       text: item.text,
    //       buttonText: item.buttonText,
    //     }
    //   ]
    // })
  
    // this.http.get<any>('http://localhost:3000/bannerData/upload').subscribe((profileData:any) => {
    //   this.formValue.patchValue({
    //     profile: profileData.profileName,
    //     innerData: [
    //       {
    //         header: profileData.header1,
    //         text: profileData.text1,
    //         buttonText: profileData.button1
    //       },
    //       {
    //         header: profileData.header2,
    //         text: profileData.text2,
    //         buttonText: profileData.button2
    //       }
    //     ]
    //   });
    // });
  }

  update() {
    const id = this.formValue.value._id
    console.log(id, "id")
    this.data.updateBanData(id, this.formValue.value).subscribe((result: any) => {
      this.allBanDatas = result
      console.log(result, "result")
      this.getBanData()
    })
    let ref = document.getElementById('cancel')
    ref?.click();
    this.getBanData()
  }

    postBanData() {
    this.data.postBanData(this.formValue.value)
      .subscribe((res: any) => {
        console.log(res)
        this.formValue.reset()
        alert("Data Added")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.getBanData()
       
      })
    // this.uploadImg();



    this.allBanDatas = this.formValue.value;
    console.log(this.allBanDatas)
  }




  // deleteBanData(item: any) {
  //   const datadelete = this.allBanDatas.length;
  //   if(datadelete === 1){
  //     alert("You Can't delete this data atleast 1 data should be present")
  //   }
  //   else{

  //   this.data.deleteBanData(item._id).subscribe(() => {
  //     alert("Data Deleted")
  //     this.getBanData();
      
  //   })
  //   }
  // }

  deleteBanData(_id:string){

    this.confirmationService.confirm({
      message: 'Are you sure that you want to Delete this ?',
      accept: () => {
          //Actual logic to perform a confirmation
          const datadelete = this.allBanDatas.length;
          if(datadelete === 1){
                alert("You Can't delete this data atleast 1 data should be present")
                
              }else
                this.data.deleteBanData(_id).subscribe((res) => {
                console.log(res, 'Data Delete Successful')
                this.getBanData();
                
                // this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
              }
              
              )
      }
  });
  }
 

  //Upload Image
  onFileSelect(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.formValue.get('profile').setValue(file);
    }
    console.log(event.target.file);
  }


  uploadImg() {
    const formData = new FormData();
   formData.append('file', this.formValue.get('profile',).value);
   
   this.http.post<any>(this.SERVER_URL, formData).subscribe(
     (res) => {
       const carouselData2 = this.formValue.value;
       carouselData2['image'][0]["url"]=res.filePath;
       console.log(this.formValue.get(['image', 0, "url"]))
       this.data.postBanData(carouselData2)
       .subscribe((res: any) => {
         console.log(res)
         alert("Data Added")
         let ref = document.getElementById('cancel')
         ref?.click();
         this.getBanData()

       })
     },
     (err) => console.log(err)
   );


}



onChangeCheckBox($event: any) {
  const id = $event.target.value;
  const isChecked = $event.target.checked;

  console.log('id:', id);
  console.log('isChecked:', isChecked);

  console.log('allBanDatas:', this.allBanDatas);

  this.allBanDatas = this.allBanDatas.map((d) => {
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

  console.log('modified allBanDatas:', this.allBanDatas);

  this.data.saveBannerData( this.allBanDatas ).subscribe(
    (res) => {
      console.log(res);
    },
    (error) => {
      console.log(error);
    }
  );
}








}

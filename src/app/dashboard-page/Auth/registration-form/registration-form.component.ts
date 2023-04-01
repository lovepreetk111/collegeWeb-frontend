import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,  FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, Observable, tap } from 'rxjs';import { Iregistration } from '../../service/data.interface';
import { DataService } from '../../service/data.service';
;


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  registerDatas: Iregistration[] = []
  registerForm: any = FormGroup;
  submitted = false;

  constructor(private auth: DataService, private fb: FormBuilder, private http: HttpClient,private router: Router) { }


  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      designation: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
    
  }




  get f() { return this.registerForm.controls; }

  loginpage(){
    this.router.navigate(['/auth/admin/login']);
  }

  registerProcess() {
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }

    this.getRegister();
}

  getRegister() {
    this.registerDatas = this.registerForm.value;
    const inputElement = document.getElementById("email") as HTMLInputElement;
    const inputValue = inputElement.value;

    this.auth.getRegister().subscribe(res => {
      const data = res;

      const final = data.find((data: { _id: number; }) => data._id == data._id)
      if (data.length == 0) {
        this.postData();
      }
      else if (final.email == inputValue) {
        alert("email is already exists");
        this.registerForm.reset();
      }

      else {
        this.auth.postregister(this.registerForm.value).subscribe((result: any) => {

          alert("Data Register Successfull");
          this.registerForm.reset();
          this.router.navigate(['/auth/admin/login']);
        })
        console.log(this.registerDatas);
      }
    })
  
  }



  postData() {
    this.auth.postregister(this.registerForm.value).subscribe((result: any) => {
      alert("Data Register Successfull")
      const data = result;
      this.registerForm.reset();
      this.router.navigate(['/']);
    })
    console.log(this.registerDatas);
    
  }



}





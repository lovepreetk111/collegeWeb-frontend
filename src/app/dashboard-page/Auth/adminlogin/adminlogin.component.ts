import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators ,FormControl, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { IAdminData } from '../../service/data.interface';
import { DataService } from '../../service/data.service';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {

  allAdminData: IAdminData[] = []
  form:any = FormGroup;
  submitted = false;
  loginFailed = false;
  constructor( private auth : DataService, private fb:FormBuilder,private router: Router) { 
    
  }
  
  

  ngOnInit(): void {
    this.form= this.fb.group({
      email : new FormControl('',[Validators.required, Validators.email]),
      password : new FormControl('',[Validators.required]),
    })
  }

  get f() { return this.form.controls; }
  
  loginSubmit(){
    this.submitted = true;
    if (this.form.invalid) {
        return;
    }
    this.Submitlogin();


  }
  Submitlogin(){
   
      
      // const email = this.form.controls['email'].value;
      // const password = this.form.controls['password'].value;
      
      
      // this.auth.getAdminLogin().subscribe(res =>{
      //   this.allAdminData = res;
      //  if(email === 'admin@gmail.com' && password === '123456'){
      //   alert('login success');
      //   this.router.navigate(['/superadmin'])
      //  }
      //  else{
      //   this.loginFailed = true;
      //  }
      // })

      this.auth.postAdminlogin(this.form.value).subscribe((res:any)=>{
        localStorage.setItem('AdminToken', res.Token);
        // console.log(res.Token);
          alert('Login successful');
        this.form.reset();
        this.router.navigate(['/superadmin']);
      },
      (error: any) => {
        alert('** Please check email or password is correct!');
        this.form.reset();
      }
      );
      
    }
      
    }



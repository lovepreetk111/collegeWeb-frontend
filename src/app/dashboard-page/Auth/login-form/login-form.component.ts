import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators ,FormControl, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Iregistration } from '../../service/data.interface';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  // allNoticeDatas: Iregistration[] = []
  form:any = FormGroup;
  submitted = false;
  constructor( private auth : DataService, private fb:FormBuilder,private router: Router) { 
    
  }
  
  

  ngOnInit(): void {
    this.form= this.fb.group({
      email : new FormControl('',[Validators.required, Validators.email]),
      password : new FormControl('',[Validators.required]),
    })

  }

  get f() { return this.form.controls; }
  
  registerpage(){
    this.router.navigate(['admin/auth/register']);
  }
  loginSubmit(){
    this.submitted = true;
    if (this.form.invalid) {
        return;
    }
    this.Submitlogin();


  }
  Submitlogin(){
      this.auth.postlogin(this.form.value).subscribe((res:any)=>{
        localStorage.setItem('Token', res.Token);
        console.log(res.Token);
          alert('Login successful');
        this.form.reset();
        this.router.navigate(['admin/admindashboard']);
      },
      (error: any) => {
        alert('** User account is not active!');
        this.form.reset();
      }
      );
      
    }

    
    
  }
  


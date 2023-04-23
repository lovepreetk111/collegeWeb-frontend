import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private auth : AuthService , private router : Router) { }
 
  canActivate(){
      if(!!localStorage.getItem('AdminToken')){
        return true;
      }
      alert('You Are Not the authorised user')
        this.router.navigate(['/']);
        return false;
      
      }
  
 
  
}

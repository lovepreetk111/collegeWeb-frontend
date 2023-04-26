import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,  Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth : AuthService , private router : Router) { }
  canActivate(){
    if(!!localStorage.getItem('Token')){
      return true;
    }
      this.router.navigate(['/error404']);
      return false;
    
    }
  
    
    
    
    

  
  
  
}

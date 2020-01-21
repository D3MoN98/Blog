import { UserService } from './../user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router, private userService: UserService){}

  canActivate(): boolean{
    if(this.userService.isLoggedIn()){
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
  
}

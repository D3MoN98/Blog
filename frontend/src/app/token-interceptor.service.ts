import { UserService } from './services/user.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable()

export class TokenInterceptorService implements HttpInterceptor{

  constructor(private userService: UserService) { }

  intercept(req, next){
    let tokenReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${ this.userService.getToken() }`
      }
    });

    return next.handle(tokenReq);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "http://127.0.0.1:8000/api/";

  public token;


  constructor(private httpClient: HttpClient, private router: Router) { }

  register(user){
    return this.httpClient.post(this.url+"register", user);
  }

  login(user){
    return this.httpClient.post(this.url+"login", user);
  }

  isLoggedIn(){
    return !!localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    return this.router.navigate(['/']);
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
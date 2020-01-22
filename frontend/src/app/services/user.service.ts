import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "http://127.0.0.1:8000/api/";

  public token;

  // public user: User


  constructor(private httpClient: HttpClient, private router: Router) { }

  register(user){
    return this.httpClient.post(this.url+"register", user);
  }

  login(user){
    return this.httpClient.post(this.url+"login", user);
  }

  getUser(): Observable<User>{
    return this.httpClient.get<User>(this.url+'get_user').pipe(map(data => new User().deserialize(data['user'])));
  }

  isLoggedIn(){
    return !!localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('user_id');
    localStorage.removeItem('token');
    return this.router.navigate(['/']);
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
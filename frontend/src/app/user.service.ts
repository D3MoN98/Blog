import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "http://127.0.0.1:8000/api/";

  public token;

  public isLoggedIn = false;

  constructor(private httpClient: HttpClient) { }

  register(user){
    return this.httpClient.post(this.url+"register", user);
  }

  login(user){
    return this.httpClient.post(this.url+"login", user);
  }
}

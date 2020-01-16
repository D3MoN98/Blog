import { FormBuilder } from '@angular/forms';
import { UserService } from './../user.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm = this.fb.group({
    email: [''],
    password: ['']
  });

  public isLoggedInAlert = false;

  constructor(private userService: UserService, private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(this.loginForm.value);
    this.userService.login(this.loginForm.value).subscribe(
      (data) => {
        this.userService.token = data['success'].token;
        this.userService.isLoggedIn = true;
        this.isLoggedInAlert = true;
        form.reset();
      },
      (er) => {
        console.log(er.error);
      }
    );
    
  }

}

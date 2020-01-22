import { FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginError;

  public loginForm = this.fb.group({
    email: [''],
    password: ['']
  });

  constructor(private userService: UserService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form){
    this.userService.login(this.loginForm.value).subscribe(
      (data) => {
        localStorage.setItem('token', data['token']);
        localStorage.setItem('user_id', data['user'].id);
        this.router.navigate(['/']);
      },
      (er) => {
        this.loginError = er;
      }
    );
    
  }

}

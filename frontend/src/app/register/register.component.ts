import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    c_password: ['', Validators.required]
  });

  public regError = new Object;
  public registered = false;


  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  onSubmit(form){
    // this.submitted = true;
    this.userService.register(this.registerForm.value).subscribe(
      (data) => {
        this.regError = new Object;
        this.registered = true;
        form.reset();
        console.log('success', data);
      },
      (er) => {
        this.regError = er.error;
      }
    );
  }
}

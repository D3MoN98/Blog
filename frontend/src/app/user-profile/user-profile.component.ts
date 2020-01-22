import { UserService } from '../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public user = {
    name: '',
    email: ''
  };

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getUser().subscribe(
      (res) => {
        this.user = res['user'];
        console.log(this.user.name);
      },
      (er) => {
        if(er.status === 401){
          alert(er.statusText);
          this.router.navigate(['/']);
        }
      }
    )
  }

}

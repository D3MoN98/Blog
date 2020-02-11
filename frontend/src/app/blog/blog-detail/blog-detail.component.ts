import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/models/blog.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  public blog: Blog;
  // public user_id;
  
  constructor(private blogService: BlogService, private route: ActivatedRoute, public userService: UserService) { }

  ngOnInit() {
    // console.log();
    // this.user_id = localStorage.getItem('user_id');
    this.route.paramMap.subscribe(
      (params) => {
        this.blogService.getBlogById(params.get('blog_id')).subscribe(
          (res) => {
            // this.blog = res['blog'];
            this.blog = res
          },
          (er) => {
    
          }
        );
      }
    )
  }


}

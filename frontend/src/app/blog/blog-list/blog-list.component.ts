import { BlogService } from './../blog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  public blogs;

  constructor(private blogService: BlogService) { 

    this.blogService.getBlogs().subscribe((data) => {
      this.blogs = data['blogs'];

      console.log(this.blogs.length);
    });

  }

  ngOnInit() {
  }

}

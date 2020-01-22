import { Blog } from 'src/app/models/blog.model';
import { BlogService } from '../../services/blog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  public blogs: Blog[];

  constructor(private blogService: BlogService) { 

    this.blogService.getBlogs().subscribe((blogs) => {
      this.blogs = blogs;
    });

  }

  ngOnInit() {
  }

}

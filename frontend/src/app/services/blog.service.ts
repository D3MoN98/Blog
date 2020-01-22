import { Blog } from 'src/app/models/blog.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private url = "http://127.0.0.1:8000/api/";

  constructor(private httpClient: HttpClient) { }

  getBlogs(): Observable<Blog[]>{
    return this.httpClient.get<Blog[]>(this.url+"blog").pipe(map(data => data['blogs'].map(data => new Blog().deserialize(data))));
  }

  getBlogById(id){
    return this.httpClient.get<Blog>(this.url+"blog/"+id).pipe(map(data => new Blog().deserialize(data['blog'])));
  }

}
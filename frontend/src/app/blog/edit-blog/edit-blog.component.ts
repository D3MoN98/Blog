import { UserService } from './../../services/user.service';
import { Blog } from 'src/app/models/blog.model';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { ActivatedRoute, Routes, Router } from '@angular/router';
import Swal from 'sweetalert2'; 


@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {

  constructor(
    public fb: FormBuilder,
    public blogService: BlogService,
    public userService: UserService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  public blog: Blog;
  public blogFormError = new Object;
  public formSubmittedSuccess = false;

  public blogForm = this.fb.group({
    id: [''],
    title: ['', Validators.required],
    description: ['', Validators.required],
  });

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(
      (params) => {
        this.blogService.getBlogById(params.get('blog_id')).subscribe(
          (res) => {
            // this.blog = res['blog'];
            if(res.user_id != this.userService.getUserId()){
              this.router.navigate(['/']);
              return;
            }

            this.blog = res;
            this.blogForm = this.fb.group({
              id: [this.blog.blog_id],
              title: [this.blog.title, Validators.required],
              description: [this.blog.description, Validators.required],
            });
          },
          (er) => {
    
          }
        );
      }
    )
  }


  onSubmit(form){
    this.blogService.updateBlog(this.blogForm.value, this.blogForm.get('id').value).subscribe(
      (res) => {
        Swal.fire(
          'Good job!',
          'Blog updated',
          'success'
        )
      },
      (err) => {
        this.blogFormError = err.error;
        this.formSubmittedSuccess = false;
      }
    )
    
  }


  toFormData<T>( formValue: T ) {
    const formData = new FormData();
  
    for ( const key of Object.keys(formValue) ) {
      const value = formValue[key];
      formData.append(key, value);
    }
  
    return formData;
  }

}

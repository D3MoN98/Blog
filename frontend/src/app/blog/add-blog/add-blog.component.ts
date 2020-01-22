import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  constructor(
    public fb: FormBuilder,
    public blogService: BlogService
  ) { }

  public blogForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    user_id: ['']
  });

  public blogFormError = new Object;

  public formSubmittedSuccess = false;

  ngOnInit() {
  }

  onSubmit(form){
    this.blogForm.controls['user_id'].setValue(localStorage.getItem('user_id'));

    this.blogService.storeBlog(this.blogForm.value).subscribe(
      (res) => {
        this.formSubmittedSuccess = true;
        this.blogFormError = new Object;
        form.reset();
      },
      (er) => {
        this.blogFormError = er.error;
        this.formSubmittedSuccess = false;
      }
    );
    
  }

}

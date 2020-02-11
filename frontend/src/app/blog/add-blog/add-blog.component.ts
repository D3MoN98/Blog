import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BlogService } from 'src/app/services/blog.service';
import Swal from 'sweetalert2'; 



@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})

export class AddBlogComponent implements OnInit {

  constructor(
    public fb: FormBuilder,
    public blogService: BlogService,
    private cd: ChangeDetectorRef
  ) { }

  public blogForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    user_id: [''],
    image: ['']
  });

  public blogFormError = new Object;
  public fileData: File = null;
  public formSubmittedSuccess = false;

  ngOnInit() {
  }

  onSubmit(form){
    this.blogForm.controls['user_id'].setValue(localStorage.getItem('user_id'));

    const formData = this.toFormData(this.blogForm.value);
    formData.append('image', this.fileData);

    this.blogService.storeBlog(formData).subscribe(
      (res) => {
        // console.log(res);
        this.formSubmittedSuccess = true;
        this.blogFormError = new Object;
        form.reset();
        Swal.fire(
          'Good job!',
          'One blog added',
          'success'
        )
      },
      (er) => {
        this.blogFormError = er.error;
        this.formSubmittedSuccess = false;
      }
    );
    
  }

  toFormData<T>( formValue: T ) {
    const formData = new FormData();
  
    for ( const key of Object.keys(formValue) ) {
      const value = formValue[key];
      formData.append(key, value);
    }
  
    return formData;
  }

  onFileChange(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
  }

}

import { EditBlogComponent } from './blog/edit-blog/edit-blog.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './guard/login.guard';
import { AuthGuard } from './guard/auth.guard';
import { AddBlogComponent } from './blog/add-blog/add-blog.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login',
   component: LoginComponent,
   canActivate: [LoginGuard]
  },
  {path: 'register',
   component: RegisterComponent,
   canActivate: [LoginGuard]
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-blog',
    component: AddBlogComponent
  },
  {
    path: 'blog-detail/:blog_id',
    component: BlogDetailComponent
  },
  {
    path: 'edit-blog/:blog_id',
    component: EditBlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogReadComponent } from './components/blog-read/blog-read.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserRouteAccessService } from './services/user-route-access-service';



const routes: Routes = [
  { path: '', redirectTo: 'blog', pathMatch: 'full' },
  { path: 'blog', component: BlogListComponent, canActivate: [UserRouteAccessService]},
  { path: 'blog/:id/details', component: BlogDetailsComponent, canActivate: [UserRouteAccessService] },
  { path: 'blog/:id/read', component: BlogReadComponent, canActivate: [UserRouteAccessService] },
  { path: 'blog/add', component: AddBlogComponent, canActivate: [UserRouteAccessService] },
  // { path: 'home', component: HomeComponent, canActivate: [UserRouteAccessService] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

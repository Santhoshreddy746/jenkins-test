import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { TodosComponent } from './todos/todos.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/users',
    pathMatch: 'full'
  }, { 
    path: 'users', 
    component: UsersComponent
  }, {
    path: 'posts', 
    component: PostsComponent
  }, {
    path: 'todos', 
    component: TodosComponent
  }, {
    path: 'details/:id', 
    component: UserDetailComponent
  }, {
    path: '**', 
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

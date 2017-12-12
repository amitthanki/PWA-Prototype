import { PostComponent } from './components/post/post.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './components/posts.component';

const postsRoutes: Routes = [
  {
    path: '',
    component: PostsComponent,
    data: { class: 'page-posts', name: 'posts' }
  },
  {
    path: ':id',
    component: PostComponent,
    data: { class: 'page-post', name: 'post' }
  }
];

export const postsRouting: ModuleWithProviders = RouterModule.forChild(
  postsRoutes
);

import { PostsModule } from './posts/posts.module';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [
  { path: '',  component: HomeComponent, data: { class : 'page-home', name: 'home'  } },
  { path: 'posts', loadChildren: './posts/posts.module#PostsModule' },
  { path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

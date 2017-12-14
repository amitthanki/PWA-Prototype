import { postsRouting } from './posts.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsComponent } from './components/posts.component';
import { PostComponent } from './components/post/post.component';
import { AppMaterialModule } from '../shared/app-material.module';
import { TruncatePipe } from '../common/pipes/truncate.pipe';

@NgModule({
  imports: [CommonModule, postsRouting, AppMaterialModule],
  declarations: [PostsComponent, PostComponent,TruncatePipe]
})
export class PostsModule {}

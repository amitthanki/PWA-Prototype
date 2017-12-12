import { Store } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as fromRoot from './../../store/index';
import { Observable } from 'rxjs/Observable';
import { Post } from '../models/post';
import * as postsAction from './../actions/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class PostsComponent implements OnInit {

  posts$: Observable<Post[]>;
  constructor(
    private store: Store<fromRoot.AppState>
  ) { }

  ngOnInit() {
    this.store.dispatch(new postsAction.GetPosts());
    this.posts$ = this.store.select(fromRoot.getPosts);
  }

}
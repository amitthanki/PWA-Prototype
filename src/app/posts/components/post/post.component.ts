import { Store } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as fromRoot from './../../../store/index';
import { Observable } from 'rxjs/Observable';
import { Post } from '../../models/post';
import * as postsAction from './../../actions/posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit {

  post$: Observable<Post>;
  constructor(
    private store: Store<fromRoot.AppState>
  ) { }

  ngOnInit() {
    this.store.dispatch(new postsAction.GetPost(5527));
    this.post$ = this.store.select(fromRoot.getPost);
  }

}

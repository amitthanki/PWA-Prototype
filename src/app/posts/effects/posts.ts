import { PostService } from './../../services/post.service';
import { Injectable } from '@angular/core';
import {Effect, Actions, toPayload} from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/delay';

import * as PostActions from './../actions/posts';

@Injectable()
export class PostsEffects {

    @Effect()
    getUsers$: Observable<Action> = this.actions$
      // we need to know which action this gets implemented on
      .ofType(PostActions.GET_POSTS)
      .delay(10000)
      // map the action payload if it exists
      // .map(action => action.payload)
      // here's where we pass the payload to some service
      .switchMap(() => this.post.getPosts())
      // finally we take the result and fire a success action to the store
      .map(results => new PostActions.GetPostsSuccess(results));
      // todo add a catch here to handle errors

    @Effect()
    getUser$: Observable<Action> = this.actions$
      // we need to know which action this gets implemented on
      .ofType(PostActions.GET_POST)
      .delay(20000)
      // map the action payload if it exists
      .map((action: PostActions.GetPost) => action.payload)
      // here's where we pass the payload to some service
      .switchMap(id => this.post.getPost(id))
      // finally we take the result and fire a success action to the store
      .map(results => new PostActions.GetPostSuccess(results));
      // todo add a catch here to handle errors      


  constructor(
    private actions$: Actions,
    private post: PostService

  ) {}




}

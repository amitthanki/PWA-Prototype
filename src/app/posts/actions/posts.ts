import { Post } from './../models/post';
import { Action } from '@ngrx/store';

export const GET_POSTS = '[POSTS] Get Posts';
export const GET_POSTS_SUCCESS = '[POSTS] Get Posts Success';
export const GET_POST = '[POSTS] Get Post';
export const GET_POST_SUCCESS = '[POSTS] Get Post Success';

export class GetPosts implements Action {
  readonly type = GET_POSTS;

  constructor() {}
}

export class GetPostsSuccess implements Action {
  readonly type = GET_POSTS_SUCCESS;

  constructor(public payload: Post[]) {}
}

export class GetPost implements Action {
  readonly type = GET_POST;

  constructor(public payload: any = null) {}
}

export class GetPostSuccess implements Action {
  readonly type = GET_POST_SUCCESS;

  constructor(public payload: Post) {}
}

export type Actions = GetPosts | GetPostsSuccess | GetPost | GetPostSuccess;

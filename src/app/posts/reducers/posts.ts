import * as posts from './../actions/posts';
import { Action } from '@ngrx/store';
import { createSelector } from '@ngrx/store';
import { Post, generateMockPost } from '../models/post';

export interface State {
    posts: Post[],
    post: Post
    
}

export const initialState: State = {
    posts: [],
    post: generateMockPost()
}


export function reducer(state: State = initialState, action: posts.Actions) {
    switch (action.type) {

        case posts.GET_POSTS:
            return state;

        case posts.GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload
            };        
            
        case posts.GET_POST:
            return action.payload;

        case posts.GET_POST_SUCCESS:
            return {
                ...state,
                post: action.payload
            };                 

        default:
            return state;
    }
}

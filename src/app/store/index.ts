import { ActionReducerMap } from '@ngrx/store';
import * as fromAppUi from './reducers/app-ui';
import * as fromUser from './reducers/user';
import * as fromPost from './../posts/reducers/posts';
// import { RouterStateUrl } from './store/utils';
import * as fromRouter from '@ngrx/router-store';
import { createSelector } from '@ngrx/store/src/selector';


export interface AppState {
    appUi: fromAppUi.State;
    router: fromRouter.RouterReducerState;
    user: fromUser.State;
    post: fromPost.State;
}

export const reducers: ActionReducerMap<AppState> = {
    appUi: fromAppUi.reducer,
    router: fromRouter.routerReducer,
    user: fromUser.reducer,
    post: fromPost.reducer
};

export const getRouterState = (state: AppState) => state.router;
export const getUiState = (state: AppState) => state.appUi;
export const getUserState = (state: AppState) => state.user;
export const getUsers = (state: AppState) => state.user.users;
export const getUiWrapperClass = (state: AppState) => state.appUi.wrapperClassStr;
export const getPosts = (state: AppState) => state.post.posts;
export const getPost = (state: AppState) => state.post.post;
// export const getCurrentUrl = createSelector(getRouterState, (state: fromRouter.RouterReducerState) =>  {
//     // state.state && state.state.url
//     // return state;
//     // console.log(state);
// });




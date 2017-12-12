import { UserService } from './../../services/user.service';
import { Injectable } from '@angular/core';
import {Effect, Actions, toPayload} from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import * as UserActions from './../actions/user';

@Injectable()
export class UserEffects {

    @Effect()
    getUser$: Observable<Action> = this.actions$
      // we need to know which action this gets implemented on
      .ofType(UserActions.GET_USER)
      // map the action payload if it exists
      .map(action => UserActions.GetUser)
      // here's where we pass the payload to some service
      .switchMap(id => this.user.getUser(id))
      // finally we take the result and fire a success action to the store
      .map(results => new UserActions.GetUserSuccess(results));
      // todo add a catch here to handle errors


  constructor(
    private actions$: Actions,
    private user: UserService

  ) { }




}

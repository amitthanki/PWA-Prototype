import { log } from 'util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { User } from './../models/user.model';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  // @Effect() update$ = this.actions$
  // .ofType('SUPER_SIMPLE_EFFECT')
  // .switchMap( () =>
  //   Observable.of({type: "SUPER_SIMPLE_EFFECT_HAS_FINISHED"})
  // );

  getUser(id): Observable<User> {

    return this.http.get<User>('https://jsonplaceholder.typicode.com/users/');

  }



}

import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export const GET_USER = '[User] GET_USER';
export const GET_USER_SUCCESSS = '[User] GET_USER_SUCCESSS';


export class GetUser implements Action {
    readonly type = GET_USER;
    constructor(public payload: number) {}
}

export class GetUserSuccess implements Action {
    readonly type = GET_USER_SUCCESSS;
    constructor(public payload: User) {}
}

export type Actions = GetUser | GetUserSuccess;

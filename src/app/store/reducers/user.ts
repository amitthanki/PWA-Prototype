import { User } from './../../models/user.model';
import * as userActions from '../actions/user';
import { log } from 'util';

export interface State {
    users: any;
}

export const initialState: State = {
    users: []
};

export function reducer(state: State = initialState, action: userActions.Actions) {
    switch (action.type) {

        case userActions.GET_USER: {
            return state;
        }

        case userActions.GET_USER_SUCCESSS: {
            return {
                ...state,
                users: action.payload
            };
        }

        default: {
            return state;
        }
    }
}



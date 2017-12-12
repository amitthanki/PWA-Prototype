import * as UiActions from './../actions/app-ui';
import { log } from 'util';

export interface State {
    wrapperClasses: string[];
    wrapperClassStr: string;
    previousClass: string;

}

export const initialState: State = {
    wrapperClasses: [],
    wrapperClassStr: '',
    previousClass: ''
};

export function reducer(state: State = initialState, action: UiActions.Actions) {
    switch (action.type) {

        case UiActions.ADD_CLASS: {
            const classes = Object.assign([], state.wrapperClasses);
            classes.push(action.payload);
            return {
                ...state,
                wrapperClasses: classes,
                wrapperClassStr: classes.join(' ')
            };
        }
        case UiActions.REMOVE_CLASS: {
            const classes = Object.assign([], state.wrapperClasses);
            const index = classes.indexOf(action.payload);
            if (index > -1) {
                classes.splice(index, 1);
            }

            return {
                ...state,
                wrapperClasses: classes,
                wrapperClassStr: classes.join(' ')
            };
        }
        case UiActions.ROUTER_CLASS: {
            const classes = Object.assign([], state.wrapperClasses);
            const index = classes.indexOf(state.previousClass);
            if (index > -1) {
                classes.splice(index, 1);
            }
            classes.push(action.payload);

            return {
                ...state,
                previousClass: action.payload,
                wrapperClasses: classes,
                wrapperClassStr: classes.join(' ')
            };
        }
        case UiActions.MENU_OPEN: {
            return state;
        }
        default: {
            return state;
        }
    }
}

// const newState = (state, newData) => {
//     return Object.assign({}, state, newData);
// };


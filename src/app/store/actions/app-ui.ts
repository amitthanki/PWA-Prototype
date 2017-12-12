import { Action } from '@ngrx/store';

export const ROUTER_CLASS = '[AppUi] ROUTER_CLASS';
export const ADD_CLASS = '[AppUi] ADD_CLASS';
export const REMOVE_CLASS = '[AppUi] REMOVE_CLASS';
export const MENU_OPEN = '[AppUi] MENU_OPEN';

export class RouterClass implements Action {
    readonly type = ROUTER_CLASS;
    constructor(public payload: string) {}
}

export class AddClass implements Action {
    readonly type = ADD_CLASS;
    constructor(public payload: string) {}
}

export class RemoveClass implements Action {
    readonly type = REMOVE_CLASS;
    constructor(public payload: string) {}
}

export class MenuOpen implements Action {
    readonly type = MENU_OPEN;
    constructor(public payload: any) {}
}

export type Actions = RouterClass | AddClass | RemoveClass | MenuOpen;

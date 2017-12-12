import { log } from 'util';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as fromRoot from './store/index';
import * as uiReducer from './store/reducers/app-ui';
import * as appUi from './store/actions/app-ui';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  private router$: Observable<any>;
  wrapperClass$: Observable<string>;
  appUi: uiReducer.State;

  constructor(
    private store: Store<fromRoot.AppState>
  ) {
    this.wrapperClass$ = this.store.select(fromRoot.getUiWrapperClass);
    this.router$ = this.store.select(fromRoot.getRouterState);
  }

  ngOnInit() {
    this.store.dispatch(new appUi.AddClass('loaded'));
    this.uiListeners();
  }


  uiListeners() {

    // listen to router changes
    this.router$.subscribe((state) => {

      if (state === undefined) { return; }

      this.store.dispatch(new appUi.RouterClass(state.state.data.class));

    });

  }

}

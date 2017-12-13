import { PostService } from './services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { UserService } from './services/user.service';
import { UserEffects } from './store/effects/user.effects';
import { reducers } from './store/index';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, routerReducer, RouterStateSerializer } from '@ngrx/router-store';
import { CustomRouterStateSerializer } from './store/utils';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppMaterialModule } from './shared/app-material.module';
import { PostsEffects } from './posts/effects/posts';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([UserEffects,PostsEffects]),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument(),
    AppMaterialModule
  ],
  providers: [
    UserService,
    PostService,
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

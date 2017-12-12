import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../shared/app-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from '../components/home/home.component';
import { HeaderComponent } from '../components/header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import 'hammerjs';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
})
export class CoreModule { }

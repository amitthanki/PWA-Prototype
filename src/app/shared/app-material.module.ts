import {MatButtonModule, MatCheckboxModule, MatProgressSpinnerModule, MatMenuModule, MatIconModule, MatCardModule,MatToolbarModule} from '@angular/material';
import { NgModule } from '@angular/core';

const modules = [MatButtonModule, MatCheckboxModule, MatProgressSpinnerModule, MatMenuModule, MatIconModule, MatCardModule,MatToolbarModule];
@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class AppMaterialModule { }

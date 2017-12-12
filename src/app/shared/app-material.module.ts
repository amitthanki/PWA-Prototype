import {MatButtonModule, MatCheckboxModule, MatProgressSpinnerModule, MatMenuModule, MatIconModule, MatCardModule} from '@angular/material';
import { NgModule } from '@angular/core';

const modules = [MatButtonModule, MatCheckboxModule, MatProgressSpinnerModule, MatMenuModule, MatIconModule, MatCardModule];
@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class AppMaterialModule { }

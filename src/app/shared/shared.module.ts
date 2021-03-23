import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [SpinnerComponent, HeaderComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

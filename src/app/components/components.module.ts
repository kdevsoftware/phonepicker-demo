import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonepickerComponent } from './phonepicker/phonepicker.component';

@NgModule({
  declarations: [PhonepickerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PhonepickerComponent
  ]
})
export class ComponentsModule { }

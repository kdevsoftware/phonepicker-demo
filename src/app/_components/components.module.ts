import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhonepickerModule } from './phonepicker/phonepicker.module';

@NgModule({
  imports: [
    CommonModule,
    PhonepickerModule
  ],
  exports: [
    PhonepickerModule
  ]
})
export class ComponentsModule { }

import { NgModule } from '@angular/core';

import { PhonepickerModule } from './phonepicker/phonepicker.module';

@NgModule({
  imports: [
    PhonepickerModule
  ],
  exports: [
    PhonepickerModule
  ]
})
export class ComponentsModule { }

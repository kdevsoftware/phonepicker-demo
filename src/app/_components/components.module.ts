import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PhonepickerModule } from './phonepicker/phonepicker.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    PhonepickerModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,

    PhonepickerModule
  ]
})
export class ComponentsModule { }

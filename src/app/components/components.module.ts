import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonepickerComponent } from './phonepicker/phonepicker.component';

import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [PhonepickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule
  ],
  exports: [
    PhonepickerComponent
  ]
})
export class ComponentsModule { }

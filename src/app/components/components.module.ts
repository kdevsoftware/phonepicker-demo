import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { DropdownModule } from 'primeng/dropdown';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ButtonModule } from 'primeng/button';

import { PhonepickerService } from './phonepicker/phonepicker.service';

import { PhonepickerComponent } from './phonepicker/phonepicker.component';

@NgModule({
  declarations: [PhonepickerComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    DropdownModule,
    KeyFilterModule,
    ButtonModule
  ],
  exports: [
    PhonepickerComponent
  ],
  providers: [
    PhonepickerService
  ]
})
export class ComponentsModule { }

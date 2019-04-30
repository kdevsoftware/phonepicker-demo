import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonepickerComponent } from './phonepicker/phonepicker.component';

import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { PhonepickerService } from './phonepicker/phonepicker.service';

@NgModule({
  declarations: [PhonepickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    KeyFilterModule,
    ButtonModule,
    HttpClientModule
  ],
  exports: [
    PhonepickerComponent
  ],
  providers: [
    PhonepickerService
  ]
})
export class ComponentsModule { }

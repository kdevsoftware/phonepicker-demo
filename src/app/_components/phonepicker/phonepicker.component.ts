import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { parsePhoneNumberFromString, parsePhoneNumber, ParseError } from 'libphonenumber-js'

import { PhonepickerService } from './phonepicker.service';

interface Country {
  name: string,
  alpha2Code: string,
  callingCodes: Array<string>
}

export const PHONEPICKER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PhonepickerComponent),
  multi: true
};

@Component({
  selector: 'phonepicker',
  templateUrl: './phonepicker.component.html',
  styleUrls: ['./phonepicker.component.scss'],
  providers: [PHONEPICKER_VALUE_ACCESSOR]
})
export class PhonepickerComponent implements ControlValueAccessor {
  private phonepicker: FormGroup;
  private countries: Observable<Object>;
  private isCallable: boolean = false;

  constructor(private _phonepickerService: PhonepickerService, private _formBuilder: FormBuilder) {
    this.phonepicker = this._formBuilder.group({
      countryInfo: [{}],
      phoneNumber: ['']
    });

    this.countries = this._phonepickerService.getCountries();
  }

  writeValue(value: any) {
    if (value) {
      this.phonepicker.setValue(value);
    }
  }

  registerOnChange(fn: any) {
    this.phonepicker.valueChanges.subscribe(fn);
  }

  registerOnTouched() { }

  inputEventHandler(event: any) {
    const countryInfo = this.phonepicker.get('countryInfo').value;
    const phoneNumber = this.phonepicker.get('phoneNumber').value;

    const countryPhoneNumber = `+${countryInfo.callingCodes[0] + event.target.value}`;

    this.isCallable = parsePhoneNumberFromString(countryPhoneNumber).isValid();

    this.phonepicker.setValue({
      countryInfo,
      phoneNumber: this.isCallable
        ? parsePhoneNumberFromString(countryPhoneNumber).formatInternational().replace(`+${countryInfo.callingCodes[0]}`, '')
        : phoneNumber.replace(/\D/g, '')
    });
  }
}

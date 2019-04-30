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
  styleUrls: ['./phonepicker.component.scss']
})
export class PhonepickerComponent implements ControlValueAccessor {
  private phonepicker: FormGroup;
  private countries: Observable<Object>;
  private isCallable: boolean = false;

  private onChange: any = () => { };
  private onTouch: any = () => { };

  constructor(private _phonepickerService: PhonepickerService, private _formBuilder: FormBuilder) {
    this.phonepicker = this._formBuilder.group({
      countryInfo: {},
      phoneNumber: ''
    });

    this.countries = this._phonepickerService.getCountries();
  }

  set value(val: any) {  // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
    this.onChange(val)
    this.onTouch(val)
  }

  // this method sets the value programmatically
  writeValue(value: any) {
    this.value = value
  }

  // upon UI element value changes, this method gets triggered
  registerOnChange(fn: any) {
    this.onChange = fn
  }

  // upon touching the element, this method gets triggered
  registerOnTouched(fn: any) {
    this.onTouch = fn
  }

  getPhoneNumber(): string {
    const countryInfo = this.phonepicker.get('countryInfo').value;
    const phoneNumber = this.phonepicker.get('phoneNumber').value;

    return countryInfo['callingCodes'][0] + phoneNumber.replace(/\D/g, '');
  }

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

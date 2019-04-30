import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
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
  public selectedCountry: Country;
  public phoneNumberButCountry: string;
  private countries: Observable<Object>;
  private isCallable: boolean = true;

  private _modelChange: (value: any) => void;
  private _modelTouched: (value: any) => void;

  constructor(private phonepickerService: PhonepickerService) {
    this.countries = this.phonepickerService.getCountries();
  }

  writeValue(phoneNumber: string): void {
    try {
      const pNumber = parsePhoneNumber(phoneNumber)
    } catch (error) {
      if (error instanceof ParseError) {
        console.log(error.message)
      } else {
        throw error
      }
    }
  }

  registerOnChange(fn: any): void {
    this._modelChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._modelChange = fn;
  }

  getPhoneNumber(): string {
    return this.selectedCountry.callingCodes[0] + this.phoneNumberButCountry.replace(/\D/g, '');
  }

  inputEventHandler(event: any) {
    const phoneNumber = `+${this.selectedCountry.callingCodes[0] + event.target.value}`;

    this.isCallable = !parsePhoneNumberFromString(phoneNumber).isValid();

    this.phoneNumberButCountry = this.isCallable
      ? parsePhoneNumberFromString(phoneNumber).formatNational()
      : this.phoneNumberButCountry.replace(/\D/g, '');
  }
}

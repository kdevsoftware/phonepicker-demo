import { Component, OnInit } from '@angular/core';
import { PhonepickerService } from './phonepicker.service';
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { Observable } from 'rxjs';

interface Country {
  name: string,
  alpha2Code: string,
  callingCodes: Array<string>
}

@Component({
  selector: 'phonepicker',
  templateUrl: './phonepicker.component.html',
  styleUrls: ['./phonepicker.component.scss']
})
export class PhonepickerComponent {
  countries: Observable<Object>;
  isCallable: boolean = true;
  selectedCountry: Country;
  phoneNumberButCountry: string;

  constructor(private phonepickerService: PhonepickerService) {
    this.countries = this.phonepickerService.getCountries();
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

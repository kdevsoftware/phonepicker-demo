import { Component, OnInit } from '@angular/core';
import { PhonepickerService } from './phonepicker.service';
import { parsePhoneNumberFromString } from 'libphonenumber-js'

@Component({
  selector: 'phonepicker',
  templateUrl: './phonepicker.component.html',
  styleUrls: ['./phonepicker.component.scss']
})
export class PhonepickerComponent implements OnInit {

  console = console;

  countries;
  selectedCountry;
  cc;
  backup;
  result = true;

  constructor(private phonepickerService: PhonepickerService) {
    this.countries = this.phonepickerService.getCountries();
  }

  ngOnInit() {
  }

  keyDown(event) {
    const phoneNumber = `+${this.selectedCountry.callingCodes[0] + event.target.value}`;

    this.result = !parsePhoneNumberFromString(phoneNumber).isValid();

    if (!this.result) {
      this.cc = parsePhoneNumberFromString(phoneNumber).formatNational();
    } else {
      this.cc = this.cc.replace(/\D/g, '');
    }
  }

}

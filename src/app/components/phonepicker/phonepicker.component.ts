import { Component, OnInit } from '@angular/core';
import { PhonepickerService } from './phonepicker.service';
import { Observable } from 'rxjs';
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { AsYouType } from 'libphonenumber-js'

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

  constructor(private phonepickerService: PhonepickerService) {
    this.countries = this.phonepickerService.getCountries();
  }

  ngOnInit() {
  }

  keyDown(event) {
    const phoneNumber = `+${this.selectedCountry.callingCodes[0] + event.target.value}`;

    console.log(parsePhoneNumberFromString(phoneNumber).isValid());
  }

}

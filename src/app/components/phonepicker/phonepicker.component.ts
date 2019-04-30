import { Component, OnInit } from '@angular/core';
import { PhonepickerService } from './phonepicker.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'phonepicker',
  templateUrl: './phonepicker.component.html',
  styleUrls: ['./phonepicker.component.scss']
})
export class PhonepickerComponent implements OnInit {

  countries;
  selectedCountry;

  constructor(private phonepickerService: PhonepickerService) {
    this.countries = this.phonepickerService.getCountries();
  }

  ngOnInit() {
  }

  keyPress(event) {
    console.log('event = ', event);
  }

}

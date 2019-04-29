import { Component, OnInit } from '@angular/core';
import { PhonepickerService } from './phonepicker.service';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'phonepicker',
  templateUrl: './phonepicker.component.html',
  styleUrls: ['./phonepicker.component.scss']
})
export class PhonepickerComponent implements OnInit {

  cities2;

  selectedCity2: City;

  constructor(private phonepickerService: PhonepickerService) {
    //An array of cities
    this.cities2 = this.phonepickerService.getCountries();
  }

  ngOnInit() {
  }

}

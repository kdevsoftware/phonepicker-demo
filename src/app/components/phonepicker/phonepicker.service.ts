import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const COUNTRY_INFO_URL = 'https://restcountries.eu/rest/v2/all?fields=name;alpha2Code;callingCodes';

@Injectable({
  providedIn: 'root'
})
export class PhonepickerService {

  constructor(private _httpClient: HttpClient) { }

  getCountries() {
    return this._httpClient.get(COUNTRY_INFO_URL);
  }
}
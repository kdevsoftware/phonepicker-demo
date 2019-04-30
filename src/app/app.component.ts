import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  phonepickerForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.phonepickerForm = this._formBuilder.group({
      phonepicker: [{
        countryInfo: {},
        phoneNumber: ''
      }]
    });
  }

  onSubmit() {
    console.log(this.phonepickerForm.value);
  }
}

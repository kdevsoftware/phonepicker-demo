import { TestBed } from '@angular/core/testing';

import { PhonepickerService } from './phonepicker.service';

describe('PhonepickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhonepickerService = TestBed.get(PhonepickerService);
    expect(service).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonepickerComponent } from './phonepicker.component';

describe('PhonepickerComponent', () => {
  let component: PhonepickerComponent;
  let fixture: ComponentFixture<PhonepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

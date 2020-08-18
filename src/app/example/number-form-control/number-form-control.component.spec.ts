import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberFormControlComponent } from './number-form-control.component';

describe('NumberFormControlComponent', () => {
  let component: NumberFormControlComponent;
  let fixture: ComponentFixture<NumberFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

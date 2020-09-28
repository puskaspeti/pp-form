import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConventionalTextFormControlComponent } from './conventional-text-form-control.component';

describe('ConventionalTextFormControlComponent', () => {
  let component: ConventionalTextFormControlComponent;
  let fixture: ComponentFixture<ConventionalTextFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConventionalTextFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConventionalTextFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

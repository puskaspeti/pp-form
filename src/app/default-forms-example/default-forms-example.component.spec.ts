import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultFormsExampleComponent } from './default-forms-example.component';

describe('DefaultNgcontrolExampleComponent', () => {
  let component: DefaultFormsExampleComponent;
  let fixture: ComponentFixture<DefaultFormsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultFormsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultFormsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

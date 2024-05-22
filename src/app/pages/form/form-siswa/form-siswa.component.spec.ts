import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSiswaComponent } from './form-siswa.component';

describe('FormSiswaComponent', () => {
  let component: FormSiswaComponent;
  let fixture: ComponentFixture<FormSiswaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSiswaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSiswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

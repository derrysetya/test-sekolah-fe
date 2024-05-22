import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNilaiComponent } from './form-nilai.component';

describe('FormNilaiComponent', () => {
  let component: FormNilaiComponent;
  let fixture: ComponentFixture<FormNilaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNilaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNilaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGuruComponent } from './form-guru.component';

describe('FormGuruComponent', () => {
  let component: FormGuruComponent;
  let fixture: ComponentFixture<FormGuruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGuruComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGuruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

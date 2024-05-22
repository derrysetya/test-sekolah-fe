import { TestBed } from '@angular/core/testing';

import { NilaiService } from './nilai.service';

describe('NilaiService', () => {
  let service: NilaiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NilaiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

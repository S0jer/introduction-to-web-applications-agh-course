import { TestBed } from '@angular/core/testing';

import { AdmGuard } from './adm.guard';

describe('AdmGuard', () => {
  let guard: AdmGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdmGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

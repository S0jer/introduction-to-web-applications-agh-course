import { TestBed } from '@angular/core/testing';

import { MenagoGuard } from './menago.guard';

describe('MenagoGuard', () => {
  let guard: MenagoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MenagoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

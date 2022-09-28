import { TestBed } from '@angular/core/testing';

import { AUthGuard } from './auth.guard';

describe('AUthGuard', () => {
  let guard: AUthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AUthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

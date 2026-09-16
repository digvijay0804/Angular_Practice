import { TestBed } from '@angular/core/testing';

import { Counters } from './counters';

describe('Counters', () => {
  let service: Counters;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Counters);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

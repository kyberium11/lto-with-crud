import { TestBed } from '@angular/core/testing';

import { PlatenumberService } from './platenumber.service';

describe('PlatenumberService', () => {
  let service: PlatenumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatenumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

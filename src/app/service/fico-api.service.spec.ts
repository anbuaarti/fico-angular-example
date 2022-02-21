import { TestBed } from '@angular/core/testing';

import { FicoApiService } from './fico-api.service';

describe('FicoApiService', () => {
  let service: FicoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FicoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

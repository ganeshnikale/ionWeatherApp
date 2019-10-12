import { TestBed } from '@angular/core/testing';

import { DistanceMatrixService } from './distance-matrix.service';

describe('DistanceMatrixService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DistanceMatrixService = TestBed.get(DistanceMatrixService);
    expect(service).toBeTruthy();
  });
});

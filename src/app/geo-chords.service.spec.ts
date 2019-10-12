import { TestBed } from '@angular/core/testing';

import { GeoChordsService } from './geo-chords.service';

describe('GeoChordsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeoChordsService = TestBed.get(GeoChordsService);
    expect(service).toBeTruthy();
  });
});

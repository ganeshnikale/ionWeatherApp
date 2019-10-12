import { TestBed } from '@angular/core/testing';

import { AutoComplateService } from './auto-complate.service';

describe('AutoComplateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutoComplateService = TestBed.get(AutoComplateService);
    expect(service).toBeTruthy();
  });
});

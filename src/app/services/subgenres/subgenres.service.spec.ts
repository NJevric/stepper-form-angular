import { TestBed } from '@angular/core/testing';

import { SubgenresService } from './subgenres.service';

describe('SubgenresService', () => {
  let service: SubgenresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubgenresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

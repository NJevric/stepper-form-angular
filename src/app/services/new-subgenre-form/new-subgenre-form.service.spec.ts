import { TestBed } from '@angular/core/testing';

import { NewSubgenreFormService } from './new-subgenre-form.service';

describe('NewSubgenreFormService', () => {
  let service: NewSubgenreFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewSubgenreFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

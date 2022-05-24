import { TestBed } from '@angular/core/testing';

import { InformationFormService } from './information-form.service';

describe('InformationFormService', () => {
  let service: InformationFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformationFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

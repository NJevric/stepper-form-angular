import { TestBed } from '@angular/core/testing';

import { CreateBookFormService } from './create-book-form.service';

describe('CreateBookFormService', () => {
  let service: CreateBookFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateBookFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

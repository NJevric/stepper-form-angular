import { TestBed } from '@angular/core/testing';

import { DisableBtnService } from './disable-btn.service';

describe('DisableBtnService', () => {
  let service: DisableBtnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisableBtnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

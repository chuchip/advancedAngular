import { TestBed } from '@angular/core/testing';

import { ComunServiceService } from './comun-service.service';

describe('ComunServiceService', () => {
  let service: ComunServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

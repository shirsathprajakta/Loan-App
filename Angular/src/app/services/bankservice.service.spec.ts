import { TestBed } from '@angular/core/testing';

import { BankserviceService } from './bankservice.service';

describe('BankserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BankserviceService = TestBed.get(BankserviceService);
    expect(service).toBeTruthy();
  });
});

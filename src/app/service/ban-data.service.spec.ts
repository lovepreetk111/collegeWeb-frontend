import { TestBed } from '@angular/core/testing';

import { BanDataService } from './ban-data.service';

describe('BanDataService', () => {
  let service: BanDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BanDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

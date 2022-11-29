import { TestBed } from '@angular/core/testing';

import { KeylistenerService } from './keylistener.service';

describe('KeylistenerService', () => {
  let service: KeylistenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeylistenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

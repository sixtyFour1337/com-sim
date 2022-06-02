import { TestBed } from '@angular/core/testing';

import { StartPanelService } from './start-panel.service';

describe('StartPanelService', () => {
  let service: StartPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

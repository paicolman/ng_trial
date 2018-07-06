import { TestBed, inject } from '@angular/core/testing';

import { SwitchViewsService } from './switch-views.service';

describe('SwitchViewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwitchViewsService]
    });
  });

  it('should be created', inject([SwitchViewsService], (service: SwitchViewsService) => {
    expect(service).toBeTruthy();
  }));
});

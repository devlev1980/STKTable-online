import { TestBed } from '@angular/core/testing';

import { SharepointService } from './sharepoint.service';

describe('SharepointService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharepointService = TestBed.get(SharepointService);
    expect(service).toBeTruthy();
  });
});

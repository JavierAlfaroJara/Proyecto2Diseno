import { TestBed } from '@angular/core/testing';

import { SuperHeroServiceService } from './super-hero-service.service';

describe('SuperHeroServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuperHeroServiceService = TestBed.get(SuperHeroServiceService);
    expect(service).toBeTruthy();
  });
});

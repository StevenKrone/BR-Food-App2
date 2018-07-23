import { TestBed, inject } from '@angular/core/testing';

import { InMemoryRestaurantsService } from './in-memory-restaurants.service';

describe('InMemoryRestarauntsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryRestaurantsService]
    });
  });

  it('should be created', inject([InMemoryRestaurantsService], (service: InMemoryRestaurantsService) => {
    expect(service).toBeTruthy();
  }));
});

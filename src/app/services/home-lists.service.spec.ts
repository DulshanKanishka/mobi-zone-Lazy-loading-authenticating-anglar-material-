import { TestBed } from '@angular/core/testing';

import { HomeListsService } from './home-lists.service';

describe('HomeListsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeListsService = TestBed.get(HomeListsService);
    expect(service).toBeTruthy();
  });
});

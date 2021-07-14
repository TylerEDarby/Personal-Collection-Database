import { TestBed } from '@angular/core/testing';

import { VideogameService } from './videogame.service';

describe('VideogameService', () => {
  let service: VideogameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideogameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

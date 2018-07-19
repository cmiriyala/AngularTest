import { TestBed, inject } from '@angular/core/testing';

import { Listofauthors } from './listofauthors.service.service';

describe('Listofauthors', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Listofauthors]
    });
  });

  it('should be created', inject([Listofauthors], (service: Listofauthors) => {
    expect(service).toBeTruthy();
  }));
});

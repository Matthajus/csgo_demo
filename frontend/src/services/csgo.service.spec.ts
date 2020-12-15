import { TestBed, inject } from '@angular/core/testing';

import { CsgoService } from './csgo.service';

describe('CsgoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CsgoService]
    });
  });

  it('should ...', inject([CsgoService], (service: CsgoService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { MyTravelsService } from './my-travels.service';

describe('MyTravelsService', () => {
  let service: MyTravelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyTravelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StringUtilService } from '../src/string-util.service';

describe('StringUtilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StringUtilService]
    });
  });

  it('should ...', inject([StringUtilService], (service: StringUtilService) => {
    expect(service).toBeTruthy();
  }));
});

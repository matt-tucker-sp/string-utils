/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StringUtilsService } from '../src/string-utils.service';

describe('StringUtilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StringUtilsService]
    });
  });

  it('should ...', inject([StringUtilsService], (service: StringUtilsService) => {
    expect(service).toBeTruthy();
  }));
});

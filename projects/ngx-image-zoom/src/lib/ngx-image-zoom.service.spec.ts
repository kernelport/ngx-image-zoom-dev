import { TestBed } from '@angular/core/testing';

import { NgxImageZoomService } from './ngx-image-zoom.service';

describe('NgxImageZoomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxImageZoomService = TestBed.get(NgxImageZoomService);
    expect(service).toBeTruthy();
  });
});

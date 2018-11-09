import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxImageZoomComponent } from './ngx-image-zoom.component';

export * from './ngx-image-zoom.component';

@NgModule({
  declarations: [NgxImageZoomComponent],
  imports: [
	CommonModule
  ],
  exports: [NgxImageZoomComponent]
})
export class NgxImageZoomModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgxImageZoomModule,
        };
    }
}

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstaFeedComponent } from './if-feed.component';
import { InstaFeedWrapComponent } from './if-wrapper.component';
import { InstaFeedService } from './if-params.service';

@NgModule({
  declarations: [
    InstaFeedComponent,
    InstaFeedWrapComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    InstaFeedComponent,
    InstaFeedWrapComponent
  ]
})
export class InstaFrameModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: InstaFrameModule,
      providers: [
        InstaFeedService
      ]
    };
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { InstaFeedService } from './if-params.service';
declare var Instafeed: any;

@Component({
  selector: 'insta-frame',
  template: `
  <div>
    <insta-feed></insta-feed>
  </div>
  `
})
export class InstaFeedWrapComponent implements OnInit {

  @Input() config: any;

  constructor(private feedSvc: InstaFeedService) {}

  ngOnInit() {
    if (this.config !== undefined || this.config !== null){
      this.feedSvc.setParameters(this.config);
    }
  }

}

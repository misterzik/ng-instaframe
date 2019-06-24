import { Component, OnInit, Input } from '@angular/core';
import { InstaFeedService } from './if-params.service';
declare var Instafeed: any;

@Component({
  selector: 'insta-feed',
  template: `
  <div id="instafeed" class="gxs-row" *ngIf="loading; else Loading"></div>
  <ng-template #Loading>
    <div class="loader"></div>
    <div class="loader_label">
      <h5>Loading ...</h5>
    </div>
  </ng-template>
  `,
  styleUrls: ['./scss/global.component.scss']
})
export class InstaFeedComponent implements OnInit {

  @Input() config: any;
  private instaFeed: any = {};
  public loading: boolean;

  constructor(
    private feedSvc: InstaFeedService
  ) {
    this.loading = true;
  }

  ngOnInit() {
    this.feedSvc.getParameters().subscribe(data => {
      console.log(data);
      this.instaFeed = Object.assign({}, data);
      if (this.instaFeed.get === undefined || this.instaFeed.get === null) {
        console.warn('Please Add the correct configuration model format.');
        this.loading = false;
      }
      if (this.instaFeed.get !== undefined) {
        this.loadFeed(this.instaFeed);
        this.loading = true;
      }
    });

  }

  loadFeed(config: any): void{
      const feed = new Instafeed({
      get: config.get,
      // Third Party Au0th
      userId: config.userId,
      clientId: config.clientId,
      accessToken: config.accessToken,
      template: `
        <div class="col-${config.col}">
            <a
              href="{{link}}"
              target="_${config.target}">
                <img 
                  src="{{image}}"
                  class="insta-feed-img"
                  style="
                    border-radius: ${config.border_radius}px;
                    border-color: ${config.border_color};
                    width: ${config.image_width}">
              </a>
        </div>
        `,
      limit: config.limit,
      resolution: config.resolution,
      sortBy: config.sortBy
    });

    feed.run();
    this.loading = false;
  }

}

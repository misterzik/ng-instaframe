# Insta-Frame | Angular 7+ Module

![NG-InstaFRAME](insta-frame-logo.png)

### ng-instaframe is built in Angular 7+, The Module feature Insta-Frame comes in with a configuration options which will help you embbed your instagram profile account to your profile. 


## Requirements:
In order to showcase your Instagram Images, The only thing you'll need to get from them is a valid client ID from Instagram's API in order to be able to read their data. You can easily register for one on Instagram's website. ([Instagram API](http://instagram.com/developer/register/)



## Installation:

* Please Download the package from here, and place it inside your project, In the case you don't have a project yet, Please go ahead and create a new one `ng new myApp`. ([Angular CLI Documentation](https://angular.io/cli))
*  Include your newly downloaded module to your `app.module.ts`, `import { InstaFrameModule } from 'ng-instaframe';` and load it on your imports, `InstaFrameModule.forRoot()`

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';

import { AppComponent } from './app.component';
// Import InstaFrameModule Module
import { InstaFrameModule } from './ng-slimPOP';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    // Import into the APP
    InstaFrameModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```


## Configuration Model Schema:

```
{
      get: 'user',
      userId: '5998462425',
      clientId: 'XXXXXXXXXXXX',
      accessToken: 'XXXXXXXXXXXXXXXXXXXXXXXX',
      resolution: 'thumbnail',
      col: 4,
      limit: 9,
      sortBy: 'none',
      target: 'blank',
      image_width: '100%',
      border_radius: '4',
      border_color: '#dadada'
}
```

#### Configuration Breakdown

userID is your Instagram Profile ID, ClientID and AccessToken will be obtain after registering your API Developer Account on Instagram. The Get method user, will get your user data.

1) resolution: 'thumbnail'
      
    Options Available are 'thumbnail' - 150x150, 'low_resolution' - 306x306, 'standard_resolution' - 612x612
      
2) col: 4

    Options Available are 1 through 12 without quotes, Grid will display data according the grid picked. Similar has any other CSS Grid System with a row divided by 12 highest and smallest 1st.

3) limit: 9

    This option will cap the limit of pictures to show per container.

4) sortBy: 'none'

    Sort the images in a set order. Options Available are 
      none - As they come from Instagram, most-recent - Newest to oldest,least-recent - Oldest to newest, most-liked - Highest # of likes to lowest, least-liked - Lowest # likes to highest, most-commented - Highest # of comments to lowest, least-commented - Lowest # of comments to highest, and random - Random order.

5) target: 'blank',
      
    Options Available are blank - new window, self - same window
      
6) image_width: '100%'

    The size of the image itself, keep it at 100% to use the full size of the grid, You can also use px instead.

7) border_radius: '4'

    The border radius of each single image container.

8) border_color: '#dadada'

    The Border color of a single image container.

## Get Started:

1) Create a new component within your application, Let's start by openning the terminal on location of our project, Create a new component using angular-cli `ng g c homePage` this is the short-hand g = generate, c = component. Read more at the [Angular CLI Documentation](https://angular.io/cli).

2) Include your newly downloaded module to your `app.module.ts`, `import { InstaFrameModule } from 'ng-instaframe';` and load it on your imports, `InstaFrameModule.forRoot()`

3) Open the newly created component `.ts` file by angular-cli, `app/home-page/home-page.component.ts` and import the necessary Service, and Configuration from the package. `import { InstaFeedService } from 'ng-instaframe';`

4) Create a property, for this example, We will be using `instaframe` go ahead and create it before the `constructor(){}` - `private instaframe: any = {};`

5) Fire it, depending on your needs, on the `ngOnInit(){}`

```
    ngOnInit(): void {
        this.instaframe = {
            // Copy Above Modal Schema Data 
        }
    }
```

5) Include the Wrapper and Button Selector on the HTML file created by the angular-cli `app/home-page/home-page.component.html`.

```
<!-- Place InstaFrame Selector -->
<insta-frame [config]="instaframe"></insta-frame>
```
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { CommunityLandingComponent } from "./community/community-landing.component";
import { LandingComponent } from "./landing/landing.component";
import { MarketPlaceComponent } from "./market-place/market-place.component";
import { ForumComponent } from "./forum/forum.component";

@NgModule({
  declarations: [
    AppComponent,
    CommunityLandingComponent,
    LandingComponent,
    ForumComponent,
    MarketPlaceComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
        { path: "", component: LandingComponent, },
        { path: "market", component: MarketPlaceComponent, },
        { path: "forum", component: ForumComponent, },
        { path: "community", component: CommunityLandingComponent, },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

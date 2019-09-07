import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-community-landing",
  templateUrl: "./community-landing.component.html",
})

export class CommunityLandingComponent implements OnInit {

    constructor() {
        console.log("called the constructor");
    }

    ngOnInit() {
        console.log("called init");
    }
}

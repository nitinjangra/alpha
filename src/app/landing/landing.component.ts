import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-new-landing-page",
    templateUrl: "./landing.component.html",
})
export class LandingComponent implements OnInit {
    features = [
        { name: "Market Place", route: "/market" },
        { name: "Details", route: "/details" },
        { name: "Forum", route: "/forum" },
        { name: "Community", route: "/community" },
    ];

    constructor() {
        console.log("called the constructor 11");
    }

    ngOnInit() {
        console.log("called init landing page");
    }

    onClick() {}
}

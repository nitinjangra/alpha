import { Component } from "@angular/core";

@Component({
    selector: "app-new-landing-page",
    styleUrls: ["./landing.component.scss"],
    templateUrl: "./landing.component.html",
})
export class LandingComponent {
    features = [
        { name: "Market Place", route: "/market" },
        { name: "Details", route: "/details" },
        { name: "Forum", route: "/forum" },
        { name: "Community", route: "/community" },
    ];

    onClick() {}
}

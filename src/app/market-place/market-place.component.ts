import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-market-place",
  templateUrl: "./market-place.component.html",
})

export class MarketPlaceComponent implements OnInit {

    constructor() {
        console.log("called the constructor");
    }

    ngOnInit() {
        console.log("called init");
    }
}

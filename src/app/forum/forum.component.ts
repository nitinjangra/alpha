import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-forum",
  templateUrl: "./forum.component.html",
})

export class ForumComponent implements OnInit {

    constructor() {
        console.log("called the constructor");
    }

    ngOnInit() {
        console.log("called init");
    }
}

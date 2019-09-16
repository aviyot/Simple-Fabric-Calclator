import { Component, OnInit, EventEmitter } from "@angular/core";
import { PiceTypes } from "./pices.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Simple Fabric Calclator";
  tabs = ["Size1"];

  selectedTab;

  ngOnInit() {
    this.selectedTab = 0;
  }

  deleteTab(index) {
    this.tabs.splice(index, 1);
    this.selectedTab = index - 1;
  }

  onSelected(ev) {}
  addTab() {
    this.tabs.push(`Size ${this.tabs.length + 1}`);
    this.selectedTab = this.tabs.length - 1;
  }
}

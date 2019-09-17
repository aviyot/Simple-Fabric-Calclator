import { Component, OnInit } from "@angular/core";
import { ResultCal } from "./pices.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Simple Fabric Calclator";
  tabs = ["Size1"];

  resultsCal: ResultCal[];

  totalLength: number;
  totalPice: number;

  selectedTab;

  ngOnInit() {
    this.selectedTab = 0;
    this.resultsCal = [];
    this.totalLength = 0;
    this.totalPice = 0;
  }

  onCalcHendler(resultCal: ResultCal) {
    this.resultsCal.push(resultCal);
    this.totalPice = this.totalPice + resultCal.pice;
    this.totalLength = this.totalLength + resultCal.length;
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

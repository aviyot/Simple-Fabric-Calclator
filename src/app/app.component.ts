import { Component, OnInit } from "@angular/core";
import { ResultCal } from "./pices.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Simple Fabric Calclator";
  resultsCal: ResultCal[] = [];

  totalLength: number;
  totalPice: number;
  selectedTab: number;

  ngOnInit() {
    this.selectedTab = 0;

    this.resultsCal.push({
      size: "",
      length: 0,
      pice: 0,
      isCal: false
    });

    this.totalLength = 0;
    this.totalPice = 0;
  }

  onCalcHendler(resultCal: ResultCal) {
    this.totalPice = this.totalPice - this.resultsCal[this.selectedTab].pice;
    this.totalLength =
      this.totalLength - this.resultsCal[this.selectedTab].length;

    this.resultsCal[this.selectedTab].length = resultCal.length;
    this.resultsCal[this.selectedTab].pice = resultCal.pice;
    this.resultsCal[this.selectedTab].size = resultCal.size;
    this.resultsCal[this.selectedTab].isCal = resultCal.isCal;

    this.totalPice = this.totalPice + resultCal.pice;
    this.totalLength = this.totalLength + resultCal.length;
  }

  deleteTab(id: number) {
    if (this.resultsCal.length) {
      this.totalPice = this.totalPice - this.resultsCal[this.selectedTab].pice;
      this.totalLength =
        this.totalLength - this.resultsCal[this.selectedTab].length;
      this.resultsCal.splice(this.selectedTab, 1);
    }
  }

  onSelected(ev) {
    this.selectedTab = ev;
  }

  addTab() {
    this.resultsCal.push({
      size: "",
      length: 0,
      pice: 0,
      isCal: false
    });
    this.selectedTab = this.resultsCal.length - 1;
  }
}

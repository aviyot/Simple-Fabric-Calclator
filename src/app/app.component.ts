import { Component, OnInit } from "@angular/core";
import { ResultCal } from "./pices.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Simple Fabric Calclator";
  tabs = ["size1"];
  id: number;
  currentId: number;

  resultsCal: ResultCal[];

  totalLength: number;
  totalPice: number;

  selectedTab;

  ngOnInit() {
    this.id = 0;
    this.selectedTab = 0;
    this.resultsCal = [];
    this.totalLength = 0;
    this.totalPice = 0;
  }

  onCalcHendler(resultCal: ResultCal) {
    let index = this.resultsCal.findIndex(item => {
      return item.id === resultCal.id;
    });

    if (index === -1) {
      this.currentId = this.id;

      this.resultsCal.push(resultCal);
      this.totalPice = this.totalPice + resultCal.pice;
      this.totalLength = this.totalLength + resultCal.length;
      this.id++;
    } else {
      this.currentId = this.id;

      this.totalPice = this.totalPice - this.resultsCal[index].pice;
      this.totalLength = this.totalLength - this.resultsCal[index].length;

      this.resultsCal[index].length = resultCal.length;
      this.resultsCal[index].pice = resultCal.pice;
      this.resultsCal[index].size = resultCal.size;

      this.totalPice = this.totalPice + resultCal.pice;
      this.totalLength = this.totalLength + resultCal.length;
    }
  }

  deleteTab(index: number, id: number) {
    let indexId = this.resultsCal.findIndex(item => {
      return item.id === id;
    });

    this.totalPice = this.totalPice - this.resultsCal[indexId].pice;
    this.totalLength = this.totalLength - this.resultsCal[indexId].length;
    this.resultsCal.splice(indexId, 1);

    this.tabs.splice(index, 1);
    this.selectedTab = index - 1;
  }

  onSelected(ev) {}

  addTab() {
    this.tabs.push(`Size ${this.tabs.length + 1}`);
    this.selectedTab = this.tabs.length - 1;
  }
}

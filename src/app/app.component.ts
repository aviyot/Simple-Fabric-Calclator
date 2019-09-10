import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Simple Fabric Calclator";

  rollWidth;

  bodyWidth;
  bodyLength;
  piceWidth;

  volanLength;
  sharvulLength;

  resultLength;
  totalLengthHem;
  resultCalacPice;
  needPice;

  seam;
  sideHem;
  lengthHem;

  haveVolan;
  haveSharvol;
  fromComp;

  rohabimShlemim;

  isDoCal = false;

  data;

  ngOnInit() {
    this.fristData();
  }
  calcWidth() {
    this.isDoCal = true;

    let pice = this.piceWidth;

    if (pice > 0) {
      pice -= this.seam;
    }

    this.rohabimShlemim = Math.floor(
      (this.bodyWidth - pice + this.sideHem * 2 - this.seam) /
        (this.rollWidth - this.seam)
    );

    this.needPice =
      this.bodyWidth -
      pice +
      this.seam -
      ((this.rollWidth - this.seam) * this.rohabimShlemim -
        (this.sideHem * 2 - this.seam));

    this.inializeData();
  }

  inializeData() {
    this.data = {
      piceWidth: this.piceWidth,
      needPice: this.needPice,
      rollWidth: this.rollWidth,
      rohabimShlemim: this.rohabimShlemim,
      bodyWidth: this.bodyWidth,
      lengthHem : this.lengthHem,
      bodyLength: this.bodyLength,
      seam: this.seam
    };
  }

  fristData() {
    this.seam = 25;
    this.piceWidth = 0;
    this.sideHem = 35;
    this.lengthHem = 100;
    this.rollWidth = 1200;
    this.bodyLength = 3250;
    this.bodyWidth = 4070;
  }
}

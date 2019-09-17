import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { PiceTypes, ResultCal } from "../pices.model";

@Component({
  selector: "app-size",
  templateUrl: "./size.component.html",
  styleUrls: ["./size.component.css"]
})
export class SizeComponent implements OnInit {
  constructor() {}

  rollWidth;

  bodyWidth;
  bodyLength;
  piceWidth;

  volanLength;
  sharvulLength;

  seam;
  sideHem;
  lengthHem;

  isDoCal = false;

  picesData: PiceTypes;

  resultsCal: ResultCal;

  @Output() onCalc = new EventEmitter<ResultCal>();

  ngOnInit() {
    this.fristData();
    //this.resultsCal = null;
    // this.calcWidth();
  }

  calcWidth() {
    this.picesData = this.calcPices(
      this.bodyWidth,
      this.bodyLength,
      this.piceWidth,
      this.rollWidth,
      this.seam,
      this.lengthHem,
      this.sideHem
    );

    if (!this.isDoCal) {
      this.resultsCal = {
        size: `${this.bodyWidth}X ${this.bodyLength}`,
        length: this.picesData.totalLength + this.picesData.totalBodyLength,
        pice: this.picesData.pice
      };

      this.onCalc.emit(this.resultsCal);
    }
    this.isDoCal = true;
  }

  calcPices(
    bodyWidth: number,
    bodyLength: number,
    piceWidth: number,
    rollWidth: number,
    seam: number,
    lengthHem: number,
    sideHem: number
  ): PiceTypes {
    let pice = piceWidth;

    if (piceWidth > 0) {
      piceWidth -= this.seam;
    }

    const rohabimShlemim = Math.floor(
      (bodyWidth - piceWidth + sideHem * 2 - seam) / (rollWidth - seam)
    );

    let needPice =
      bodyWidth -
      piceWidth +
      seam -
      ((rollWidth - seam) * rohabimShlemim - (sideHem * 2 - seam));

    let piceEqualSeam = needPice;

    if (piceEqualSeam === this.seam) {
      piceEqualSeam = 0;
    }

    return {
      rohabimShlemim: rohabimShlemim,
      rollWidth: rollWidth,
      piceWidth: pice,
      pice: piceEqualSeam,
      litlePice: (needPice + seam) / 2,
      bigPice: (needPice + rollWidth) / 2,
      equlPice: (needPice + bodyWidth) / (rohabimShlemim + 1),
      totalLength: rohabimShlemim * (bodyLength + lengthHem),
      bodyLength: bodyLength,
      totalBodyLength: bodyLength + lengthHem
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

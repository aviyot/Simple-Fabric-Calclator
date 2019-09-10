import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-width-view",
  templateUrl: "./width-view.component.html",
  styleUrls: ["./width-view.component.css"]
})
export class WidthViewComponent implements OnInit {

  @Input() data;

  pice;
  shelemim;
  widthGalil;
  sherit;
  simitriBig;
  simitriLittle;
  allSimitri;

  constructor() {}

  ngOnInit() {
    
  }
}

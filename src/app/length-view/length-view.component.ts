import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-length-view",
  templateUrl: "./length-view.component.html",
  styleUrls: ["./length-view.component.css"]
})
export class LengthViewComponent implements OnInit {
  rohabimShlemim;
  bodyLength;
  addtfira;
  resultCalacPice;

  @Input() data;

  constructor() {}

  ngOnInit() {}
}

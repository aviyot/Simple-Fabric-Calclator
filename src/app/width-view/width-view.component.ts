import { Component, OnInit, Input } from "@angular/core";
import { PiceTypes } from '../pices.model';

@Component({
  selector: "app-width-view",
  templateUrl: "./width-view.component.html",
  styleUrls: ["./width-view.component.css"]
})
export class WidthViewComponent implements OnInit {

  @Input() data :PiceTypes ;


  constructor() {}

  ngOnInit() {

  }
}

import { Component, OnInit, Input } from "@angular/core";
import { PiceTypes } from '../pices.model';

@Component({
  selector: "app-length-view",
  templateUrl: "./length-view.component.html",
  styleUrls: ["./length-view.component.css"]
})
export class LengthViewComponent implements OnInit {
 
  @Input() data : PiceTypes;

  constructor() {}

  ngOnInit() {}
}

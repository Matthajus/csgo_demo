import {Component, Input, OnInit} from '@angular/core';
import {Round} from "../../models/Round";

@Component({
  selector: 'app-round-detail',
  templateUrl: './round-detail.component.html',
  styleUrls: ['./round-detail.component.css']
})
export class RoundDetailComponent implements OnInit {
  @Input()
  round: Round;
  @Input()
  ctId: number;
  @Input()
  terId: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}

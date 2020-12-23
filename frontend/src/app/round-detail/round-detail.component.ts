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
  public image: string;

  constructor() {
  }

  ngOnInit(): void {
    if (this.round.typeOfEnd == 1) {
      this.image = 'assets/images/1.png';
    } else if (this.round.typeOfEnd == 12) {
      this.image = 'assets/images/12.png';
    } else {
      this.image = 'assets/images/89.png';
    }
  }
}

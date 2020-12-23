import {Component, Input, OnInit} from '@angular/core';
import {Team} from "../../models/Team";

@Component({
  selector: 'app-gravatar-team',
  templateUrl: './gravatar-team.component.html',
  styleUrls: ['./gravatar-team.component.css']
})
export class GravatarTeamComponent implements OnInit {

  @Input()
  public team: Team;
  @Input()
  public nicknames: boolean;
  @Input()
  public size: string;
  public teamSide: number;

  constructor() {
  }

  ngOnInit(): void {
    if (this.team.teamSide == 'CT') {
      this.teamSide = 0;
    } else {
      this.teamSide = 1;
    }
  }

}

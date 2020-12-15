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
  constructor() { }

  ngOnInit(): void {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {PlayerInTeam} from "../../models/PlayerInTeam";

@Component({
  selector: 'app-team-detail-table',
  templateUrl: './team-detail-table.component.html',
  styleUrls: ['./team-detail-table.component.css']
})
export class TeamDetailTableComponent implements OnInit {

  @Input()
  team: PlayerInTeam[];
  displayedColumns: string[] = ['gravatar', 'name', 'rank', 'k', 'd', 'a', '+-', 'kd', 'mvps', 'score'];

  constructor() {
  }

  ngOnInit(): void {
  }

  round(num: number) {
    return num.toFixed(1);
  }
}

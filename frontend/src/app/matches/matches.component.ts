import {Component, OnInit} from '@angular/core';
import {Match} from "../../models/Match";
import {CsgoService} from "../../services/csgo.service";

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches: Match[];
  displayedColumns: string[] = ['map', 'createdAt', 'minutesAgo', 'Team1', 'Teams1.score', 'Teams2.score', 'Team2', 'k', 'd', 'a'];

  constructor(private csgoService: CsgoService) {
  }

  ngOnInit(): void {
    this.getMatches();
  }

  getMatches() {
    this.csgoService.getAllMatches()
      .subscribe(matches => {
        console.log(matches);
        this.matches = matches;
      });
  }

  round(playTime: number): number {
    return Math.round(playTime);
  }

  formatDate(createdAt: string): number {
    let created = new Date(createdAt);
    return created.getTime();
  }

  computeRank(match: Match): number {
    let rank: number = 0;
    let playerCount: number = 0;
    match.Teams.forEach(team => team.PlayerInTeams.forEach(playerInTeam => {
      rank += playerInTeam.Player.rank;
      playerCount++;
    }));
    return Math.round(rank / playerCount);
  }

  computeKills(match: Match): number {
    let k: number = 0;
    match.Teams.forEach(team => team.PlayerInTeams.forEach(playerInTeam => {
      k += playerInTeam.kills;
    }));
    return k;
  }

  computeAssists(match: Match): number {
    let a: number = 0;
    match.Teams.forEach(team => team.PlayerInTeams.forEach(playerInTeam => {
      a += playerInTeam.assists;
    }));
    return a;
  }

  computeDeaths(match: Match): number {
    let d: number = 0;
    match.Teams.forEach(team => team.PlayerInTeams.forEach(playerInTeam => {
      d += playerInTeam.deaths;
    }));
    return d;
  }
}

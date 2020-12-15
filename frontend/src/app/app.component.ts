import {Component, OnInit} from '@angular/core';
import {CsgoService} from "../services/csgo.service";
import {Match} from "../models/Match";
import {PlayerInTeam} from "../models/PlayerInTeam";
import {Player} from "../models/Player";
import {Round} from "../models/Round";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  matches: Match[];
  pit: PlayerInTeam[];
  tom: Match;
  rom: Round[];
  pom: Match;

  constructor(private csgoService: CsgoService) {
  }

  ngOnInit(): void {
    // this.getMatches();
    this.getPlayerMatches("STEAM_1:1:80015964");
    // this.getTeamsOfMatch(1);
    // this.rom = this.getRoundsOfMatch(1);
    // this.getAllPLayersOfMatch(1);
  }

  getPlayerMatches(steamId: string) {
    this.csgoService.getAllMatchesOfPlayer(steamId).subscribe(player => {
      console.log(player);
      this.pit = player.PlayerInTeams;
    });
    return this.pit;
  }

  getTeamsOfMatch(matchId: number) {
    return this.csgoService.getAllTeamsOfMatch(matchId)
      .subscribe(
        matches => {
          console.log(matches);
          this.tom = matches;
        }
      );
  }

  getRoundsOfMatch(matchId: number) {
    console.log(matchId);
    return this.csgoService.getAllRoundsOfMatch(matchId);
  }

  getAllPLayersOfMatch(matchId: number) {
    return this.csgoService.getAllPlayersOfMatch(matchId)
      .subscribe(
        matches => {
          console.log(matches);
          this.pom = matches;
        }
      );
  }
}

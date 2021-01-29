import {Component, OnInit} from '@angular/core';
import {Match} from "../../models/Match";
import {ActivatedRoute} from "@angular/router";
import {CsgoService} from "../../services/csgo.service";
import {Player} from "../../models/Player";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  player: Player;
  displayedColumns: string[] = ['date', 'map', 'score', 'k', 'd', 'a', '+-', 'kd', 'mvps'];

  constructor(private route: ActivatedRoute, private csgoService: CsgoService) {
    // this.match = match;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.getPlayer(params.get('playerId'));
    });
  }

  getPlayer(id) {
    this.csgoService.getAllMatchesOfPlayerById(id)
      .subscribe(player => {
        console.log(player);
        this.player = player;
      });
  }

  formatDate(createdAt: string): number {
    let created = new Date(createdAt);
    return created.getTime();
  }

  getAllTeamsOfMatch(pin) {
    let homeScore: number;
    let guestScore: number;
    let match = pin.Team.Match;
    if (match.Teams[0].id == pin.Team.id) {
      homeScore = match.Teams[0].score;
      guestScore = match.Teams[1].score;
    } else {
      homeScore = match.Teams[1].score;
      guestScore = match.Teams[0].score;
    }
    return homeScore + ":" + guestScore;
  }

  isWinner(pin) {
    let score = this.getAllTeamsOfMatch(pin);
    if (Number(score.substring(0, score.indexOf(':'))) > Number(score.substring(score.indexOf(':') + 1))) {
      return 'green';
    } else if (Number(score.substring(0, score.indexOf(':'))) < Number(score.substring(score.indexOf(':') + 1))) {
      return 'darkred';
    }
    return 'darkblue';
  }

  round(num: number) {
    return num.toFixed(1);
  }
}

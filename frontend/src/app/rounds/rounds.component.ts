import {Component, Input, OnInit} from '@angular/core';
import {Match} from "../../models/Match";
import {CsgoService} from "../../services/csgo.service";

@Component({
  selector: 'app-rounds',
  templateUrl: './rounds.component.html',
  styleUrls: ['./rounds.component.css']
})
export class RoundsComponent implements OnInit {

  @Input()
  matchId: number;
  @Input()
  ctId: number;
  @Input()
  terId: number;
  match: Match;

  constructor(private csgoService:CsgoService) { }

  ngOnInit(): void {
    this.getRounds(this.matchId);
  }
  getRounds(matchId) {
    this.csgoService.getAllRoundsOfMatch(matchId)
      .subscribe(match => {
        console.log(match);
        this.match = match;
      });
  }
}

import {Component, OnInit} from '@angular/core';
import {Match} from "../../models/Match";
import {ActivatedRoute} from "@angular/router";
import {CsgoService} from "../../services/csgo.service";

// import {  } from '../matches';
@Component({
    selector: 'app-match-details',
    templateUrl: './match-details.component.html',
    styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent implements OnInit {
    match: Match;

    constructor(private route: ActivatedRoute, private csgoService: CsgoService) {
        // this.match = match;
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.getMatch(params.get('matchId'));
        });
    }

    getMatch(matchId) {
        this.csgoService.getMatchById(matchId)
            .subscribe(match => {
                console.log(match);
                this.match = match;
            });
    }

    displayedColumns: string[] = ['gravatar', 'name', 'rank', 'k', 'd', 'a', '+-', 'kd', 'mvps', 'score'];

    round(num: number) {
        return num.toFixed(1);
    }
}

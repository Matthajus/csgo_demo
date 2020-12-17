import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Match} from "../models/Match";
import {Team} from "../models/Team";
import {Round} from "../models/Round";
import {PlayerInTeam} from "../models/PlayerInTeam";
import {Player} from "../models/Player";

@Injectable()
export class CsgoService {
  private url = 'http://localhost:3000/api/';

  constructor(
    private http: HttpClient
  ) {
  }

  getAllMatches(): Observable<Match[]> {
    return this.http.get<Match[]>(`${this.url}matches`);
  }

  getMatchById(matchId: number): Observable<Match> {
    return this.http.get<Match>(`${this.url}match/${matchId}`);
  }

  getAllTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(`${this.url}teams`);
  }

  getAllRounds(): Observable<Round[]> {
    return this.http.get<Round[]>(`${this.url}rounds`);
  }

  getAllPlayerInTeams(): Observable<PlayerInTeam[]> {
    return this.http.get<PlayerInTeam[]>(`${this.url}players_in_team`);
  }

  getAllPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.url}players`);
  }

  getAllMatchesOfPlayer(steamId: string): Observable<Player> {
    return this.http.get<Player>(`${this.url}matches/${steamId}`);
  }

  getAllTeamsOfMatch(matchId: number): Promise<Match> {
    return this.http.get<Match>(`${this.url}teams/${matchId}`).toPromise();
  }

  getAllRoundsOfMatch(matchId: number): Observable<Match> {
    return this.http.get<Match>(`${this.url}rounds/${matchId}`);
  }

  getAllPlayersOfMatch(matchId: number): Observable<Match> {
    return this.http.get<Match>(`${this.url}players/match/${matchId}`);
  }

  getAllPlayersOfTeam(teamId: string): Observable<Team> {
    return this.http.get<Team>(`${this.url}/players/team${teamId}`);
  }

  getPlayerBySteamId(steamId: string): Observable<Player> {
    return this.http.get<Player>(`${this.url}player/${steamId}`);
  }

  getPlayerIdBySteamId(steamId: string): Observable<number> {
    return this.http.get<number>(`${this.url}player/${steamId}`);
  }
}

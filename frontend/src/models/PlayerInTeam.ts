import {Player} from "./Player";

class Team {
}

export class PlayerInTeam {
  id: number;
  teamId: number;
  playerId: number;
  kills: number;
  assists: number;
  deaths: number;
  mvps: number;
  score: number;
  kill_death: number;
  Player: Player;
  Team: Team
}

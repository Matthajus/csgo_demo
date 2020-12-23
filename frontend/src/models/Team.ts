import {PlayerInTeam} from "./PlayerInTeam";
import {Match} from "./Match";

export class Team {
  id: number;
  matchId: string;
  teamSide: string
  score: number;
  PlayerInTeams:PlayerInTeam[];
  Match: Match;
}

import {PlayerInTeam} from "./PlayerInTeam";

export class Team {
  id: number;
  matchId: string;
  teamSide: string
  score: number;
  PlayerInTeams:PlayerInTeam[];
}

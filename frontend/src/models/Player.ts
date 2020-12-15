import {PlayerInTeam} from "./PlayerInTeam";

export class Player {
  id: number;
  steamId: string;
  nickName: string;
  rank: number;
  PlayerInTeams: PlayerInTeam[];
}

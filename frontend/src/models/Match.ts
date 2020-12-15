import {Team} from "./Team";
import {Round} from "./Round";

export class Match {
  id: number;
  matchSteamId: string;
  map: string;
  playTime: number;
  serverName: string;
  clientName: string;
  tickRate: string;
  createdAt: Date;
  Teams: Team[];
  Rounds: Round[];
}

import {Player} from "./player";

export interface Score {
  player: Player;
  chosenTricks: number;
  actualTricks: number;
}

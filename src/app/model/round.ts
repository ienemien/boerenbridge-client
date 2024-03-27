import {Score} from "./score";

export interface Round {
  gameId: string;
  roundNumber: number;
  numberOfCards: number;
  scores: Score[];
}

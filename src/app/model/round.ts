import {Score} from "./score";

export interface Round {
  roundNumber: number;
  numberOfCards: number;
  scores: Score[];
}

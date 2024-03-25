import { ResolveFn } from '@angular/router';
import {inject} from "@angular/core";
import {RoundService} from "../services/round.service";

export const roundResolver: ResolveFn<boolean> = (route, state, ) => {
  return inject(RoundService).getRound(route.queryParams['game'], route.queryParams['round']);
};

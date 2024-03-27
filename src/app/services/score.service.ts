import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Trick} from "../model/trick";

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  scoreUrl = `${environment.api.baseUrl}/score`;

  constructor(private http: HttpClient) { }

  saveChosenTricks(gameId: string, roundNumber: number, tricks: Trick[]): Observable<void> {
    let params = new HttpParams();
    params = params.append('game', gameId);
    params = params.append('round', roundNumber);
    //todo: error handling
    return this.http.put<void>(`${this.scoreUrl}/chosen`, tricks, { params });
  }
}

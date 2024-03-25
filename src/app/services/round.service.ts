import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoundService {

  roundUrl = `${environment.api.baseUrl}/round`;

  constructor(private http: HttpClient) { }

  getRound(game?: string, round?: number): Observable<any> {
    let params = new HttpParams();
    if(game && round) {
      params = params.set('game', game);
      params = params.set('round', round);
    }
    return this.http.get<string>(this.roundUrl, { params } );
  }
}

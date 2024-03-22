import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  gameUrl = `${environment.api.baseUrl}/game`;

  constructor(private http: HttpClient) { }

  createGame(users: string[]): Observable<string> {
    let names = new HttpParams();
    for (const user of users) {
      names = names.append('name', user);
    }
    const options = { params: names } ;
    return this.http.post<string>(`${this.gameUrl}/create`, null, options);
  }
}

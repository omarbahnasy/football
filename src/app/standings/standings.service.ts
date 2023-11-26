import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiLeagueResponse } from '../response.interface';
import { APIUrls } from '../api.urls';

@Injectable({
  providedIn: 'root',
})
export class StandingsService {
  constructor(private http: HttpClient) {}

  fetchStandings(leagueId: number) {
    let queryParams = new HttpParams();
    queryParams = queryParams
      .append('league', leagueId)
      .append('season', new Date().getFullYear());

    return this.http
      .get<ApiLeagueResponse>(APIUrls.standings, { params: queryParams })
      .pipe(
        map((response: ApiLeagueResponse) => {
          return response.response[0].league.standings[0];
        })
      );
  }
}

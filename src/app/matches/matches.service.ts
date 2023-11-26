import { Injectable } from '@angular/core';
import { ApiFixtureResponse } from '../response.interface';
import { APIUrls } from '../api.urls';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MatchesService {
  constructor(private http: HttpClient) {}

  fetchMatches(teamId: number) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('team', teamId).append('last', 10);

    return this.http
      .get<ApiFixtureResponse>(APIUrls.fixtures, { params: queryParams })
      .pipe(
        map((response: ApiFixtureResponse) => {
          return response.response;
        })
      );
  }
}

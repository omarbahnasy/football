import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private countryLeagueMap = new Map<string, number>([
    ['england', 39],
    ['spain', 140],
    ['germany', 78],
    ['france', 61],
    ['italy', 135],
  ]);

  constructor() {}

  getCountries() {
    return Array.from(this.countryLeagueMap.keys());
  }

  getLeagueId(country: string) {
    return this.countryLeagueMap.get(country);
  }
}

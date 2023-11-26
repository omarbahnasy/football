export interface ApiLeagueResponse {
  response: LeagueResponse[];
}

export interface LeagueResponse {
  league: League;
}

export interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  season: number;
  standings: Standing[][];
}

export interface Standing {
  rank: number;
  team: Team;
  points: number;
  goalsDiff: number;
  all: Stats;
}

export interface Stats {
  played: number;
  win: number;
  draw: number;
  lose: number;
}

export interface Team {
  id: number;
  name: string;
  logo: string;
}

export interface ApiFixtureResponse {
  response: FixtureResponse[];
}

export interface FixtureResponse {
  league: League;
  teams: Teams;
  goals: Goals;
}

export interface Teams {
  home: Team;
  away: Team;
}

export interface Goals {
  home: number;
  away: number;
}

export interface ErrorResponse {
  message: string;
}

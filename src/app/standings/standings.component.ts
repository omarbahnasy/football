import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ErrorResponse, Standing } from '../response.interface';
import { StandingsService } from './standings.service';
import { CountriesService } from '../countries/countries.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css'],
})
export class StandingsComponent {
  standings: Standing[] = [];

  constructor(
    private countriesService: CountriesService,
    private standingsService: StandingsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const leagueId = this.countriesService.getLeagueId(params['country']);
      if (!leagueId) {
        this.router.navigate(['/']);
      } else {
        this.standingsService.fetchStandings(leagueId).subscribe({
          next: (standings: Standing[]) => {
            this.standings = standings;
          },
          error: (error: ErrorResponse) => {
            alert(error.message);
            this.router.navigate(['/']);
          },
        });
      }
    });
  }

  onClickTeam(teamId: number) {
    this.router.navigate([teamId], { relativeTo: this.route });
  }
}

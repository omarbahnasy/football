import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchesService } from './matches.service';
import { ErrorResponse, FixtureResponse } from '../response.interface';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css'],
})
export class MatchesComponent {
  fixtures: FixtureResponse[] = [];

  constructor(
    private matchesService: MatchesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.matchesService
      .fetchMatches(+this.route.snapshot.params['teamId'])
      .subscribe({
        next: (fixtures: FixtureResponse[]) => {
          if (
            fixtures.length === 0 ||
            fixtures[0].league.country.toLowerCase() !==
              this.route.snapshot.params['country']
          ) {
            this.router.navigate(['/']);
          } else {
            this.fixtures = fixtures;
          }
        },
        error: (error: ErrorResponse) => {
          alert(error.message);
          this.router.navigate(['/']);
        },
      });
  }

  onClickBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}

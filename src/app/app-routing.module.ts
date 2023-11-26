import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandingsComponent } from './standings/standings.component';
import { MatchesComponent } from './matches/matches.component';

const routes: Routes = [
  { path: ':country', component: StandingsComponent },
  { path: ':country/:teamId', component: MatchesComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeagueListComponent } from './components/league-list/league-list.component';
import { LiveScoresComponent } from './components/live-scores/live-scores.component';
import { TeamDetailsComponent } from './components/team-details/team-details.component';

export const routes: Routes = [
  { path: '', redirectTo: '/leagues', pathMatch: 'full', title: 'Home' },
  { path: 'leagues', component: LeagueListComponent, title: 'Leagues' },
  { path: 'live-scores', component: LiveScoresComponent, title: 'Live Score' },
  { path: 'team/:id', component: TeamDetailsComponent, title: 'Team' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

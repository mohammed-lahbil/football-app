import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LeagueListComponent } from './components/league-list/league-list.component';
import { LiveScoresComponent } from './components/live-scores/live-scores.component';
import { TeamDetailsComponent } from './components/team-details/team-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, RouterModule, RouterOutlet, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/leagues', pathMatch: 'full', title: 'Home' },
  { path: 'leagues', component: LeagueListComponent, title: 'Leagues' },
  { path: 'live-scores', component: LiveScoresComponent, title: 'Live Score' },
  { path: 'team/:id', component: TeamDetailsComponent, title: 'Team' }
];

@NgModule({
  declarations: [
    AppComponent,
    LeagueListComponent,
    LiveScoresComponent,
    TeamDetailsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideHttpClient(),
    provideRouter(routes)
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { SportmonksService } from '../../services/sportmonks.service';

@Component({
  selector: 'app-league-list',
  templateUrl: './league-list.component.html',
  styleUrls: ['./league-list.component.scss']
})
export class LeagueListComponent implements OnInit {
  leagues: any[] = [];

  constructor(private sportmonksService: SportmonksService) {}

  ngOnInit(): void {
    this.sportmonksService.getLeagues().subscribe((data) => {
      console.log(data)
      this.leagues = data.data;
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SportmonksService {
  private apiUrl = '/api';
  private apiKey = environment.sportmonksApiKey;
  headers = new HttpHeaders({
    "Authorization": environment.sportmonksApiKey,
    "Content-Type": "application/json",
    "Accept": "application/json"
  })

  constructor(private http: HttpClient) {}

  // Fetch live scores
  getLiveScores(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/livescores`, { headers: this.headers});
  }

  // Fetch league details
  getLeagues(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/leagues`, { headers: this.headers});
  }

  // Fetch team details
  getTeam(teamId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/teams/${teamId}`, { headers: this.headers});
  }
}

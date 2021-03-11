import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameMove } from '../models/GameMove';

@Injectable({
  providedIn: 'root'
})

export class BackendService {
  private readonly getMovesURL = 'http://localhost:5000/api/Game/GetPossibleMoves';

  private readonly determineWinerURL =  'http://localhost:5000/api/Game/DetermineResult';
  private httpOptions: any;
  
  constructor(private http: HttpClient) { 
    this.httpOptions = {
      observe: 'body', 
      responseType: 'json',
    };
  }

  getGameMoves(): Observable<any> {
    console.log('calling: GetPossibleMoves');

    return this.http.get<string[]>(this.getMovesURL, this.httpOptions);
  }

  determineWiner(gm: GameMove): Observable<any> {
    let moveURL = `${this.determineWinerURL}/${gm.movePlayerOne}/${gm.movePlayerTwo}` ;

    return this.http.post(moveURL, '', this.httpOptions) ;
  }
}

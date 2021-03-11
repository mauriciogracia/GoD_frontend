import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config, Observable } from 'rxjs';
import { GameMove } from '../models/GameMove';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})

export class BackendService {
  private readonly getMovesURL =  this.configService.apiBaseUrl + '/GetPossibleMoves';
  private readonly determineWinerURL =  this.configService.apiBaseUrl + '/DetermineResult';

  private httpOptions: any;
  
  constructor(
      private configService:AppConfigService, 
      private http: HttpClient) 
     { 
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

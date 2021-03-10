import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BackendService {
  private readonly getMovesURL = 'http://localhost:5000/api/Game/GetPossibleMoves';

  private httpOptions: any;
  
  constructor(private http: HttpClient) { 
    this.httpOptions = {
      observe: 'body', 
      responseType: 'json',
      /*
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*'
      })
      */
      headers:{'Access-Control-Allow-Origin':'*'}
    };
  }

  getGameMoves(): Observable<any> {
    console.log('calling: GetPossibleMoves');

    return this.http.get<string[]>(this.getMovesURL, this.httpOptions);
  }
}

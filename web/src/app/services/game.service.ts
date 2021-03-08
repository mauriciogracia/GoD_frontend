import { Inject,Injectable } from '@angular/core';
import { gameStatus } from '../models/gameStatus';
import { player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  gameStatus: gameStatus | undefined;

  constructor() { }
  
  start(
    playerOne: string,
    playerTwo: string
  ) {
	//TODO - MGG - instead of hardcoding this move it to the backend or a local JSON file
    const p1 = new player(playerOne, 0);
    const p2 = new player(playerTwo, 0);
    const currentRound = 1;
    const maxRounds = 3;
    const currentPlayer = 0;

    this.gameStatus = new gameStatus(currentRound, maxRounds, currentPlayer, [p1, p2]);
    
    console.warn(this.gameStatus);
  }
  
  getCurrentRound() {
    return this.gameStatus?.currentRound || -1; 
  }

  getCurrentPlayerName() {
    let cp: string = '';

    if (this.gameStatus != null) {
      cp = this.gameStatus.players[this.gameStatus.currentPlayer].name;
    }

    return cp;
  }
}

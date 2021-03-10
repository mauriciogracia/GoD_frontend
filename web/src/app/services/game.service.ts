import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Inject,Injectable } from '@angular/core';
import { gameStatus } from '../models/gameStatus';
import { playerStats } from '../models/playerStats';

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
    const p1 = new playerStats(playerOne, 0);
    const p2 = new playerStats(playerTwo, 0);
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
      console.log("currentPlayer:" + this.gameStatus.currentPlayer) ;
      cp = this.gameStatus.players[this.gameStatus.currentPlayer].name;
    }

    return cp;
  }

  nextMove(move: string) {
    if (this.gameStatus != null) {
      if(this.gameStatus.currentPlayer == 0){
        this.gameStatus.currentMove.movePlayerOne = move ;
      }
      else {
        this.gameStatus.currentMove.movePlayerTwo = move ;
        this.gameStatus.currentRound++ ;
      }
      this.gameStatus.currentPlayer = (this.gameStatus.currentPlayer+1)%2 ;
      console.log(this.gameStatus) ;
    }
  }
}

import { Inject,Injectable } from '@angular/core';
import { GameStatus } from '../models/GameStatus';
import { PlayerStats } from '../models/PlayerStats';
import { RoundWiner } from '../models/RoundWiner';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private gameStatus: GameStatus | undefined;
  private moves : string[] = [];

  constructor(private backService: BackendService) {
    this.initData() ;
  }
      private initData() {
    //Handle error in API calls
    this.backService.getGameMoves()
    .subscribe((data: string[]) => {
      this.moves = data;
    });
  }
  start(
    playerOne: string,
    playerTwo: string
  ) {
	//TODO - MGG - instead of hardcoding this move it to the backend or a local JSON file
    const p1 = new PlayerStats(playerOne, 0);
    const p2 = new PlayerStats(playerTwo, 0);
    const currentRound = 1;
    const maxRounds = 3;
    const currentPlayer = 0;

    this.gameStatus = new GameStatus(currentRound, maxRounds, currentPlayer, [p1, p2]);
    
    console.warn(this.gameStatus);
  }
  
  getGameMoves() {
    return this.moves ;
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

  nextMove(move: string) {
    if (this.gameStatus != null) {
      if(this.gameStatus.currentPlayer == 0){
        this.gameStatus.currentMove.movePlayerOne = move ;
      }
      else {
        this.gameStatus.currentMove.movePlayerTwo = move ;

        //TODO: determin who won
        this.gameStatus.roundWiners.push(new RoundWiner(this.gameStatus.currentRound, this.getCurrentPlayerName())) ;
        this.gameStatus.currentRound++ ;
      }
      this.gameStatus.currentPlayer = (this.gameStatus.currentPlayer+1)%2 ;
      console.log(this.gameStatus) ;
    }
  }

  getWiners() {
    return this.gameStatus?.roundWiners || [] ;
  }
}

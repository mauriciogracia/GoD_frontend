import { Inject,Injectable } from '@angular/core';
import { GameRoundComponent } from '../game-round/game-round.component';
import { GameStatus } from '../models/GameStatus';
import { PlayerStats } from '../models/PlayerStats';
import { RoundWiner } from '../models/RoundWiner';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private gameStatus: GameStatus = new GameStatus() ;
  private moves : string[] = [];

  constructor(private backService: BackendService) {
    this.initGameMoves() ;
  }
  
  start(
    playerOne: string,
    playerTwo: string
  ) {
    this.gameStatus.init();
    this.addPlayer(playerOne);
    this.addPlayer(playerTwo);
    
    console.warn(this.gameStatus);
  }
  
  getGameMoves() {
    return this.moves ;
  }

  getCurrentRound() {
    return this.gameStatus.currentRound ; 
  }

  getCurrentPlayerName() {
    let cp: string = '';

    if (this.hasPlayers()) {
      cp = this.gameStatus.players[this.gameStatus.currentPlayer].name;
    }

    return cp;
  }

  getPlayerName(index:number) {
    let pName: string = '';

    if (this.hasPlayers()) {
      pName = this.gameStatus.players[index].name;
    }

    return pName;
  }

  private initGameMoves() {
    //TODO: Handle error in API calls
    this.backService.getGameMoves()
    .subscribe(
      (data: string[]) => {this.moves = data;},
      err => console.log('HTTP getGameMoves error:', err),
      //() => console.log('HTTP request completed.')
      );
  }

  nextMove(move: string,  gr:GameRoundComponent) {
    console.log('nextMove:', move)

    if(this.gameStatus.currentPlayer == 0){
      this.gameStatus.currentMove.movePlayerOne = move ;
      gr.nextStep(false) ;
    }
    else {
      this.gameStatus.currentMove.movePlayerTwo = move ;

      //Determine who won 
      
      this.backService.determineWiner(this.gameStatus.currentMove)
      .subscribe(
        res => {
          let text : string;
          
          if(res == 1) {
           text = this.getPlayerName(0) ;
          }
          else if(res == -1) {
            text = this.getPlayerName(1) ;
          }
          else {
            text = "-- TIE --";
          }
          let rw = new RoundWiner(this.gameStatus.currentRound, text) ;
          this.gameStatus.roundWiners.push(rw) ;

          this.gameStatus.currentRound++ ;
          gr.nextStep(this.isThereWiner()) ;

        },
        err => console.log('HTTP determineWiner error:', err),
        //() => console.log('HTTP request completed.')

        );
    }
    console.log(this.gameStatus) ;
  }
  
  isThereWiner() {
    let winner: boolean ;

    this.gameStatus.roundWiners.sort((a,b) => a.round - b.round);

    console.log(this.gameStatus.roundWiners) ;

    winner = false ;

    return winner ; 
  }
  
  hasPlayers() {
    let has = (this.gameStatus.players.length > 0) ;

    return has ;
  }

  addPlayer(playerName: string){
    this.gameStatus.players.push(new PlayerStats(playerName, 0));
  }

  nextPlayer() {
    let cp: string = '';

    if (this.hasPlayers()) {
      this.gameStatus.currentPlayer = (this.gameStatus.currentPlayer+1)%this.gameStatus.players.length ;
      cp = this.getCurrentPlayerName();
    }
    return cp ;
  }

  getWiners() {
    return this.gameStatus.roundWiners || [] ;
  }



}

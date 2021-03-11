import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-round',
  templateUrl: './game-round.component.html',
  styleUrls: ['./game-round.component.css']
})
export class GameRoundComponent implements OnInit { //}, AfterViewInit {
  currentRound : number = 0 ;
  currentPlayer: string = '';
  selectedMove: string = 'rock';
  moves : string[] = [];

  errorMessage = undefined ;

  currentRoundInfo = new FormGroup({
    movesControl: new FormControl('', [Validators.required]),
  });
  constructor(
    private gameService: GameService, 
    private router:Router
    ) { }

  ngOnInit(): void {
    this.currentRound = this.gameService.getCurrentRound();

    //if the game has not started return to the game-start
    if (this.gameService.hasPlayers()) {
      this.currentPlayer = this.gameService.getCurrentPlayerName();
     

      this.moves = this.gameService.getGameMoves() ;
      console.log(`Game Moves: ${this.moves}`);

      //Set de default value
      this.currentRoundInfo.setValue({
        movesControl: 'rock' 
      });
    }
    else {
      this.router.navigateByUrl('/');
    }
  }

  moveSelected(move: string) {
    this.selectedMove = move ;
  }

  //NEXT button
  onSubmit() {
    this.gameService.nextMove(this.selectedMove,this) ;
  }

  getWiners() {
    return this.gameService.getWiners() ;
  }
}

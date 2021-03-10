import { ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-round',
  templateUrl: './game-round.component.html',
  styleUrls: ['./game-round.component.css']
})
export class GameRoundComponent implements OnInit {
  currentRound : number = 0 ;
  currentPlayer: string = '';
  moves : string[] = [];
  selectedMove: string = 'Rock';

  currentRoundInfo = new FormGroup({
    moves: new FormControl('', [Validators.required]),
  });
  constructor(
    private gameService: GameService, 
    private backService: BackendService,
    private router:Router) { }

  ngOnInit(): void {
    this.currentRound = this.gameService.getCurrentRound();
    //if the game has not started return to the game-start
    if (this.currentRound > 0) {
      this.currentPlayer = this.gameService.getCurrentPlayerName();

      this.backService.getGameMoves()
          .subscribe((data: string[]) => {
            this.moves = data;
            //this.currentRoundInfo.setValue({moves : data}) ;
            console.log(`getGameMoves:${this.moves}`);
          });

      this.currentRoundInfo.setValue({
        moves: 'Paper'
      });

    }
    else {
      this.router.navigateByUrl('/');
    }
  }

  moveSelected(move: string) {
    console.log("moveSelected:" + move) ;
    this.selectedMove = move ;
  }

  onSubmit() {
    console.log("next") ;
    
  }
}

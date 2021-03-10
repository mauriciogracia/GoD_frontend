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
export class GameRoundComponent implements OnInit { //}, AfterViewInit {
  currentRound : number = 0 ;
  currentPlayer: string = '';

  moves : string[] = [];
  selectedMove: string = 'rock';

  errorMessage = undefined ;

  currentRoundInfo = new FormGroup({
    movesControl: new FormControl('', [Validators.required]),
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

      if(this.moves.length === 0) {
        this.backService.getGameMoves()
            .subscribe((data: string[]) => {
              this.moves = data;
              console.log(`getGameMoves:${this.moves}`);
            });
      }
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
    this.gameService.nextMove(this.selectedMove) ;
    //reloadoing for same URL is not woking even after configures in app-routing.module.ts
    //this.router.navigateByUrl('/round');
    this.ngOnInit() ;
  }
}

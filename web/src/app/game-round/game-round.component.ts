import { Component, OnInit } from '@angular/core';
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

  constructor(
    private gameService: GameService, 
    private backService: BackendService,
    private router:Router) { }

  ngOnInit(): void {
    this.currentRound = this.gameService.getCurrentRound();
    this.backService.getGameMoves()
          .subscribe((data: string[]) => {
            this.moves = data;
            console.log(`getGameMoves:${this.moves}`);
          });
  
    ;

    //if the game has not started return to the game-start
    if (this.currentRound > 0) {
      this.currentPlayer = this.gameService.getCurrentPlayerName();
    }
    else {
      this.router.navigateByUrl('/');
    }
  }

  onSubmit() {

  }
}

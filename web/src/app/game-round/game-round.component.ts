import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-round',
  templateUrl: './game-round.component.html',
  styleUrls: ['./game-round.component.css']
})
export class GameRoundComponent implements OnInit {
  currentRound : number = 0 ;
  currentPlayer: string = '';

  constructor(private gameService: GameService, private router:Router) { }

  ngOnInit(): void {
    this.currentRound = this.gameService.getCurrentRound();

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

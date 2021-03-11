import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-show-winer',
  templateUrl: './show-winer.component.html',
  styleUrls: ['./show-winer.component.css']
})
export class ShowWinerComponent implements OnInit {

  constructor(
    private gameService: GameService, 
    private router:Router
    ) { }

  ngOnInit(): void {
    //if the game has not started return to the game-start
    if (this.gameService.hasPlayers()) {
      //TODO request and show the game stats
    }
    else {
      this.playAgain();
    }

  }

  getWiners() {
    return this.gameService.getWiners() ;
  }

  playAgain() {
    this.router.navigateByUrl('/');
  }
}

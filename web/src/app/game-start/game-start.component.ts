import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-start',
  templateUrl: './game-start.component.html',
  styleUrls: ['./game-start.component.css']
})
  
export class GameStartComponent implements OnInit {
  playerInfo = new FormGroup({
    playerOneName: new FormControl('', [Validators.required, this.WhitespacesInvalid]),
    playerTwoName: new FormControl('', [Validators.required, this.WhitespacesInvalid]),
  });

  constructor(private gameService: GameService, private router:Router) {  }

  public WhitespacesInvalid(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespaceInvalid': true };
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.gameService.start(this.playerInfo.value.playerOneName, this.playerInfo.value.playerTwoName);
    this.router.navigateByUrl('/round');
  }

  
}

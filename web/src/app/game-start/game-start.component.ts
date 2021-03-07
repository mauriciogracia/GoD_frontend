import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-game-start',
  templateUrl: './game-start.component.html',
  styleUrls: ['./game-start.component.css']
})
  
export class GameStartComponent implements OnInit {
  playerInfo = new FormGroup({
    playerOneName: new FormControl(''),
    playerTwoName: new FormControl(''),
  });

  constructor() {  }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.playerInfo.value);
  }
}

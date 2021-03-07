import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

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

  constructor() {  }

  public WhitespacesInvalid(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespaceInvalid': true };
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.playerInfo.value);
    console.warn(this.playerInfo);
  }
}

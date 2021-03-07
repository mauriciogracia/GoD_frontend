import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GameRoundComponent } from './game-round/game-round.component';
import { GameStartComponent } from './game-start/game-start.component';

@NgModule({
  declarations: [
    AppComponent,
    GameRoundComponent,
    GameStartComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

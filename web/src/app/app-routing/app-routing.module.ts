import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameRoundComponent } from '../game-round/game-round.component';
import { GameStartComponent } from '../game-start/game-start.component';
import { RoundWiner } from '../models/RoundWiner';
import { RoundWinersComponent } from '../round-winers/round-winers.component';
import { ShowWinerComponent } from '../show-winer/show-winer.component';


const routes: Routes = [
  {
    path: '',
    component: GameStartComponent,
  },
  {
    path: 'round',
    component: GameRoundComponent,
  },
  {
    path: 'winer',
    component: ShowWinerComponent,
  },
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes, {
        onSameUrlNavigation: 'reload'
      })
  ],
  exports: [
      RouterModule
  ],
  declarations: []
})
  
export class AppRoutingModule { }

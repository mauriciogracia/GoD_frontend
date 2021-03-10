import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameRoundComponent } from '../game-round/game-round.component';
import { GameStartComponent } from '../game-start/game-start.component';


const routes: Routes = [
  {
    path: '',
    component: GameStartComponent,
  },
  {
    path: 'round',
    component: GameRoundComponent,
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

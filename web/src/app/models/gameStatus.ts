import { GameMove } from "./GameMove";
import { PlayerStats } from "./PlayerStats";

export class GameStatus {
    public currentMove: GameMove ;

    constructor(
        public currentRound: number,
        public maxWinningRounds : number,
        public currentPlayer: number,
        public players : PlayerStats[],
    ) {
        this.currentMove = new GameMove('','') ;
     }
}
import { GameMove } from "./GameMove";
import { PlayerStats } from "./PlayerStats";
import { RoundWiner } from "./RoundWiner";

export class GameStatus {
    public currentMove: GameMove ;
    public roundWiners: RoundWiner[] ;

    constructor(
        public currentRound: number,
        public maxWinningRounds : number,
        public currentPlayer: number,
        public players : PlayerStats[],
    ) {
        this.currentMove = new GameMove('','') ;
        this.roundWiners = [];
     }
}
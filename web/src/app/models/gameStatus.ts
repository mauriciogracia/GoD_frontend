import { gameMove } from "./gameMove";
import { playerStats } from "./playerStats";

export class gameStatus {
    public currentMove: gameMove ;

    constructor(
        public currentRound: number,
        public maxWinningRounds : number,
        public currentPlayer: number,
        public players : playerStats[],
    ) {
        this.currentMove = new gameMove('','') ;
     }
}
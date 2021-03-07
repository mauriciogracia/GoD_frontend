import { player } from "./player";

export class gameStatus {

    constructor(
        public currentRound: number,
        public maxWinningRounds : number,
        public currentPlayer: number,
        public players : player[],
    ) { }
}
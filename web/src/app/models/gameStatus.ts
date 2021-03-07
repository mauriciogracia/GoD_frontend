import { player } from "./player";

export class gameStatus {

    constructor(
        public currentRound: number,
        public maxRounds : number,
        public currentPlayer: number,
        public players : player[],
    ) { }
}
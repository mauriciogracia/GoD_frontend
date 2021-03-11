import { GameMove } from "./GameMove";
import { PlayerStats } from "./PlayerStats";
import { RoundWiner } from "./RoundWiner";

export class GameStatus {
    public currentMove: GameMove = new GameMove('','');
    public roundWiners: RoundWiner[] = [];
    public currentRound: number = 1;
    public maxWinningRounds : number = 3;
    public currentPlayer: number = 0;
    public players : PlayerStats[] = [];

    constructor(
    ) {
     }


}
import { GameMove } from "./GameMove";
import { PlayerStats } from "./PlayerStats";
import { RoundWiner } from "./RoundWiner";

export class GameStatus {
    public currentMove: GameMove = new GameMove('','');
    public roundWiners: RoundWiner[] = [];
    public currentRound: number = 1;
    public currentPlayer: number = 0;
    public players : PlayerStats[] = [];
    public maxGameRounds : number = 3 ;

    constructor(
    ) {
        this.init() ;
     }

     init() {
        this.currentMove  = new GameMove('','');
        this.roundWiners = [];
        this.currentRound = 1;
        this.currentPlayer = 0;
        this.players  = []; 
        this.maxGameRounds = 3 ;
     }


}
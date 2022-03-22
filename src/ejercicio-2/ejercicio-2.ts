import { Grid } from "./grid";
import { Player } from "./player";
import { GameConect4 } from "./connect4";

let a:Player = new Player("Juan");
let b:Player = new Player("Ana");
let grid = new Grid();
let game = new GameConect4(a, b, grid);
game.gamePlayConect4();

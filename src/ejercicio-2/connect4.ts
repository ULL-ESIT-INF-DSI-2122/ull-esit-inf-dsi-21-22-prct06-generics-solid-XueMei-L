import { Grid } from "./grid";
import { Player } from "./player";

export class GameConect4 {

    private player1:Player;
    private player2:Player;
    private grid:Grid;

    constructor(jugador1:Player, jugador2:Player, regilla:Grid) {
        this.player1 = jugador1;
        this.player2 = jugador2;
        this.grid = regilla;
    }
    
    /**
     * _Metodo que realiza el proceso de juego conecta 4_
     */
    public gamePlayConect4() {
        // Game start
        console.log(`---------------------------------Bienvenido al juego Conecta 4-----------------------------`); 
    
        this.grid.showGrid();
        console.log(`\n>> Empieza el jugador "${this.player1.getName()}"`);
        let round:number = 1;
        let winnerPlayerA:boolean = false;
        let winnerPlayerB:boolean = false;
        var scanf = require('scanf');

        // while(winnerPlayerA == false && winnerPlayerB == false) {
        while(winnerPlayerA == false && winnerPlayerB == false && this.player1.getNumFichas() > 0 && this.player2.getNumFichas() > 0 ) {

            console.log(`>> Rounda [${round}] ----------------------------------------------------------\n`);
            
            if(round % 2 != 0) {
                console.log(`>> Hola jugador ${this.player1.getName()}. \n>> Ahora es su turno, qué columna quieres insertar una ficha?`);
                
                //para entrar al bucle while, si la columna no es valido, vuelva a insertar. 
                let valido:boolean = false;
                
                while(valido == false) {
                    console.log(`>> Indica un numero entre 0-6`);
                    var colums = scanf('%d');
                    console.log(`>> Usted ha insertado una ficha en la columna ${colums}.`);
                    if(this.grid.isValid(colums)) {
                        console.log(`>> La columna ${colums} es valida`);
                        console.log(`>> El jugador ${this.player1.getName()} pone una ficha en la columa ${colums}`);
                        
                        // Disminuir el numero de fichas
                        this.player1.setNumFichas(this.player1.getNumFichas()-1);
                        console.log(`>> El jugador ${this.player1.getName()} queda ${this.player1.getNumFichas()} fichas.`);
    
                        //Pasar la poscion actual para analizar
                        winnerPlayerA = this.gameWinner(this.grid.setPosAndGetI(colums), colums);
                        valido = true;
                    }else{
                        console.log(`>> El jugador debe volver a poner una ficha.`);
                        valido = false;
                    }
                }
            }else{
                console.log(`>> Hola jugador ${this.player2.getName()}. \n>> Ahora es su turno, qué columna quieres insertar una ficha?`);
                
                //para entrar al bucle while, si la columna no es valido, vuelva a insertar. 
                let valido:boolean = false;

                while(valido == false) {
                    console.log(`>> Indica un numero entre 0-6`);
                    var colums = scanf('%d');
                    console.log(`>> Usted ha insertado una ficha en la columna ${colums}.`);

                    if(this.grid.isValid(colums)) {
                        console.log(`>> La columna ${colums} es valida`);
                        console.log(`>> El jugador ${this.player2.getName()} pone una ficha en la columa ${colums}`);
                        
                        // Disminuir el numero de fichas
                        this.player2.setNumFichas(this.player1.getNumFichas()-1);
                        console.log(`>> El jugador ${this.player2.getName()} queda ${this.player2.getNumFichas()} fichas.`);
    
                        //Pasar la poscion actual para analizar
                        winnerPlayerB = this.gameWinner(this.grid.setPosAndGetI(colums), colums);

                        valido = true;
                    }else{
                        console.log(`>> El jugador debe volver a poner una ficha.`);
                        valido = false;
                    }
                }
            }
            // Mostrar regilla cada vez;
            this.grid.showGrid();

            // Comprobar que haya ganado uno de ellos
            if(winnerPlayerA == true) {
                console.log(`${this.player1.getName()} ha ganado el partido.`);
            }else if(winnerPlayerB == true) {
                console.log(`${this.player2.getName()} ha ganado el partido.`);
            }else{
            }
            round++;
        }
    }


    /**
     * _Metodo que comprobar que si la posicion actual se puede en contrar 4 fichas seguidas_
     * @param posActualI posicion horizontal para analizar que si haya ganado o no
     * @param posActualJ posicion vertical para analizar que si haya ganado o no
     */
    public gameWinner(posActualI:number, posActualJ:number):boolean {
        let winner:boolean = false;
        let countToken:number;

        //hay que hacer 4 bucle for para comprobar

        //horizontal
        countToken = 0;
        for(let i:number = 0; i < this.grid.getCols()-1; i++) {
            if(this.grid.getGrid()[posActualI][i] == 0) {
                continue;
            }else if(this.grid.getGrid()[posActualI][posActualJ] == this.grid.getGrid()[posActualI][i]) {
                if(this.grid.getGrid()[posActualI][i] == this.grid.getGrid()[posActualI][i+1]){
                    countToken++;
                    if(countToken==3) {
                        winner = true;
                    }
                }
            }else{
                continue;
            }
        }

        //vertical
        countToken = 0;
        for(let i:number = posActualI; i < this.grid.getRows()-1; i++) {
            if(this.grid.getGrid()[i][posActualJ] == 0) {
                continue;
            }else if(this.grid.getGrid()[posActualI][posActualJ] == this.grid.getGrid()[i][posActualJ]) {
                if(this.grid.getGrid()[i][posActualJ] == this.grid.getGrid()[i+1][posActualJ]){
                    countToken++;
                    if(countToken==3) {
                        winner = true;
                    }
                }
            }else{
                continue;
            }
        }


        //diagonal izq
        countToken = 0;
        let initCountPosI_izq:number = 0;
        let initCountPosJ_izq:number = posActualI + posActualJ;
        
        // Calcula la posicion diagonal inicial 
        if(initCountPosJ_izq < this.grid.getRows()) {
            initCountPosI_izq = 0;
        }else{
            initCountPosI_izq = initCountPosJ_izq - this.grid.getRows();
            initCountPosJ_izq = this.grid.getCols()-1;
        }
        for(let i:number = initCountPosI_izq, j:number = initCountPosJ_izq; i < this.grid.getRows()-1; i++, j--) {
            if(this.grid.getGrid()[i][j] == 0) {
                continue;
            }else if(this.grid.getGrid()[i][j] == this.grid.getGrid()[i+1][j-1]) {
                countToken++;
                    if(countToken==3) {
                        winner = true;
                    }
            }else{
                continue;
            }
        }
        

        //diagonal der
        countToken = 0;
        let initCountPosI_der:number = posActualI - Math.min(posActualI, posActualJ);
        let initCountPosJ_der:number = posActualJ - Math.min(posActualI, posActualJ);
        for(let i:number = initCountPosI_der, j:number = initCountPosJ_der; i < this.grid.getRows()-1; i++, j++) {
            if(this.grid.getGrid()[i][j] == 0) {
                continue;
            }else if(this.grid.getGrid()[i][j] == this.grid.getGrid()[i+1][j+1]) {
                countToken++;
                    if(countToken==3) {
                        winner = true;
                    }
            }else{
                continue;
            }
        }
        return winner;
    }
}
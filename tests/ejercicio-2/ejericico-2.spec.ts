import 'mocha';
import { expect } from 'chai';
import { Grid } from "../../src/ejercicio-2/grid";
import { Player } from "../../src/ejercicio-2/player";
import { GameConect4 } from "../../src/ejercicio-2/connect4";

describe('Tests for ejercicio-2 Conect 4', () =>{

    const player1 = new Player("player01");
    const player2 = new Player("player02");

    const grid = new Grid();

    const GameConect = new GameConect4(player1, player2, grid);

    describe('Tests for the class Grid', () => {

        it('Existe una clase Grid', () => {
            expect(grid).not.to.be.null;
        });
        
        it('Existe un metodo showGrid()', () => {
            expect(grid.showGrid()).not.to.be.null;
        });

        
    });

    describe('Tests for the class Player', () => { 

        it('Nombre del jugador', () =>{
            expect(player1.getName()).to.eq("player01");
            expect(player2.getName()).to.eq("player02");
        });

        it('Numero de fichas para cada jugador es 21', () =>{
            expect(player1.getNumFichas()).to.eq(21);
            expect(player2.getNumFichas()).to.eq(21);
        });

    });


    describe('Tests for the class Conect4', () => { 

        it('Existe una clase llamada GameConect4', () =>{
            expect(GameConect).not.to.be.null;
        });

        it('Existe un metodo para comprobar que haya encontrado el jugador ganado', () =>{
            expect(GameConect.gameWinner(4, 5)).not.to.be.null;
        });

        it('Comprobar que existe el proceso, y entra el juego', () =>{
            GameConect.gamePlayConect4();
        });

    });


    describe('Tests for the game process', () =>{

        const player1 = new Player("Juan");
        const player2 = new Player("Pepe");

        const grid = new Grid();

        let regillaOrinal:number[][] = [    [0, 0, 0, 0, 0, 0, 0],
                                            [0, 0, 0, 0, 0, 0, 0],
                                            [0, 0, 0, 0, 0, 0, 0],
                                            [0, 0, 0, 0, 0, 0, 0],
                                            [0, 0, 0, 0, 0, 0, 0],
                                            [0, 0, 0, 0, 0, 0, 0],
                                        ];

        it('0. Regilla está vacía', () =>{
            expect(grid.getGrid()).to.eqls(regillaOrinal);
        });

        let regillaRonda1:number[][] = [    [0, 0, 0, 0, 0, 0, 0],
                                            [0, 0, 0, 0, 0, 0, 0],
                                            [0, 0, 0, 0, 0, 0, 0],
                                            [0, 0, 0, 0, 0, 0, 0],
                                            [0, 0, 0, 0, 0, 0, 0],
                                            [0, 1, 0, 0, 0, 0, 0],
                                        ];
        
        it('1. Jugador1 inserta ficha(1) en la regilla en la columna 1', () =>{
            // Comproba que si es valido la columna
            expect(grid.isValid(1)).to.eq(true);

            // Ponser en la regilla la ficha y devuelve la posicion de fila
            expect(grid.setPosAndGetI(1)).to.eq(5); // posicion [5][1]
        });


        it('Mostrar regilla. Despues de insertar un jugador', () =>{
            expect(grid.getGrid()).to.eqls(regillaRonda1);
        });


        it('2. Jugador2 inserta ficha(2) en la regilla en la columna 2', () =>{
            expect(grid.isValid(2)).to.eq(true);
            expect(grid.setPosAndGetI(2)).to.eq(5); //posicion [5][2]
        });


        it('3. Jugador1 inserta ficha(1) en la regilla en la columna 1', () =>{
            expect(grid.isValid(2)).to.eq(true);
            expect(grid.setPosAndGetI(2)).to.eq(4); 
        });

        
        it('4. Jugador2 inserta ficha(2) en la regilla en la columna 3', () =>{
            expect(grid.isValid(3)).to.eq(true);
            expect(grid.setPosAndGetI(3)).to.eq(5); 
        });


        it('5. Jugador1 inserta ficha(1) en la regilla en la columna 3', () =>{
            expect(grid.isValid(3)).to.eq(true);
            expect(grid.setPosAndGetI(3)).to.eq(4); 
        });


        it('6. Jugador2 inserta ficha(2) en la regilla en la columna 4', () =>{
            expect(grid.isValid(4)).to.eq(true);
            expect(grid.setPosAndGetI(4)).to.eq(5); 
        });

        it('7. Jugador1 inserta ficha(1) en la regilla en la columna 3', () =>{
            expect(grid.isValid(3)).to.eq(true);
            expect(grid.setPosAndGetI(3)).to.eq(3); 
        });

        it('8. Jugador2 inserta ficha(2) en la regilla en la columna 4', () =>{
            expect(grid.isValid(4)).to.eq(true);
            expect(grid.setPosAndGetI(4)).to.eq(4); 
        });

        it('9. Jugador1 inserta ficha(2) en la regilla en la columna 4', () =>{
            expect(grid.isValid(4)).to.eq(true);
            expect(grid.setPosAndGetI(4)).to.eq(3); 
        });

        it('10. Jugador2 inserta ficha(2) en la regilla en la columna 5', () =>{
            expect(grid.isValid(5)).to.eq(true);
            expect(grid.setPosAndGetI(5)).to.eq(5); 
        });

        it('11. Jugador1 inserta ficha(2) en la regilla en la columna 4', () =>{
            expect(grid.isValid(4)).to.eq(true);
            expect(grid.setPosAndGetI(4)).to.eq(2); 
        });

        it('12. Invalido', () =>{
            expect(grid.isValid(8)).to.eq(false);
        });

        let regillaRonda11:number[][] = [   [0, 0, 0, 0, 0, 0, 0],
                                            [0, 0, 0, 0, 0, 0, 0],
                                            [0, 0, 0, 0, 1, 0, 0],
                                            [0, 0, 0, 1, 1, 0, 0],
                                            [0, 0, 1, 1, 2, 0, 0],
                                            [0, 1, 2, 2, 2, 2, 0],
                                        ];

        it('Mostrar regilla para comprobar resultado', () =>{
            expect(grid.getGrid()).to.eqls(regillaRonda11);
        });


        
        let gridToCheck:number[][] = [  [0, 0, 0, 0, 2, 0, 0],
                                        [0, 0, 0, 0, 1, 0, 0],
                                        [0, 0, 0, 0, 1, 0, 0],
                                        [0, 0, 0, 1, 1, 0, 0],
                                        [0, 0, 1, 1, 2, 0, 0],
                                        [0, 1, 2, 2, 2, 2, 0],
                                    ];
        it('set regilla', () =>{
            grid.setGrid(gridToCheck);
            expect(grid.isValid(4)).to.eq(false);
        });
        const GameConect1 = new GameConect4(player1, player2, grid);
        it('set regilla', () =>{
            expect(GameConect1.gameWinner(2,4)).to.eq(true);
        });


        let gridToCheckH:number[][] = [ [0, 0, 0, 0, 2, 0, 0],
                                        [0, 0, 0, 0, 1, 0, 0],
                                        [0, 0, 0, 0, 2, 0, 0],
                                        [0, 1, 1, 1, 1, 0, 0],
                                        [0, 2, 1, 1, 2, 0, 0],
                                        [0, 1, 2, 2, 2, 2, 0],
                                    ];
        it('set regilla', () =>{
            grid.setGrid(gridToCheckH);
        });

        const GameConect2 = new GameConect4(player1, player2, grid);
        it('set regilla', () =>{
            expect(GameConect2.gameWinner(3,1)).to.eq(true);
        });


        let gridToCheckV:number[][] = [ [0, 0, 0, 0, 2, 0, 0],
                                        [0, 0, 0, 0, 1, 0, 0],
                                        [0, 1, 0, 0, 2, 0, 0],
                                        [0, 1, 2, 1, 1, 0, 0],
                                        [0, 1, 1, 1, 2, 0, 0],
                                        [0, 1, 2, 2, 2, 2, 0],
                                    ];
        it('set regilla', () =>{
            grid.setGrid(gridToCheckV);
        });

        const GameConect3 = new GameConect4(player1, player2, grid);
        it('set regilla', () =>{
            expect(GameConect3.gameWinner(2,1)).to.eq(true);
        });
        
        let gridToCheckD:number[][] = [ [0, 0, 0, 0, 2, 0, 0],
                                        [0, 0, 0, 0, 1, 0, 0],
                                        [0, 1, 0, 0, 2, 0, 0],
                                        [0, 1, 1, 1, 1, 0, 0],
                                        [0, 2, 2, 1, 2, 0, 0],
                                        [0, 1, 2, 2, 1, 2, 0],
                                    ];

        it('set regilla', () =>{
            grid.setGrid(gridToCheckD);
        });

        const GameConectD = new GameConect4(player1, player2, grid);
        it('set regilla', () =>{
            expect(GameConectD.gameWinner(3,2)).to.eq(true);
        });

    });

});

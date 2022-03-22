export class Player {
    private name:string;
    private numFichas:number = 21;

    constructor(name:string) {
        this.name = name;
    }

    /**
     * Devuelve el nombre de cada jugador_
     */
    getName() { return this.name; }

    /**
     * _Devuelve el numero de fichas de cada jugador_
     */
    getNumFichas() { return this.numFichas; }

    /**
     * _Insertar el numero de fichas que queda cada jugador_
     * @param numFichas numero de ficha que queda cada jugador
     */
    setNumFichas(numFichas:number) { this.numFichas = numFichas}

}
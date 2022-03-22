export class Grid {

    private rows:number = 6;
    private cols:number = 7;
    private grid:number[][] = [];
    private saveLastPos = Array(7);
    private countRound:number = 0;
    private ValueI:number = 0;

    /**
     * Constructor de la clase Grid
     */
    constructor() {
        for(let i: number = 0; i < this.rows; i++) {
            this.grid[i] = [];
            for(let j: number = 0; j < this.cols; j++) {
                this.grid[i].push(0);
            }
        }
    }

    public getCols() { return this.cols; }
    public getRows() { return this.rows; }
    public getValueI() { return this.ValueI; }
    public getGrid() { return this.grid; }
    public setGrid(regilla:number[][]) { this.grid = regilla; }

    public showGrid() {
        console.log(`>> Mostrar Regilla`)
        for(var i: number = 0; i < this.rows; i++) {
            console.log(`${this.grid[i]}`);
        }
    }

    /**
     * _Metodo que comproba si la columna es valida para insertar_
     * @param colums la columna que tiene que verificar
     */
    public isValid(colums:number) :boolean {
        if(colums < this.getCols()) {
            if(this.grid[0][colums] == 0) {
                return true;
            }else{
                console.log(`>> Error, ${colums} está completa`);
                return false;
            }
        }else{
            console.log(`>> No es una columna valida, está fuera del rango`);
            return false;
        }
    }

    /**
     * _Metodo que inserta la posicion_
     * @param colums columna para comprobar
     * @returns devulve la posicion i de la columna correpondiente
     */
    public setPosAndGetI(colums:number):number{
        this.countRound++;
            
        //Obtener la i posicion que inserta el jugador
        const getLastPosI = this.getLastPositionOfColumns(colums);

        this.ValueI = getLastPosI;
        // impar toca el jugador 1 - par toca el jugador 2
            if(this.countRound % 2 != 0) {
                this.grid[getLastPosI][colums] = 1;
            }else{
                this.grid[getLastPosI][colums] = 2;
            }

        //Actualizar la ultima nueva posicion
        this.saveLastPos[colums] = getLastPosI;
        // console.log(`la ultima = ${getLastPosI}`);
        return this.ValueI;
    }

    /**
     * _Metodo que busca la ultima posicion i de la columna que corresponte_
     * @param colums columna que verifica
     */
    private getLastPositionOfColumns(colums:number):number {
        if(this.saveLastPos[colums] == null) {
            return 5;
        }else{
            return this.saveLastPos[colums]-1;
        }
    }
}
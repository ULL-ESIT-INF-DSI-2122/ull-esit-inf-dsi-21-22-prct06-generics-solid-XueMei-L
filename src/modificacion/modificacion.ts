/**
 * Class Hexadecimal to represents a value in hexadecimal.
 */
export class Hexadecimal {

    private numeroEntero:number;

    /**
     * _Constructor_
     * @param numEntero para convetir en un valor hexadecimal
     */
    constructor(numEntero:number) {
        this.numeroEntero = numEntero;
    }

    /**
     * _Method that return own number_
     * @returns own number.
     */
    public valueOf() { return this.numeroEntero; }

    
    /**
     * _Method that return a number to hexadecimal in string_
     */
    public toString():string {
        let hex = this.numeroEntero.toString(16);
        if (hex.length < 2) {
            hex = "0x" + hex;
        }else{
            hex = "0x" + hex;
        }
        return hex;
    }

    /**
     * _Method that return the add of two numbs_
     * @param numToSum return a object hexadecimal
     * @returns 
     */
    public add(numToSum:Hexadecimal):Hexadecimal {
        let secNum = numToSum.valueOf();
        return new Hexadecimal(this.numeroEntero + secNum);
    }

    /**
     * _Method that return the substract of tw numb_
     * @param numToSum return a object hexadecimal
     * @returns 
     */
    public sub(numToSum:Hexadecimal):Hexadecimal {
        let secNum = numToSum.valueOf();
        return new Hexadecimal(this.numeroEntero - secNum);
    }

    /**
     * _Method that to convert string to a numb_
     * @param stringToConvert return a numb
     * @returns 
     */
    public parse(stringToConvert:string):number {

        stringToConvert = stringToConvert.substring(2)
        let result:number = parseInt(stringToConvert, 16);
        return result;
    }
}

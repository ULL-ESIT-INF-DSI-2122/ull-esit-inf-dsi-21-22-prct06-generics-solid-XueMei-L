import { Arithmeticable } from './Arithmeticable'

export abstract class ArithmeticableCollection<T extends Arithmeticable<T>> {
    
    /**
     * _Constructor_
     * @param collection collection of type T
     */
    constructor(protected collection:T[]) {}

    /**
     * Add a elemento to collection
     */
    addArithmeticable(element:T):void { this.collection.push(element); }

    getNumberOfArithmeticables():number { return this.collection.length; }
    
    getArithmeticable(index:number):T { return this.collection[index];}
}
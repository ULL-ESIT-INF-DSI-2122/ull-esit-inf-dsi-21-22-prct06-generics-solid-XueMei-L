import { Arithmeticable } from "./Arithmeticable";

/**
 * Type Complex
 */
export type complex = {
    realPart:number;
    imaginaryPart:number;
}

export class Complex implements Arithmeticable<complex> {
    
    constructor(private complexCollection:complex[]) { }

    addArithmeticable(elemento:complex):void {
        this.complexCollection.push(elemento);
    }

    getNumberOfArithmeticables():number{
        return this.complexCollection.length;
    }

    getArithmeticable(): complex[] {
        return this.complexCollection;
    }

    add(elemento:complex):complex[] {
        let newComplex:complex[] = [];


        for(let i:number = 0; i < this.complexCollection.length; i ++) {
            let ope: complex = { realPart:0, imaginaryPart:0}
            ope.realPart = this.complexCollection[i].realPart + elemento.realPart;
            ope.imaginaryPart = this.complexCollection[i].imaginaryPart + elemento.imaginaryPart;
            console.log(`complex = ${ope.realPart} + ${ope.imaginaryPart}i`);
            newComplex[i] = ope;
        }

        return newComplex;
    }
    


    subratract(elemento:complex):complex[] {
        let newComplex:complex[] = [];
        let ope:complex;
        for(let i:number = 0; i < this.complexCollection.length; i ++) {
            let ope: complex = { realPart:0, imaginaryPart:0}
            ope.realPart = this.complexCollection[i].realPart - elemento.realPart;
            ope.imaginaryPart = this.complexCollection[i].imaginaryPart - elemento.imaginaryPart;
            console.log(`complex = ${ope.realPart} - ${ope.imaginaryPart}i`);
            newComplex.push(ope);
        }
        return newComplex;
    }

    
    multiply(elemento:complex):complex[] {
        let newComplex:complex[] = [];
        let ope:complex;

        // for(let i:number = 0; i < this.complexCollection.length; i ++) {
        //     let ope: complex = { realPart:0, imaginaryPart:0}
        //     ope.realPart = this.complexCollection[i].realPart - elemento.realPart;
        //     ope.imaginaryPart = this.complexCollection[i].imaginaryPart - elemento.imaginaryPart;
        //     console.log(`complex = ${ope.realPart} - ${ope.imaginaryPart}i`);
        //     newComplex.push(ope);
        // }

        return newComplex;

    }

    divide(elemento:complex):complex[] {
        let newComplex:complex[] = [];
        return newComplex;

    }
}

let c2:complex = {realPart: 3, imaginaryPart: 3};
let c3:complex = {realPart: 5, imaginaryPart: 7};

let complexcolletion = new Complex([c2, c3]);
complexcolletion.add(c2);
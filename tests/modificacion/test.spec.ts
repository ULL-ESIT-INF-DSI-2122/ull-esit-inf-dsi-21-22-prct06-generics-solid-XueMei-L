import 'mocha';
import { expect } from 'chai';
import { Hexadecimal } from "../../src/modificacion/modificacion";


describe('Tests for the class Hexadecimal', ()=>{
    
    // Objetos para la clase Hexadecimal para realizar transformacion del numero
    const objHexadecimal = new Hexadecimal(38);

    // Objetos para la clase Hexadecimal para realizar la suma y la resta
    const myFirstHexValue = new Hexadecimal(23)
    const mySecondHexValue = new Hexadecimal(15)

    // Objectos para la clase Hexadecimal to number    
    let HexadecimalS = new Hexadecimal(20);


    describe('Tests for the class Hexadecimal', () => {

        it('Existe una clase Hexadecimal', () => {
            expect(objHexadecimal).not.to.be.null;
        });
        
        it('Existe un metodo llamado .toString()', () => {
            expect(objHexadecimal.toString()).not.to.be.null;
        });

        it('Existe un metodo llamado .toString()', () => {
            expect(objHexadecimal.valueOf()).not.to.be.null;
        });

        it('Existe un metodo llamado .add()', () => {
            expect(objHexadecimal.add(myFirstHexValue)).not.to.be.null;
        });
        
        it('Existe un metodo llamado .sub()', () => {
            expect(objHexadecimal.sub(mySecondHexValue)).not.to.be.null;
        });

        it('Existe un metodo llamado .parse()', () => {
            expect(objHexadecimal.parse("0x26")).not.to.be.null;
        });
        
        it('objHexadecimal.toString() retorna 0x26', () => {
            expect(objHexadecimal.toString()).to.eq("0x26");
        });

        it('23 + 15 = 38, usando la funcion valueOf() = 38', () => {
            expect((myFirstHexValue.add(mySecondHexValue).valueOf())).to.eq(38);
        });
        
        it('15 - 23 = -8, usando la funcion valueOf() = -8', () => {
            expect((myFirstHexValue.sub(mySecondHexValue).valueOf())).to.eq(8);
        });

        it('23 + 15 = 38, usando la funcion toString() = 0x26', () => {
            expect((myFirstHexValue.add(mySecondHexValue).toString())).to.eq("0x26");
        });

        it('15 - 23 = -8, usando la funcion toString() = 0x8', () => {
            expect((myFirstHexValue.sub(mySecondHexValue).toString())).to.eq("0x8");
        });

        it('usar la funcion .parse("0x26") =  38', () => {
            expect(HexadecimalS.parse("0x26")).to.eq(38);
        });

    });
        
});
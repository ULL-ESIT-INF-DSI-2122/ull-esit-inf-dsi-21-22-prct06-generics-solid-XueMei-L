import 'mocha';
import { expect } from 'chai';
import { CaesarCipher } from "../../src/ejercicio-3/ejercicio-3";


describe('Tests for Ceaser Cipher', ()=>{

    describe('Tests for the class CeaserCipher', () => {

        let objCC = new CaesarCipher();

        it('Existe una clase CeaserCipher', () => {
            expect(CaesarCipher).not.to.be.null;
        });

        it('Existe un metodo cipher()', () => {
            expect(objCC.cipher("HOLAESTOESUNAPRUEBA","CLAVE")).to.eq("JKLVGCTUIUENVTTEEWE");
        });

        it('Existe un metodo decipher()', () => {
            expect(objCC.cipher("JKLVGCTUIUENVTTEEWE","CLAVE")).to.eq("HOLAESTOESUNAPRUEBA");
        });
    });
});

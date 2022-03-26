import 'mocha';
import { expect } from 'chai';
import { CaesarCipher } from "../../src/ejercicio-3/CaesarCipher";


describe('Tests for Ceaser Cipher', ()=>{

    describe('Tests for the class CeaserCipher', () => {

        let objCC = new CaesarCipher("ABCDEFGHIJKLMNÑOPQRSTUVWXYZ");

        it('There is a class called CeaserCipher', () => {
            expect(CaesarCipher).not.to.be.null;
        });

        it('There is a method called cipher()', () => {
            expect(objCC.cipher("HOLAESTOESUNAPRUEBA","CLAVE")).not.to.be.null;
        });

        it('There is a method called decipher()', () => {
            expect(objCC.decipher("KAMWHEULJVGÑWUUGFXF","CLAVE")).not.to.be.null;
        });

        it('Cipher the message HOLAESTOESUNAPRUEBA using key "CLAVE" = KAMWHEULJVGÑWUUGFXF', () => {
            expect(objCC.cipher("HOLAESTOESUNAPRUEBA","CLAVE")).to.eq("KAMWHEULJVGÑWUUGFXF");
        });

        it('Decipher the message KAMWHEULJVGÑWUUGFXF using key "CLAVE" = HOLAESTOESUNAPRUEBA', () => {
            expect(objCC.decipher("KAMWHEULJVGÑWUUGFXF","CLAVE")).to.eq("HOLAESTOESUNAPRUEBA");
        });
        
    });
});

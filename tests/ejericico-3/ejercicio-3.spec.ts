import 'mocha';
import { expect } from 'chai';
import { CaesarCipher } from "../../src/ejercicio-3/CaesarCipher";


describe('Tests for Ceaser Cipher', ()=>{

    describe('Tests for the class CeaserCipher', () => {

        let objCC = new CaesarCipher("ABCDEFGHIJKLMNÑOPQRSTUVWXYZ");

        it('Existe una clase CeaserCipher', () => {
            expect(CaesarCipher).not.to.be.null;
        });

        it('Existe un metodo cipher()', () => {
            expect(objCC.cipher("HOLAESTOESUNAPRUEBA","CLAVE")).not.to.be.null;
        });

        it('Existe un metodo decipher()', () => {
            expect(objCC.decipher("KAMWHEULJVGÑWUUGFXF","CLAVE")).not.to.be.null;
        });

        it('Cifrar el mensaje HOLAESTOESUNAPRUEBA usando "CLAVE" = KAMWHEULJVGÑWUUGFXF', () => {
            expect(objCC.cipher("HOLAESTOESUNAPRUEBA","CLAVE")).to.eq("KAMWHEULJVGÑWUUGFXF");
        });

        it('Descifrar el mensaje HOLAESTOESUNAPRUEBA usando "CLAVE" = KAMWHEULJVGÑWUUGFXF', () => {
            expect(objCC.decipher("KAMWHEULJVGÑWUUGFXF","CLAVE")).to.eq("HOLAESTOESUNAPRUEBA");
        });
        
    });
});

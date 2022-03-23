import 'mocha';
import { expect } from 'chai';
import { ceaserCipher } from "../../src/ejercicio-3/ceaserCipher";


describe('Tests for Ceaser Cipher', ()=>{

    describe('Tests for the class CeaserCipher', () => {

        it('Existe una clase CeaserCipher', () => {
            expect(ceaserCipher).not.to.be.null;
        });
    });
});

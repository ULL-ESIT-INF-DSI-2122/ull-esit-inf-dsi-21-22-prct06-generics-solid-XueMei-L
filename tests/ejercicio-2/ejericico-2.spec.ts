import 'mocha';
import { expect } from 'chai';
import { Streamable } from '../ejercicio-2/Streamable';

describe('Tests for ejercicio-2 Dsifix', () =>{
    
    describe('Tests for interface Streamble', () => {

        it('Existe una interfaz Streamable', () => {
            expect(new Streamable()).not.to.be.null;
        });
    });
});

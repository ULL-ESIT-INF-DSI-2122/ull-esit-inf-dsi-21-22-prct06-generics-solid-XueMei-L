// import 'mocha';
// import { expect } from 'chai';
// import { complex, Complex } from "../../src/modificacion/Complex";



// describe('Tests for the modification', () => {

//     let c1:complex = {realPart: 2, imaginaryPart: 4};
//     let c2:complex = {realPart: 3, imaginaryPart: 3};

//     let c3:complex = {realPart: 1, imaginaryPart: 1};

//     let c4:complex = {realPart: 3, imaginaryPart: 5};
//     let c5:complex = {realPart: 4, imaginaryPart: 6};

//     let complexcolletion = new Complex([c1, c2]);
//     let newcomplexcolletion = new Complex([c4, c5]);

//     it('Existe una clase Complex', () => {
//         expect(Complex).not.to.be.null;
//     });

//     it('Existe objetos instanciados de la clase ', () => {
//         expect(complexcolletion.getNumberOfArithmeticables()).to.eq(2);
//     });

//     it('Existe objetos instanciados de la clase ', () => {
//         expect(complexcolletion.add(c3)).to.deep.equal(newcomplexcolletion);
//     });

// });
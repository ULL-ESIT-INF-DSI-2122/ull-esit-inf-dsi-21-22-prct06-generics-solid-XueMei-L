import 'mocha';
import { expect } from 'chai';
import { Pokedex } from '../../src/ejercicio-1/pokedex';
import { Fighter } from '../../src/ejercicio-1/fighter';
import { Pokemon } from '../../src/ejercicio-1/pokemon';


// import { Combat } from '../../src/ejercicio-1/combat';





describe('Tests for POKEMON GAME', () => {
    const pikachu:Pokemon = new Pokemon("pikachu", 50, 45, "electric", [90, 55, 110, 60], "pikapi");
    const bulbasaur:Pokemon = new Pokemon("bulbasaur", 50, 45, "grass", [49, 49, 45, 45], "bulba, bulb, saur");
    const charizard:Pokemon = new Pokemon("charizard", 60, 55, "fire", [84, 78, 100, 78], "fuego!!");
    const blastoise:Pokemon = new Pokemon("blastoise", 60, 55, "water", [83, 100, 78, 89], "blasotoise");
    
    let PokemonCollletion:Pokedex = new Pokedex([]);
    describe('Tests for POKEMON GAME', () => {
        it('Tests for Pokemon Class, existen instancias de la clase Pokemon', () =>{
            expect(pikachu).is.not.null;
            expect(bulbasaur).is.not.null;
            expect(charizard).is.not.null;
            expect(blastoise).is.not.null;
        });

        it('Tests for Pokedex Class, añadir pokemons a la collection', () =>{
            PokemonCollletion.addFighter(pikachu);
            expect(PokemonCollletion.getFightersNumber()).to.eq(1);
            PokemonCollletion.addFighter(bulbasaur);
            PokemonCollletion.addFighter(charizard);
            PokemonCollletion.addFighter(blastoise);
            expect(PokemonCollletion.getFightersNumber()).to.eq(4);
        });

        it('Tests for ', () =>{
        });

        it('Tests for Pokedex Class', () =>{
            PokemonCollletion.addFighter(pikachu);
            expect(PokemonCollletion.getFightersNumber()).to.eq(1);
        });
        
    });

});
//     const pikachu:Pokedex = new Pokedex("pikachu", 50, 45, "electric", [90, 55, 110, 60]);
//     const pikachu2:Pokedex = new Pokedex("pikachu", 50, 45, "electric", [90, 55, 110, 60]);
//     const bulbasaur:Pokedex = new Pokedex("bulbasaur", 50, 45, "grass", [49, 49, 45, 45]);
//     const charizard:Pokedex = new Pokedex("charizard", 60, 55, "fire", [84, 78, 100, 78]);
//     const blastoise:Pokedex = new Pokedex("blastoise", 60, 55, "water", [83, 100, 78, 89]);
    

//     let combat:Combat = new Combat(pikachu, charizard);
//     let combat2:Combat = new Combat(pikachu, pikachu2);
//     let combat3:Combat = new Combat(charizard, bulbasaur);
//     let combat4:Combat = new Combat(charizard, blastoise);

//     describe('Tests for the class Pokedex', () => {

//         it('Existe una clase Pokedex', () => {
//             expect(Pokedex).not.to.be.null;
//         });

//         it('Existe objetos instanciados de la clase Pokedex', () => {
//             expect(pikachu).to.not.be.null;
//             expect(charizard).to.not.be.null;
//         })

//         it('Existe la funcion showPokemon()', () => {
//             expect(pikachu.showPokemon()).to.not.be.null.to.eq(true);
//             expect(charizard.showPokemon()).to.not.be.null.to.eq(true);
//         });

//         describe('Tests para el objeto pikachu (class Pokedex)', () => {
            
//             it('Nombre = pikachu', () => {
//                 expect(pikachu.getName()).to.be.equal("pikachu");
//             });

//             it('peso = 50', () => {
//                 expect(pikachu.getWeight()).to.be.eq(50);
//             });

//             it('altura = 45', () => {
//                 expect(pikachu.getHeight()).to.be.eq(45);
//             });

//             it('tipo = electric', () => {
//                 expect(pikachu.getType()).to.be.equal("electric");
//             });

//             it('ataque = 90', () => {
//                 expect(pikachu.getAttack()).to.be.eq(90);
//             });

//             it('defensa = 55', () => {
//                 expect(pikachu.getDefense()).to.be.eq(55);
//             });

//             it('velocidad = 110', () => {
//                 expect(pikachu.getSpeed()).to.be.eq(110);
//             });

//             it('HP = 60', () => {
//                 expect(pikachu.getHP()).to.be.eq(60);
//             });
//         });

//         describe('Tests para el objeto charizard (class Pokedex)', () => {
            
//             it('Nombre = charizard', () => {
//                 expect(charizard.getName()).to.be.equal("charizard");
//             });

//             it('peso = 60', () => {
//                 expect(charizard.getWeight()).to.be.eq(60);
//             });

//             it('altura = 55', () => {
//                 expect(charizard.getHeight()).to.be.eq(55);
//             });

//             it('tipo = fire', () => {
//                 expect(charizard.getType()).to.be.equal("fire");
//             });

//             it('ataque = 84', () => {
//                 expect(charizard.getAttack()).to.be.eq(84);
//             });

//             it('defensa = 78', () => {
//                 expect(charizard.getDefense()).to.be.eq(78);
//             });

//             it('velocidad = 100', () => {
//                 expect(charizard.getSpeed()).to.be.eq(100);
//             });

//             it('HP = 78', () => {
//                 expect(charizard.getHP()).to.be.eq(78);
//             });
//         });

//         describe('Tests for the class Combat', () => {
        
//             it('Existe una clase combat', () => {
//                 expect(Combat).not.to.be.null;
//             });

//             it('Combate entre pikachu y charizard, gana pikachu', () => {
//                 expect(combat.start()).to.be.equal("pikachu");
//             });

//             it('Combate entre pikachu y pikachu2, gana pikachu', () => {
//                 expect(combat2.start()).to.be.equal("pikachu");
//             });

//             it('Combate entre charizard y bulbasaur, gana bulbasaur', () => {
//                 expect(combat3.start()).to.be.equal("bulbasaur");
//             });

//             it('Combate entre charizard y blastoise, gana blastoise', () => {
//                 expect(combat4.start()).to.be.equal("blastoise");
//             });
//         });
//     });
// });
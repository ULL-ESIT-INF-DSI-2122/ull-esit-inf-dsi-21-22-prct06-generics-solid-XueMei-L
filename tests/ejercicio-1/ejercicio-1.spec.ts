import 'mocha';
import { expect } from 'chai';
import { Pokedex } from '../../src/ejercicio-1/pokedex';
import { Pokemon } from '../../src/ejercicio-1/pokemon';
import { Marvel } from '../../src/ejercicio-1/marvel';
import { DcComics } from '../../src/ejercicio-1/dccomics';
import { StarWars } from '../../src/ejercicio-1/starwars';
import { DragonBall } from '../../src/ejercicio-1/dragonball';
// import { Combat } from '../../src/ejercicio-1/combat';



describe('Tests for POKEMON GAME', () => {
    //Pokemon
    const pikachu:Pokemon = new Pokemon("pikachu", 50, 45, "electric", [90, 55, 110], "Pikapi.");
    const bulbasaur:Pokemon = new Pokemon("bulbasaur", 50, 45, "grass", [49, 49, 65], "Bulba, bulb, saur.");
    const charizard:Pokemon = new Pokemon("charizard", 60, 55, "fire", [84, 78, 100], "Fire, fire!!");
    const blastoise:Pokemon = new Pokemon("blastoise", 60, 55, "water", [83, 100, 78], "Blasotoise.");
    
    //Marvel
    const captainAmerica:Marvel = new Marvel("captain america", 188, 109, "superhero", [150, 70, 90], "Avegers Assemble.");
    const ironMan:Marvel = new Marvel("iron man", 198, 193, "techhero", [200, 70, 120], "I am Iron Man.");
    const hulk:Marvel = new Marvel("hulk", 76, 300, "mutanthero", [300, 35, 120], "I get angry, you will not like me.");

    //DC comcis
    const wonderWoman:DcComics = new DcComics("wonder woman", 183, 75, "superhero", [120, 80, 70], "It is never been a fair Fight.");
    const batMan:DcComics = new DcComics("bat man", 188, 95, "superhero", [130, 75, 90], "I am Vengeance! I am the Night! I am Bat Man.");
    const kingShark:DcComics = new DcComics("king shark", 200, 120, "mutanthero", [170, 60, 150], "King Shark is a shark.");

    //Start wars
    const darthVader:StarWars = new StarWars("darth varder", 203, 120, "blackwarrior", [135, 90, 60], "I am your father.");
    const lukeSkywalker:StarWars = new StarWars("luke skywalker", 172, 73, "human", [100, 70, 60], "Your'll find. I'm full of suprises.");
    const yoda:StarWars = new StarWars("yoda", 66, 47, "alienware", [90, 80, 110], "A Jedi craves not these things");

    //DragonBall
    const sonGoKu:DragonBall = new DragonBall("son go ku", 175, 80, "supersaiyan", [], "kame hame ka!");
    const piccolo:DragonBall = new DragonBall("piccolo", 226, 150, "", [] , "");


    let PokemonCollletion:Pokedex = new Pokedex([]);
    let MarvelColletion:Pokedex = new Pokedex([captainAmerica, ironMan, hulk]);
    let DcComicsColletion:Pokedex = new Pokedex([wonderWoman, batMan, kingShark]);
    // let DragonBallColletion:Pokedex = new Pokedex([anakinSkywalker, lukeSkywalker]);

    describe('Tests for POKEMON GAME', () => {

    // Tests for class ---------------------------------------------------------------------

        it('Tests for Pokemon Class, existen instancias de la clase Pokemon', () =>{
            expect(pikachu).is.not.null;
            expect(bulbasaur).is.not.null;
            expect(charizard).is.not.null;
            expect(blastoise).is.not.null;
        });

        it('Tests for Pokedex Class, add pokemons to the collection', () =>{
            PokemonCollletion.addFighter(pikachu);
            expect(PokemonCollletion.getFightersNumber()).to.eq(1);
            PokemonCollletion.addFighter(bulbasaur);
            PokemonCollletion.addFighter(charizard);
            PokemonCollletion.addFighter(blastoise);
            expect(PokemonCollletion.getFightersNumber()).to.eq(4);
        });

        it('Tests for Marvel Class, Marvel Colletion', () =>{
            expect(MarvelColletion.getFighter()).to.eq(3);
            expect(MarvelColletion.getFighter()).to.deep.equal([captainAmerica, ironMan, hulk]);
        });

        it('Tests for Dc comics class, Dc comics Colletion', () =>{
            expect(DcComicsColletion.getFightersNumber()).to.eq(1);
        });
        
    });

});

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
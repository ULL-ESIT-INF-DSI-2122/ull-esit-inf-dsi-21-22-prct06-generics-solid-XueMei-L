import 'mocha';
import { expect } from 'chai';
import { Pokedex } from '../../src/ejercicio-1/pokedex';
import { Pokemon } from '../../src/ejercicio-1/pokemon';
import { Marvel } from '../../src/ejercicio-1/marvel';
import { DcComics } from '../../src/ejercicio-1/dccomics';
import { StarWars } from '../../src/ejercicio-1/starwars';
import { DragonBall } from '../../src/ejercicio-1/dragonball';
import { showInfoFighter } from '../../src/ejercicio-1/print'
import { Combat } from '../../src/ejercicio-1/combat';



describe('Tests for POKEMON GAME', () => {
    //Pokemon
    const pikachu:Pokemon = new Pokemon("pikachu", 60, 50, "electric", 45, 80, 50, "Pikapi.");
    const bulbasaur:Pokemon = new Pokemon("bulbasaur", 50, 45, "grass", 49, 49, 65, "Bulba, bulb, saur.");
    const charizard:Pokemon = new Pokemon("charizard", 60, 55, "fire", 84, 78, 100, "Fire, fire!!");
    const blastoise:Pokemon = new Pokemon("blastoise", 60, 55, "water", 83, 100, 78, "Blasotoise.");
    
    //Marvel
    const captainAmerica:Marvel = new Marvel("captain america", 188, 109, "superhero", 150, 70, 90, "Avegers Assemble.");
    const ironMan:Marvel = new Marvel("iron man", 198, 193, "techhero", 200, 70, 120,  "I am Iron Man.");
    const hulk:Marvel = new Marvel("hulk", 76, 300, "mutanthero", 300, 35, 120,  "I get angry, you will not like me.");

    //DC comcis
    const wonderWoman:DcComics = new DcComics("wonder woman", 183, 75, "superhero", 120, 80, 70,  "It is never been a fair Fight.");
    const batMan:DcComics = new DcComics("bat man", 188, 95, "superhero", 130, 75, 90,  "I am Vengeance! I am the Night! I am Bat Man.");
    const kingShark:DcComics = new DcComics("king shark", 200, 120, "mutanthero", 170, 60, 150,  "King Shark is a shark.");

    //Star wars
    const darthVader:StarWars = new StarWars("darth varder", 203, 120, "blackwarrior", 135, 90, 60,  "I am your father.");
    const lukeSkywalker:StarWars = new StarWars("luke skywalker", 172, 73, "human", 100, 70, 60,  "Your'll find. I'm full of suprises.");
    const yoda:StarWars = new StarWars("yoda", 66, 47, "aliens", 90, 80, 110,  "A Jedi craves not these things");

    //DragonBall
    const sonGoKu:DragonBall = new DragonBall("son go ku", 175, 80, "supersaiyan", 100, 102, 76,  "kame hame ka!");
    const piccolo:DragonBall = new DragonBall("piccolo", 226, 150, "demon", 150, 55, 84, "I will be an even stronger fighter than i already am.");


    let PokemonCollletion:Pokedex = new Pokedex([]);
    let MarvelColletion:Pokedex = new Pokedex([captainAmerica, ironMan, hulk]);
    let DcComicsColletion:Pokedex = new Pokedex([wonderWoman, batMan, kingShark]);
    let StarWarsColletion:Pokedex = new Pokedex([darthVader, lukeSkywalker, yoda]);
    let DragonBallColletion:Pokedex = new Pokedex([sonGoKu, piccolo]);

    let finallyColletion:Pokedex = new Pokedex([pikachu, bulbasaur, charizard, blastoise, captainAmerica,ironMan, hulk, 
    wonderWoman, batMan, kingShark, darthVader, lukeSkywalker, yoda, sonGoKu, piccolo]);

    let showColletion = new showInfoFighter(finallyColletion);

    describe('Tests for POKEMON GAME', () => {

        // Tests for class ---------------------------------------------------------------------
        
        it('Tests for Pokemon Class, existen instancias de la clase Pokemon', () =>{
            expect(pikachu).is.not.null;
        });
        
        it('Tests for Pokedex Class, add pokemons to the collection', () =>{
            PokemonCollletion.addFighter(pikachu);
            expect(PokemonCollletion.getFightersNumber()).to.eq(1);
            PokemonCollletion.addFighter(bulbasaur);
            PokemonCollletion.addFighter(charizard);
            expect(PokemonCollletion.getFightersNumber()).to.eq(3);
            expect(pikachu.getUniverse())
        });
        
        it('Tests for Marvel Class, Marvel Colletion', () =>{
            expect(MarvelColletion.getFightersNumber()).to.eq(3);
            expect(MarvelColletion.getFighter()).to.deep.equal([captainAmerica, ironMan, hulk]);
        });
        
        it('Tests for Dc comics class, Dc comics Colletion', () =>{
            expect(DcComicsColletion.getFightersNumber()).to.eq(3);
            expect(DcComicsColletion.getFighter()).to.deep.equal([wonderWoman, batMan, kingShark]);
        });
        
        it('Tests for Star Wars class, Star Wars Colletion', () =>{
            expect(StarWarsColletion.getFightersNumber()).to.eq(3);
            expect(StarWarsColletion.getFighter()).to.deep.equal([darthVader, lukeSkywalker, yoda]);
        });
        
        it('Tests for Dragon Ball class, Dragon Ball Colletion', () =>{
            expect(DragonBallColletion.getFightersNumber()).to.eq(2);
            expect(DragonBallColletion.getFighter()).to.deep.equal([sonGoKu, piccolo]);
        });

        it('Tests for Pokedex Class, find bat man in Marvel Colletion = true', () =>{
            expect(DcComicsColletion.findFighter(batMan)).to.eq(true);
        });

        it('Tests for Pokedex Class, find bat man in Marvel Colletion = false', () =>{
            expect(PokemonCollletion.findFighter(blastoise)).to.eq(false);
        });
    });


    describe('Tests for pikachu (class Pokedex)', () => {

        // const pikachu:Pokemon = new Pokemon("pikachu", 60, 50, "electric", 45, 80, 50,  "Pikapi.");

        it('Nombre = pikachu', () => {
            expect(pikachu.getName()).to.be.equal("pikachu");
        });

        it('altura = 60', () => {
            expect(pikachu.getHeight()).to.be.eq(60);
        });

        it('peso = 50', () => {
            expect(pikachu.getWeight()).to.be.eq(50);
        });

        it('tipo = electric', () => {
            expect(pikachu.getType()).to.be.equal("electric");
        });

        it('HP = 45', () => {
            expect(pikachu.getHP()).to.be.eq(45);
        });

        it('ataque = 50', () => {
            expect(pikachu.getAttack()).to.be.eq(80);
        });

        it('defensa = 50', () => {
            expect(pikachu.getDefense()).to.be.eq(50);
        });

        it('universe = Pokemon', () => {
            expect(pikachu.getUniverse()).to.be.eq("Pokemon");
        });
    });

    describe('Tests to check universe of every fighter', () => {
        it('Tests for different universe', () => {
            expect(bulbasaur.getUniverse()).to.eq("Pokemon");
            expect(captainAmerica.getUniverse()).to.eq("Marvel");
            expect(wonderWoman.getUniverse()).to.eq("DcComics");
            expect(yoda.getUniverse()).to.eq("StarWars");
            expect(sonGoKu.getUniverse()).to.eq("DragonBall");
        });
    });

    describe('Tests to show information of every fighter', () => {
        it('Tests for different fighters', () => {
            expect(showColletion.showInfo()).not.be.null;
        });
    });

    let combat1 = new Combat(pikachu, pikachu);
    let combat2 = new Combat(pikachu, blastoise);
    let combat3 = new Combat(pikachu, charizard);
    let combat4 = new Combat(pikachu, bulbasaur);

    let combat5 = new Combat(charizard, bulbasaur);
    let combat6 = new Combat(charizard, blastoise);

    let combat7 = new Combat(blastoise, charizard);
    let combat8 = new Combat(blastoise, bulbasaur);

    let combat9 = new Combat(bulbasaur, charizard);
    let combat10 = new Combat(bulbasaur, pikachu);
    let combat11 = new Combat(bulbasaur, blastoise);

    describe('Tests to show combat', () => {
        it('pikachu vs pikachu', () => {
            expect(combat1.start()).to.eq("pikachu");
        });

        it('pikachu vs blastoise', () => {
            expect(combat2.start()).to.eq("pikachu");
        });

        it('pikachu vs charizard', () => {
            expect(combat3.start()).to.eq("charizard");
        });

        it('pikachu vs bulbasaur', () => {
            expect(combat4.start()).to.eq("pikachu");
        });

        it('charizard vs bulbasaur', () => {
            expect(combat5.start()).to.eq("charizard");
        });

        it('charizard vs blastoise', () => {
            expect(combat6.start()).to.eq("charizard");
        });

        it('blastoise vs charizard', () => {
            expect(combat7.start()).to.eq("blastoise");
        });
        
        it('blastoise vs bulbasaur', () => {
            expect(combat8.start()).to.eq("blastoise");
        });
        
        it('bulbasaur vs charizard', () => {
            expect(combat9.start()).to.eq("charizard");
        });

        it('bulbasaur vs pikachu', () => {
            expect(combat10.start()).to.eq("bulbasaur");
        });

        it('bulbasaur vs blastoise', () => {
            expect(combat11.start()).to.eq("blastoise");
        });


        let combat21 = new Combat(ironMan, batMan);
        let combat22 = new Combat(darthVader, sonGoKu);
        let combat23 = new Combat(piccolo, kingShark);
        let combat24 = new Combat(wonderWoman, captainAmerica);
        
        let combat20 = new Combat(pikachu, yoda);
        let combat25 = new Combat(pikachu, captainAmerica);
        let combat26 = new Combat(pikachu, wonderWoman);
        let combat27 = new Combat(pikachu, sonGoKu);
        
        let combat28 = new Combat(sonGoKu, captainAmerica);
        let combat29= new Combat(wonderWoman, captainAmerica);
        let combat30= new Combat(wonderWoman, piccolo);
        let combat31 = new Combat(captainAmerica, captainAmerica);
        let combat32 = new Combat(hulk, lukeSkywalker);

        let combat33 = new Combat(batMan, sonGoKu);
        let combat34 = new Combat(wonderWoman, batMan);
        let combat35 = new Combat(ironMan, darthVader);

        let combat36 = new Combat(lukeSkywalker, batMan);
        let combat37 = new Combat(lukeSkywalker, darthVader);

        it('pikachu vs yoda', () => {
            expect(combat20.start()).to.eq("yoda");
        });

        it('ironMan vs batMan', () => {
            expect(combat21.start()).to.eq("iron man");
        });

        it('darthVader vs sonGoKu', () => {
            expect(combat22.start()).to.eq("darth varder");
        });

        it('piccolo vs kingShark', () => {
            expect(combat23.start()).to.eq("piccolo");
        });

        it('wonderWoman vs captainAmerica', () => {
            expect(combat24.start()).to.eq("captain america");
        });

        it('pikachu vs captainAmerica', () => {
            expect(combat25.start()).to.eq("captain america");
        });

        it('pikachu vs wonderWoman', () => {
            expect(combat26.start()).to.eq("wonder woman");
        });
        
        it('pikachu vs sonGoKu', () => {
            expect(combat27.start()).to.eq("son go ku");
        });
        
        it('sonGoKu vs captainAmerica', () => {
            expect(combat28.start()).to.eq("son go ku");
        });
        
        it('wonderWoman vs captainAmerica', () => {
            expect(combat29.start()).to.eq("captain america");
        });
        
        it('wonderWoman vs piccolo', () => {
            expect(combat30.start()).to.eq("piccolo");
        });
        
        it('captainAmerica vs captainAmerica', () => {
            expect(combat31.start()).to.eq("captain america");
        });
        
        it('hulk vs lukeSkywalker', () => {
            expect(combat32.start()).to.eq("hulk");
        });

        it('lukeSkywalker vs batMan', () => {
            expect(combat36.start()).to.eq("bat man");
        });

        it('lukeSkywalker vs darthVader', () => {
            expect(combat37.start()).to.eq("darth varder");
        });

        it('batMan vs sonGoKu', () => {
            expect(combat33.start()).to.eq("son go ku");
        });

        it('wonderWoman vs batMan', () => {
            expect(combat34.start()).to.eq("wonder woman");
        });

        it('ironMan vs darthVader', () => {
            expect(combat35.start()).to.eq("iron man");
        });

        it('check while', () => {
            expect(combat35.start()).to.eq("iron man");
        });
        const pikachu2:Pokemon = new Pokemon("pikachu", 60, 50, "electric", -10, 80, 50, "Pikapi.");
        const pikachu3:Pokemon = new Pokemon("pikachu", 60, 50, "electric", -10, 80, 50, "Pikapi.");
    
        let combatError = new Combat(pikachu2,pikachu3);

        it('check while', () => {
            expect(combatError.start()).not.be.null;
        });
        
    });
});
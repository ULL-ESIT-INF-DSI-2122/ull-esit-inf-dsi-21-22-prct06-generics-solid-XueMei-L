import { Fighter } from "./fighter";
import { Pokedex } from "./pokedex";
import { Pokemon } from "./pokemon";
import { Marvel } from "./marvel";
import { DcComics } from "./dccomics";
import { StarWars } from "./starwars";
import { DragonBall } from "./dragonball";
import { showInforFighter } from "./print";


export class Combat {
    private fighter1:Fighter;
    private fighter2:Fighter;

    /**
     *  _Construtor of the class Combat_
     * @param fighter1 fighter1 (from one of 5 universes.)
     * @param fighter2 fighter2 (from one of 5 universes.)
     */
    constructor(fighter1:Fighter, fighter2:Fighter) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
    }

    /**
     * _Calcular el ataque de pokemon A hacia pokemon B_
     * @param fighter1 tipo de pokemon atacator
     * @param fighter2 tipo de pokemon defensor
     * @returns daño realizado por el defensor
     */
    private SepWorldWarGame(fighter1:Fighter, fighter2:Fighter):number{
        let efectiveness: number = 0;
        let damage_total: number = 0;

        switch(fighter1.getUniverse()) {

            // DragonBall > Marvel > DcComics > Pokemon > StarWars 

            case 'Pokemon':
                if(fighter2 instanceof Pokemon) {
                    if(fighter1.getType() == fighter2.getType()){
                        efectiveness = 0.5;
                    }else{
                        switch(fighter1.getType()){

                            case "fire":
                                if(fighter2.getType() == "grass"){
                                    efectiveness = 2;
                                }else if(fighter2.getType() == "water"){
                                    efectiveness = 0.5;
                                }else{
                                    efectiveness = 1;
                                }
                            break;

                            case "water":
                                if(fighter2.getType() == "fire"){
                                    efectiveness = 0.5;
                                }
                                if(fighter2.getType() == "grass" || fighter2.getType() == "electric"){
                                    efectiveness = 2;
                                }
                            break;

                            case "grass":
                                if(fighter2.getType() == "fire"){
                                    efectiveness = 0.5;
                                }else if(fighter2.getType() == "electric"){
                                    efectiveness = 1;
                                }else{
                                    efectiveness = 2;
                                }
                            break;

                            case "electric":
                                if(fighter2.getType() == "fire" || fighter2.getType() == "grass"){
                                    efectiveness = 1;
                                }else{
                                    efectiveness = 2;
                                }
                            break;
                        }
                    }
                }    
            
                if(fighter2 instanceof Marvel) { efectiveness = 0.5; }
                if(fighter2 instanceof DcComics) { efectiveness = 0.5; }
                if(fighter2 instanceof StarWars) { efectiveness = 2; }
                if(fighter2 instanceof DragonBall) { efectiveness = 0.5; }

            case 'DragonBall':
                if(fighter2 instanceof Pokemon) { efectiveness = 2; }
                if(fighter2 instanceof Marvel) { efectiveness = 2; }
                if(fighter2 instanceof DcComics) { efectiveness = 2; }
                if(fighter2 instanceof StarWars) { efectiveness = 0.5; }
                if(fighter2 instanceof DragonBall) { efectiveness = 1; }
            break;

            case 'Marvel':
                if(fighter2 instanceof Pokemon) { efectiveness = 2; }
                if(fighter2 instanceof Marvel) { efectiveness = 1; }
                if(fighter2 instanceof DcComics) { efectiveness = 1; }
                if(fighter2 instanceof StarWars) { efectiveness = 2; }
                if(fighter2 instanceof DragonBall) { efectiveness = 0.5; }
            break;

            case 'DcComic':
                if(fighter2 instanceof Pokemon) { efectiveness = 2; }
                if(fighter2 instanceof Marvel) { efectiveness = 0.5; }
                if(fighter2 instanceof DcComics) { efectiveness = 1; }
                if(fighter2 instanceof StarWars) { efectiveness = 2; }
                if(fighter2 instanceof DragonBall) { efectiveness = 0.5; }
            break;

            case 'StarWars':
                if(fighter2 instanceof Pokemon) { efectiveness = 0.5; }
                if(fighter2 instanceof Marvel) { efectiveness = 0.5; }
                if(fighter2 instanceof DcComics) { efectiveness = 0.5; }
                if(fighter2 instanceof StarWars) { efectiveness = 1; }
                if(fighter2 instanceof DragonBall) { efectiveness = 2; }
            break;
        }
        
        damage_total = 50 * ( fighter1.getAttack() / fighter2.getDefense() ) * efectiveness;
        
        return Math.trunc(damage_total);
    }

    /**
     * _Metodo que realiza el proceso de combate_
     * @returns devuelve el ganador
     */
    public start() {
        console.log(`----------------------------Battle of the Exotic ----------------------------\n`);
        console.log(`Temporal history:    
            With the evolution of science and technology, human beings have started the exploration of the universe. 
            While roaming the universe, they have discovered many colorful universes:
            [ Pokemon universe, Marvel universe, Dccomics universe, Starswar universe, Dragonball universe ...]
            This opens the door to a new universe, Human beings on Earth have created a platform for each universe to 
            experience the battle with different universes, giving everyone a brand new battle experience, 
            experience different universes, battles between different races, strengths, skills, mutations... 
            Countless different and The existence of other universes, who will eventually become the strongest universe!
        `);
        
        
        
        // console.log(`\n-------- Tu pokemon: --------`);
        // this.pokemon1.showPokemon();

        // console.log(`\n-------- Pokemon enemigo: --------`);
        // this.pokemon2.showPokemon();
        
        // console.log(`\n----------------------------Proceso de combate----------------------------\n`);

        // let pokemon1Hp:number = this.pokemon1.getHP();
        // let pokemon2Hp:number = this.pokemon2.getHP();
        // let round:number = 1;
        
        // while (pokemon1Hp > 0 || pokemon2Hp > 0) {
        //     let damage:number = 0;
        //     console.log(`\n>> Round: ${round}`);
                
        //     if(round % 2 != 0) {
        //         damage = this.pokemonGame(this.pokemon1.getType(), this.pokemon2.getType(), this.pokemon1.getAttack(), this.pokemon2.getDefense());
        //         console.log(`>> Pokemon "${this.pokemon1.getName()}" ha realizado daño ` + damage + ` a "${this.pokemon2.getName()}"`);
        //         pokemon2Hp -= damage;
        //         console.log(`>> Pokemon atacador "${this.pokemon1.getName()}" queda ${pokemon1Hp} hp`);
        //         console.log(`>> Pokemon defensor "${this.pokemon2.getName()}" queda ${pokemon2Hp} hp`);
        //     }else{
        //         damage = this.pokemonGame(this.pokemon2.getType(), this.pokemon1.getType(), this.pokemon2.getAttack(), this.pokemon1.getDefense());
        //         console.log(`>> Pokemon "${this.pokemon2.getName()}" ha realizado daño ` + damage + ` a "${this.pokemon1.getName()}"`);
        //         pokemon1Hp -= damage;
        //         console.log(`>> Pokemon atacador "${this.pokemon2.getName()}" queda ${pokemon2Hp} hp`);
        //         console.log(`>> Pokemon defensor "${this.pokemon1.getName()}" queda ${pokemon1Hp} hp`);
        //     }
        //     if(pokemon1Hp < 0) {
        //         console.log(`\n>> Ganaste la batalla!! Puedes contener ${this.pokemon2.getName()} usando Poké Ball.`);
        //         return this.pokemon1.getName();
        //     }else if(pokemon2Hp < 0){
        //         console.log(`\n>> Perdiste el combate, tu pokemon ${this.pokemon1.getName()} vuelve a su Poké Ball.`);
        //         return this.pokemon2.getName();
        //     }else {
        //         round++;
        //     }
        // }
    }
}

let pikachu:Pokemon = new Pokemon("pikachu", 60, 50, "electric", [45, 80, 50], "Pikapi.");
let yoda:StarWars = new StarWars("yoda", 66, 47, "aliens", [90, 80, 110], "A Jedi craves not these things");
let Colletion:Pokedex = new Pokedex([pikachu, yoda]);
let b = new showInforFighter(Colletion);
let a = new Combat(pikachu, yoda);
a.start();
b.showInfo();
// console.table(Colletion, ["name", "height", "weight", "type", "tagline"]);

import { Fighter } from "./fighter";
import { Pokedex } from "./pokedex";
import { Pokemon } from "./pokemon";
import { Marvel } from "./marvel";
import { DcComics } from "./dccomics";
import { StarWars } from "./starwars";
import { DragonBall } from "./dragonball";
import { showInfoFighter } from "./print";

/**
 * _Class Combat_
 */
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
     * _Calcular el ataque de Fighter A hacia Fighter B_
     * @param fighter1 tipo de Fighter atacator
     * @param fighter2 tipo de Fighter defensor
     * @returns daño realizado por el defensor
     */
    private SepWorldWarGame(fighter1:Fighter, fighter2:Fighter):number{
        let efectiveness: number = 0;
        let damage_total: number = 0;

        switch(fighter1.getUniverse()) {

            // DragonBall > Marvel > DcComics > Fighter > StarWars 

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

            case 'DcComics':
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
            [ Fighter universe, Marvel universe, Dccomics universe, Starswar universe, Dragonball universe ...]
            This opens the door to a new universe, Human beings on Earth have created a platform for each universe to 
            experience the battle with different universes, giving everyone a brand new battle experience, 
            experience different universes, battles between different races, strengths, skills, mutations... 
            Countless different and The existence of other universes, who will eventually become the strongest universe!
        `);
        
        console.log(`\n>> Welcome to " ${this.fighter1.getName()} " from the < ${this.fighter1.getUniverse()} univese > `);
        console.log(`>> And his opponent " ${this.fighter2.getName()} " from the < ${this.fighter2.getUniverse()} univese >`);
        
        console.log(`\n---------------------------Combat process----------------------------`);

        let fighter1Hp:number = this.fighter1.getHP();
        let fighter2Hp:number = this.fighter2.getHP();
        let round:number = 1;
        
        while (fighter1Hp > 0 || fighter2Hp > 0) {
            let damage:number = 0;
            console.log(`\n>> Round: ${round}`);
            let printHp1:number = fighter1Hp / this.fighter1.getHP() * 10;
            process.stdout.write(`${this.fighter1.getName()}: `);
            for(let i = 0; i < printHp1; i++) {
                process.stdout.write(`🟩`);
            }
            process.stdout.write(`   ${fighter1Hp}`);

            let printHp2:number = fighter2Hp / this.fighter2.getHP() * 10;
            process.stdout.write(`\n${this.fighter2.getName()}: `);
            for(let i = 0; i < printHp2; i++) {
                process.stdout.write(`🟩`);
            }
            process.stdout.write(`   ${fighter2Hp}`);

            if(round % 2 != 0) {
                damage = this.SepWorldWarGame(this.fighter1, this.fighter2);
                console.log(`\n>> Fighter "${this.fighter1.getName()}" ha ralizado daño ` + damage + ` a "${this.fighter2.getName()}"`);
                console.log(`>> ${this.fighter1.getName()}says: "${this.fighter1.getTagline()}"`);
                fighter2Hp -= damage;
                console.log(`>> Fighter atacador "${this.fighter1.getName()}" queda ${fighter1Hp} hp`);
                console.log(`>> Fighter defensor "${this.fighter2.getName()}" queda ${fighter2Hp} hp`);
            }else{
                damage = this.SepWorldWarGame(this.fighter2, this.fighter1);
                console.log(`\n>> Fighter "${this.fighter2.getName()}" ha realizado daño ` + damage + ` a "${this.fighter1.getName()}"`);
                console.log(`>> ${this.fighter2.getName()}says: "${this.fighter2.getTagline()}"`);
                fighter1Hp -= damage;
                console.log(`>> Fighter atacador "${this.fighter2.getName()}" queda ${fighter2Hp} hp`);
                console.log(`>> Fighter defensor "${this.fighter1.getName()}" queda ${fighter1Hp} hp`);
            }
            if(fighter1Hp < 0) {
                console.log(`\n>> "${this.fighter2.getName()}" gana la batalla!! ${this.fighter1.getName()} back to own universe.`);
                
                process.stdout.write(`\n${this.fighter1.getName()}: `);
                
                let printHp2:number = fighter2Hp / this.fighter2.getHP() * 10;
                process.stdout.write(`\n${this.fighter2.getName()}: `);
                for(let i = 0; i < printHp2; i++) {
                    process.stdout.write(`🟩`);
                }
                process.stdout.write(`   ${fighter2Hp}`);

                return this.fighter2.getName();

            }else if(fighter2Hp < 0){
                console.log(`\n>> "${this.fighter1.getName()}" gana la batalla!! "${this.fighter2.getName()}" back to own universe.`);
                               process.stdout.write(`\n${this.fighter1.getName()}: `);
                
                let printHp1:number = fighter1Hp / this.fighter1.getHP() * 10;
                process.stdout.write(`\n${this.fighter2.getName()}: `);
                for(let i = 0; i < printHp1; i++) {
                    process.stdout.write(`🟩`);
                }
                process.stdout.write(`   ${fighter1Hp}`);

                return this.fighter1.getName();
            }else {
                round++;
            }
        }
    }
}
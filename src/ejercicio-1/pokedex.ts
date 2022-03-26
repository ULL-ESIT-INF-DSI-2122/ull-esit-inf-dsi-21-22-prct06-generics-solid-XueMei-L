//class Pokedex

/*
Nombre del Pokemon
Peso y altura
Tipo
Estadísticas básicas: ataque, 
defensa, velocidad, daño máximo (HP). 
*/
import { Fighter, Pokemon } from './fighter'

export class Pokedex {

    constructor(private fighterColletions:Fighter[]){
        this.fighterColletions = fighterColletions;
    }

    getFighter() {
        console.log(`${this.fighterColletions}`);
        return this.fighterColletions;
    }

    getFightersNumber() {
        return this.fighterColletions.length;
    }
    
    addFighter(newFighter:Fighter) {
        this.fighterColletions.push(newFighter);
    }

    findFighter(seachFight:Fighter):boolean{
        if(this.fighterColletions.find(element => element == seachFight)) {
            return true;
        }
        return false;
    }
}

let a = new Pokemon("pikachu", 50, 45, "electric", {hp:100, attack:10, defence:15, speed:1}, "pikapika");
let b = new Pokemon("pikachu", 50, 45, "electric", {hp:100, attack:10, defence:15, speed:1}, "pikapika");

let c = new Pokedex([]);
c.addFighter(a);
c.getFighter();
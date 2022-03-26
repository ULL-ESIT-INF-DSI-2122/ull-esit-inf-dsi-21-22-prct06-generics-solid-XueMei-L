import { Fighter } from './fighter'
import { Marvel } from './marvel';
import { Pokemon } from './pokemon'

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

let a = new Pokemon("pikachu", 50, 45, "electric", [90, 55, 110, 60], "pikapika");
// let b = new Pokemon("pikachu", 50, 45, "electric", {hp:100, attack:10, defence:15, speed:1}, "pikapika");
let as = new Marvel("pikachu", 50, 45, "electric", [90, 55, 110, 60], "pikapika");

let c = new Pokedex([]);
c.addFighter(a);
c.getFighter();
c.addFighter(as);
c.getFighter();
console.log(`${c.getFightersNumber()}`);
console.log(`${c.findFighter(as)}`);
c.findFighter(as);

import { Fighter } from './fighter'
import { Marvel } from './marvel';
import { Pokemon } from './pokemon'

export class Pokedex {

    constructor(private fighterColletion:Fighter[]){
        this.fighterColletion = fighterColletion;
    }

    /**
     * _Method that to get fighters collection_
     */
    getFighter() {
        // console.log(`${this.fighterColletion}`);
        return this.fighterColletion;
    }

    getFightersNumber() {
        return this.fighterColletion.length;
    }

    addFighter(newFighter:Fighter) {
        this.fighterColletion.push(newFighter);
    }

    findFighter(seachFight:Fighter):boolean{
        if(this.fighterColletion.find(element => element == seachFight)) {
            return true;
        }
        return false;
    }
}
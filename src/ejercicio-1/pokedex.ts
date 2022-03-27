import { Fighter } from './fighter'

export class Pokedex {

    constructor(private fighterColletion:Fighter[]){
        this.fighterColletion = fighterColletion;
    }

    /**
     * _Method that to get fighters collection_
     */
    getFighter(): Fighter[] {
        return this.fighterColletion;
    }

    getFightersNumber(): number { 
        return this.fighterColletion.length;
    }

    addFighter(newFighter:Fighter) :void {
        this.fighterColletion.push(newFighter);
    }

    findFighter(seachFight:Fighter):boolean{
        if(this.fighterColletion.find(element => element == seachFight)) {
            return true;
        }
        return false;
    }
}
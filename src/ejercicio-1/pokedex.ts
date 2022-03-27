import { Fighter } from './fighter'

/**
 * _Class Pokedex_
 */
export class Pokedex {

    /**
     * _Construtor of the class Pokedex_
     * @param fighterColletion coletion of fighters
     */
    constructor(private fighterColletion:Fighter[]){
        this.fighterColletion = fighterColletion;
    }

    /**
     * _Method that to get fighters collection_
     */
    getFighter(): Fighter[] {
        return this.fighterColletion;
    }

    /**
     * _Method that to get number of fighters_
     */
    getFightersNumber(): number { 
        return this.fighterColletion.length;
    }

    /**
     * _Method that to add a ew fighter_
     * @param newFighter a new fighter
     */
    addFighter(newFighter:Fighter) :void {
        this.fighterColletion.push(newFighter);
    }

    /**
     * _Method that to find a fighter in the colection_
     * @param seachFight 
     */
    findFighter(seachFight:Fighter):boolean{
        if(this.fighterColletion.find(element => element == seachFight)) {
            return true;
        }
        return false;
    }
}
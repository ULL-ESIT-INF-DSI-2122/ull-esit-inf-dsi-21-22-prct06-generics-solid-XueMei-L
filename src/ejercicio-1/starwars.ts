import { Fighter } from './fighter'

/**
 * _Subclass StatWars_
 */
export class StarWars extends Fighter {

    private readonly universe:string = "StarWars";

    /**
     * _Constructor of fighter_
     * @param name fighter name
     * @param height fighter's height
     * @param weight fighter's weight
     * @param type fighter's type
     * @param hp fighter's hp
     * @param attack fighter's attack
     * @param defense fighter's defense
     * @param tagline fighter's tagline
     */
    constructor(name:string, height:number, weight:number, type:string, 
        hp:number, attack:number, defense:number, sentence:string) {
        super(name, height, weight, type, hp, attack, defense, sentence);
    }

    /**
     * _Method that to get fighter's universe_
     */
    getUniverse():string {
        return this.universe;
    }
}
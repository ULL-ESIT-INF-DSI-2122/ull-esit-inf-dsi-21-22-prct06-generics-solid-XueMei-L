import { Fighter } from './fighter'

export class Pokemon extends Fighter {

    private readonly universe:string = "Pokemon";

    constructor(name:string, height:number, weight:number, type:string, 
        hp:number, attack:number, defense:number, sentence:string) {
        super(name, height, weight, type, hp, attack, defense, sentence);
    }

    getUniverse():string {
        return this.universe;
    }
}
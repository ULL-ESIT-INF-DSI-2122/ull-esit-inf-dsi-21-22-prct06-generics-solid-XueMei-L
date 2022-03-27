import { Fighter } from './fighter'

export class Marvel extends Fighter {

    private readonly universe:string = "Marvel";

    constructor(name:string, height:number, weight:number, type:string, 
        hp:number, attack:number, defense:number, sentence:string) {
        super(name, height, weight, type, hp, attack, defense, sentence);
    }

    getUniverse():string {
        return this.universe;
    }
}
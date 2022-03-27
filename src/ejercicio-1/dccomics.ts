import { Fighter } from './fighter'

export class DcComics extends Fighter {

    private readonly universe:string = "DcComics";

    constructor(name:string, height:number, weight:number, type:string, 
        hp:number, attack:number, defense:number, sentence:string) {
        super(name, height, weight, type, hp, attack, defense, sentence);
    }

    getUniverse():string {
        return this.universe;
    }
}
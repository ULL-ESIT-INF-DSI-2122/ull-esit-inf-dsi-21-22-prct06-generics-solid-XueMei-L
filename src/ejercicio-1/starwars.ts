import { Fighter } from './fighter'

export class StarWars extends Fighter {

    private readonly universe:string = "StarWars";

    constructor(name:string, height:number, weight:number, type:string, status:number[], sentence:string) {
        // super(name, height, weight, sentence);
        super(name, height, weight, type, status, sentence);
    }

    getUniverse():string {
        return "StarWars";
    }
}
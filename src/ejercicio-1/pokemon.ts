import { Fighter } from './fighter'

export class Pokemon extends Fighter {

    private readonly universe:string = "Pokemon";

    constructor(name:string, height:number, weight:number, type:string, status:number[], sentence:string) {
        // super(name, height, weight, sentence);
        super(name, height, weight, type, status, sentence);
    }

    getUniverse():string {
        return "Pokemon";
    }
}
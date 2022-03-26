import { Fighter } from './fighter'

export class Marvel extends Fighter {

    private readonly universe:string = "Marvel";

    constructor(name:string, height:number, weight:number, type:string, status:number[], sentence:string) {
        // super(name, height, weight, sentence);
        super(name, height, weight, type, status, sentence);
    }

    getUniverse():string {
        return "Marvel";
    }
}
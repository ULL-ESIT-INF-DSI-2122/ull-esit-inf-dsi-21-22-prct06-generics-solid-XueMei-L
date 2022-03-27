import { Fighter } from './fighter'

export class DcComics extends Fighter {

    private readonly universe:string = "DcComics";

    constructor(name:string, height:number, weight:number, type:string, status:number[], sentence:string) {
        // super(name, height, weight, sentence);
        super(name, height, weight, type, status, sentence);
    }

    getUniverse():string {
        return "DcComics";
    }
}
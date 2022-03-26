// import { Pokemon } from "./pokemon"

export type status = {
    hp:number;
    attack:number;
    defence:number;
    speed:number;
}

export abstract class Fighter{
    
    constructor(private readonly name:string, private readonly height:number,
        private readonly weight:number, private readonly type:string, private status:status, private readonly sentence:string) {

    }

    getName() { return this.name; }
    getWeight() { return this.weight; }
    getHeight() { return this.height; }
    getType() { return this.type; }
    getHP() { return this.status.hp; }
    getAttack() { return this.status.attack; }
    getDefense() { return this.status.defence; }
    getSpeed() { return this.status.speed; }
    
    public setHp(fighterHP:number) { this.status.hp = fighterHP; }
    abstract getUniverso():string;
}

export class Pokemon extends Fighter {

    private readonly universe:string = "Pokemon";

    constructor(name:string, height:number, weight:number, type:string, status:status, sentence:string) {
        // super(name, height, weight, sentence);
        super(name, height, weight, type, status, sentence);
    }

    getUniverso():string {
        return "Pokemon";
    }
}
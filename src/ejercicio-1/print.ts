import { Pokedex } from './pokedex';

export class showInforFighter {
    constructor(private colletion:Pokedex) {
    }

    public showInfo() {
        console.table(this.colletion.getFighter(), ["name", "height", "weight", "HP", "attack", "defense", "type", "tagline"]);
    }
}
import { Pokedex } from './pokedex';

/**
 * _Class showInfoFighter_
 */
export class showInfoFighter {
    constructor(private colletion:Pokedex) {
    }

    /**
     * _Method that use console.table to show information of fighter_
     */
    public showInfo() {
        console.table(this.colletion.getFighter(), ["name", "height", "weight", "type", "hp", "attack", "defense", "tagline"]);
    }
}
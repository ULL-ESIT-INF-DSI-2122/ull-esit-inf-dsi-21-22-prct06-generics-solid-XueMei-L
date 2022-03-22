import {BasicStreamableCollection} from '../../src/ejercicio-2/BasicStreamableCollection'

export type typeSerie = {
    tilte:string;
    year:number;
    season:number;
    star:number;
    type:string;
}

export class Series extends BasicStreamableCollection<typeSerie> {


}
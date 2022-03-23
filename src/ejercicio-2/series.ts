import {BasicStreamableCollection} from '../../src/ejercicio-2/BasicStreamableCollection'

export type typeSerie = {
    title:string;
    year:number;
    season:number;
    star:number;
    type:string;
}

export class Series extends BasicStreamableCollection<typeSerie> {

    constructor(private collectionSeries:typeSerie[]) {
        super(collectionSeries);
    }

    getElement():typeSerie[]{
        return this.collectionSeries;
    }

    searchElement(data:string, value:string):typeSerie[]{
        let result:typeSerie[] = [];
        switch(data.toLowerCase()) {
            case ('title'):
                result = this.collectionSeries.filter((n) => n.title = value);
                break;
            case ('year'):
                result = this.collectionSeries.filter((n) => n.year = Number(value));
                break;
            case ('season'):
                result = this.collectionSeries.filter((n) => n.season = Number(value));
                break;
            case ('start'):
                result = this.collectionSeries.filter((n) => n.star = Number(value));
                break;
            case ('type'):
                result = this.collectionSeries.filter((n) => n.type = value);
                break;
            default:
                console.log(`cannot find serie.`);
        }
        return result;
    }
}
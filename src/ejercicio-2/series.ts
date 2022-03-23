import {BasicStreamableCollection} from '../../src/ejercicio-2/BasicStreamableCollection'

/**
 * TypeSerie to describe informations of serie
 */
export type typeSerie = {
    title:string;
    year:number;
    season:number;
    star:number;
    type:string;
}

/**
 * Class Series to describe series collection
 */
export class Series extends BasicStreamableCollection<typeSerie> {

    constructor(private collectionSeries:typeSerie[]) {
        super(collectionSeries);
    }

    /**
     * _Method that to get series objects_
     * @returns series objects
     */
    getElement():typeSerie[]{
        return this.collectionSeries;
    }

    /**
     * _Method that to seach series with corresponding information_
     * @param data information that to seach
     * @param value value to seach
     */
    searchElement(data:string, value:string):typeSerie[]{
        let result:typeSerie[] = [];
        switch(data.toLowerCase()) {
            case ('title'):
                result = this.collectionSeries.filter((n) => n.title == value);
                break;
            case ('year'):
                result = this.collectionSeries.filter((n) => n.year == Number(value));
                break;
            case ('season'):
                result = this.collectionSeries.filter((n) => n.season == Number(value));
                break;
            case ('star'):
                result = this.collectionSeries.filter((n) => n.star >= Number(value));
                break;
            case ('type'):
                result = this.collectionSeries.filter((n) => n.type == value);
                break;
            default:
                console.log(`cannot find serie.`);
        }
        return result;
    }
}
import {BasicStreamableCollection} from '../../src/ejercicio-2/BasicStreamableCollection'

/**
 * TypeFilm to describe informations of Film
 */
export type typeFilm = {
    title:string;
    year:number;
    type:string;
    region:string;
}

/**
 * Class Films to describe Films collection
 */
export class Films extends BasicStreamableCollection<typeFilm> {
    
    constructor(private collectionFilms:typeFilm[]) {
        super(collectionFilms);
    }
    /**
     * _Method that to get Films objects_
     * @returns Films objects
     */
    getElement() { return this.collectionFilms; }


    /**
     * _Method that to seach Films with corresponding information_
     * @param data information that to seach
     * @param value value to seach
     */
    searchElement(data:string, value:string):typeFilm[]{
        let result:typeFilm[] = [];
        switch(data) {
            case ('title'):
                result = this.collectionFilms.filter((n) => n.title == value);
                break;
            case ('year'):
                result = this.collectionFilms.filter((n) => n.year == Number(value));
                break;
            case ('type'):
                result = this.collectionFilms.filter((n) => n.type == value);
                break;
            case ('region'):
                result = this.collectionFilms.filter((n) => n.region == value);
                break;
            default:
                console.log(`cannot find film.`);
                break;
        }

        return result;
    }

}
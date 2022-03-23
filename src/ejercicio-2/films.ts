import {BasicStreamableCollection} from '../../src/ejercicio-2/BasicStreamableCollection'
import { Series } from './series';

export type typeFilm = {
    title:string;
    year:number;
    type:string;
    region:string;
}

export class Films extends BasicStreamableCollection<typeFilm> {
    
    constructor(private collectionFilms:typeFilm[]) {
        super(collectionFilms);
    }

    getElement():typeFilm[]{
        return this.collectionFilms;
    }

    searchElement(data:string, value:string):typeFilm[]{
        let result:typeFilm[] = [];
        switch(data.toLowerCase()) {
            case ('title'):
                result = this.collectionFilms.filter((n) => n.title = value);
                break;
            case ('year'):
                result = this.collectionFilms.filter((n) => n.year = Number(value));
                break;
            case ('type'):
                result = this.collectionFilms.filter((n) => n.type = value);
                break;
            case ('region'):
                result = this.collectionFilms.filter((n) => n.region = value);
                break;
            default:
                console.log(`cannot find film`);
        }
        return result;
    }

}
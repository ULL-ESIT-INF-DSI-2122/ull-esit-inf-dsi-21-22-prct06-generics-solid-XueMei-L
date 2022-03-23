import {BasicStreamableCollection} from './BasicStreamableCollection'

export type typeDocumentary = {
    title:string;
    year:number;
    type:string;
    country:string;
}

export class Documentary extends BasicStreamableCollection<typeDocumentary> {

    constructor(private collectionFilms:typeDocumentary[]) {
        super(collectionFilms);
    }

    getElement():typeDocumentary[]{
        return this.collectionFilms;
    }

    searchElement(data:string, value:string):typeDocumentary[]{
        let result:typeDocumentary[] = [];
        switch(data.toLowerCase()) {
            case ('title'):
                result = this.collectionFilms.filter((n) => n.title == value);
                break;
            case ('year'):
                result = this.collectionFilms.filter((n) => n.year == Number(value));
                break;
            case ('type'):
                result = this.collectionFilms.filter((n) => n.type == value);
                break;
            case ('country'):
                result = this.collectionFilms.filter((n) => n.country == value);
                break;
            default:
                console.log(`cannot find documentary.`);
        }
        return result;
    }
}
import {BasicStreamableCollection} from './BasicStreamableCollection'

/**
 * TypeDocumentary to describe informations of Documentary
 */
export type typeDocumentary = {
    title:string;
    year:number;
    type:string;
    country:string;
}

/**
 * Class Documentarys to describe Documentarys collection
 */
export class Documentary extends BasicStreamableCollection<typeDocumentary> {

    constructor(private collectionDocumentarys:typeDocumentary[]) {
        super(collectionDocumentarys);
    }

    /**
     * _Method that to get Documentarys objects_
     * @returns Documentarys objects
     */
    getElement():typeDocumentary[]{
        return this.collectionDocumentarys;
    }

    /**
     * _Method that to seach Documentarys with corresponding information_
     * @param data information that to seach
     * @param value value to seach
     */
    searchElement(data:string, value:string):typeDocumentary[]{
        let result:typeDocumentary[] = [];
        switch(data.toLowerCase()) {
            case ('title'):
                result = this.collectionDocumentarys.filter((n) => n.title == value);
                break;
            case ('year'):
                result = this.collectionDocumentarys.filter((n) => n.year == Number(value));
                break;
            case ('type'):
                result = this.collectionDocumentarys.filter((n) => n.type == value);
                break;
            case ('country'):
                result = this.collectionDocumentarys.filter((n) => n.country == value);
                break;
            default:
                console.log(`cannot find documentary.`);
        }
        return result;
    }
}
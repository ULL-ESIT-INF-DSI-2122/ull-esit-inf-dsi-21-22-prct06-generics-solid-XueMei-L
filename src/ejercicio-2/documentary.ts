import {BasicStreamableCollection} from './BasicStreamableCollection'

export type typeDocumentary = {
    
    title:string;
    year:number;
    type:string;
}

export class Documentary extends BasicStreamableCollection<typeDocumentary> {

    constructor(elements:typeDocumentary[]) {
        super(elements);
    }
    
    searchElement(titleFilm:string, type:string):any {
        
    }

    print():void{
        this.collection.forEach((tipo, value) =>{
            
        });
    }
}
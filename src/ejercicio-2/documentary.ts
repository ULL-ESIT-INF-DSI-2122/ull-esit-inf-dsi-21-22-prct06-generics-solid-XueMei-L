import {BasicStreamableCollection} from './BasicStreamableCollection'

export type typeDocumentary = {
    
    title:string;
    year:number;
    type:string;
}

export class Documentary extends BasicStreamableCollection<documentary> {

    constructor(elements:typeDocumentary[]) {
        super(elements);
    }
    search(titleFilm:string, type:string):any {

    }

    print():void{
        this.collection.forEach((tipo, value) =>{
            
        });
    }
}
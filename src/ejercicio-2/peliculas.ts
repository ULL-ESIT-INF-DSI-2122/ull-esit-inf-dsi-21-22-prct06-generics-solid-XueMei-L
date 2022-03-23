import {BasicStreamableCollection} from '../../src/ejercicio-2/BasicStreamableCollection'

export type typeFilm = {
    title:string;
    year:number;
    type:string;
}

export class Films extends BasicStreamableCollection<typeFilm> {
    
    constructor(collectionFilms:typeFilm[]) {
        super(collectionFilms);
    }

    search(titleFilm:string, type:string):any {

    }

    print():void{
        this.collection.forEach((tipo, value) =>{
            
        });
    }
}
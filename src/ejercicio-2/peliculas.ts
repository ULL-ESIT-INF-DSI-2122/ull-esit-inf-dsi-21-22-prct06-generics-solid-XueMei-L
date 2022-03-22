import {BasicStreamableCollection} from '../../src/ejercicio-2/BasicStreamableCollection'

export type typeFilm = {
    title:string;
    year:number;
    type:string;
}

export class Films extends BasicStreamableCollection<typeFilm> {
    
}
import 'mocha';
import { expect } from 'chai';
import { Streamable } from '../../src/ejercicio-2/Streamable';
import { typeFilm, Films } from '../../src/ejercicio-2/peliculas';
import { typeSerie, Series } from '../../src/ejercicio-2/series';

describe('Tests for ejercicio-2 Dsifix', () =>{
    
    describe('Tests for interface Streamble', () => {
        // export type typeSerie = {
        //     tilte:string;
        //     year:number;
        //     season:number;
        //     star:number;
        //     type:string;
        // }
        let filmShrek:typeFilm = { title:'shrek2', year: 2004, type:'science fiction'};
        let filmTheMatrix:typeFilm = { title:'The Matrix', year:1999, type:'science fiction'};
        let filmFastAndFurious9:typeFilm = { title:'Fast And Furious', year:2021, type:'action'};

        let seriesPrisonBreak1:typeSerie = { tilte:'Prinson Break 01', year:2005, season:1, star:4.8, type:'criminal'};
        let seriesPrisonBreak2:typeSerie = { tilte:'Prinson Break 02', year:2006, season:2, star:4.7, type:'criminal'};
        let seriesPrisonBreak3:typeSerie = { tilte:'Prinson Break 03', year:2015, season:3, star:3.0, type:'criminal'};
    
        
    });
});

import 'mocha';
import { expect } from 'chai';
import { Streamable } from '../../src/ejercicio-2/Streamable';
import { typeFilm, Films } from '../../src/ejercicio-2/films';
import { typeSerie, Series } from '../../src/ejercicio-2/series';
import { typeDocumentary, Documentary } from '../../src/ejercicio-2/documentary';

describe('Tests for ejercicio-2 Dsifix', () =>{
    
    describe('Tests for collection Films', () => {

        let filmShrek:typeFilm = { title:'shrek2', year: 2004, type:'science fiction', region: 'United States'};
        let filmTheMatrix:typeFilm = { title:'The Matrix', year:1999, type:'science fiction', region:'United States'};
        let filmFastAndFurious9:typeFilm = { title:'Fast And Furious', year:2021, type:'action', region: 'United States'};
        let filmSpiderMan:typeFilm = {title:'Spider Man', year:2021, type:'action', region: 'United States'}
        
        let collectionFilms = new Films([filmShrek, filmTheMatrix, filmFastAndFurious9]);

        it('Number of collection films, there are 3 films', () =>{
            expect(collectionFilms.getElement().length).to.eq(3);
        });

        it('Add Spider Man film to the collection, there are 4 films', () =>{
            collectionFilms.addElement(filmSpiderMan);
            expect(collectionFilms.getElement().length).to.eq(4);
        });

        it('Find Spider Man film', () =>{
            expect(collectionFilms.searchElement("title", "Spider Man")).to.deep.
            equal([filmSpiderMan]);
        });

        it('Find science fiction films', () =>{
            expect(collectionFilms.searchElement("type", "science fiction")).to.deep.
            equal([filmShrek, filmTheMatrix]);
        });

        it('Find films from United Stated', () =>{
            expect(collectionFilms.searchElement("region", "United States")).to.deep.
            equal([filmShrek, filmTheMatrix, filmFastAndFurious9, filmSpiderMan]);
        });
    });
    
    describe('Test for collection Series', () => {

        let seriesPrisonBreak1:typeSerie = { title:'Prinson Break 01', year:2005, season:1, star:4.8, type:'criminal'};
        let seriesPrisonBreak2:typeSerie = { title:'Prinson Break 02', year:2006, season:2, star:4.7, type:'criminal'};
        let seriesPrisonBreak3:typeSerie = { title:'Prinson Break 03', year:2015, season:3, star:3.0, type:'criminal'};
      
        let documentaryStreetFood:typeDocumentary = { title:'Street Fodd', year:2019, type:'culture', country:'United Stated'};


        let collectionSeries1 = new Series([seriesPrisonBreak1, seriesPrisonBreak2, seriesPrisonBreak3]);

        let collectionDocumenraty1 = new Documentary([documentaryStreetFood]);

    });
});

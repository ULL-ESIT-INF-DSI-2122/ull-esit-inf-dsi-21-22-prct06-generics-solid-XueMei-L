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

        let seriesPrisonBreak1:typeSerie = { title:'Prinson Break', year:2005, season:1, star:4.8, type:'criminal'};
        let seriesPrisonBreak2:typeSerie = { title:'Prinson Break', year:2006, season:2, star:4.7, type:'criminal'};
        let seriesPrisonBreak3:typeSerie = { title:'Prinson Break', year:2015, season:3, star:3.0, type:'criminal'};
        let seriesBigBang1:typeSerie = { title:'Big Bang Theory', year:2007, season:1, star:4.8, type:'comedy'};
        let seriesBigBang2:typeSerie = { title:'Big Bang Theory', year:2009, season:2, star:4.5, type:'comedy'};
        let seriesBigBang3:typeSerie = { title:'Big Bang Theory', year:2010, season:3, star:4.6, type:'comedy'};
        let seriesBigBang4:typeSerie = { title:'Big Bang Theory', year:2011, season:4, star:4.7, type:'comedy'};
        
        let collectionSeries = new Series([seriesPrisonBreak1, seriesPrisonBreak2, seriesPrisonBreak3]);
        let newCollectionSeries = new Series([seriesPrisonBreak1, seriesPrisonBreak2, 
            seriesPrisonBreak3, seriesBigBang1, seriesBigBang2, seriesBigBang3, seriesBigBang4]);
        
        it('Number of collection series, there are 3 series', () =>{
            expect(collectionSeries.getElement().length).to.eq(3);
        });

        it('Add Big Bang Theory to the collection, there are 7 series', () =>{
            collectionSeries.addElement(seriesBigBang1);
            collectionSeries.addElement(seriesBigBang2);
            collectionSeries.addElement(seriesBigBang3);
            collectionSeries.addElement(seriesBigBang4);
            expect(collectionSeries.getElement().length).to.eq(7);
        });

        it('Find Big Bang Theory series', () =>{
            expect(collectionSeries.searchElement("title", "Big Bang Theory")).to.deep.
            equal([seriesBigBang1, seriesBigBang2, seriesBigBang3, seriesBigBang4]);
        });

        it('Find criminal series', () =>{
            expect(collectionSeries.searchElement("type", "criminal")).to.deep.
            equal([seriesPrisonBreak1, seriesPrisonBreak2, seriesPrisonBreak3]);
        });

        it('Find series have star >= 4.6', () =>{
            expect(collectionSeries.searchElement("star", "4.6")).to.deep.
            equal([seriesPrisonBreak1, seriesPrisonBreak2, 
                seriesBigBang1, seriesBigBang3, seriesBigBang4]);
        });
        
        
    });
    
    describe('Test for collection Documentary', () =>{
        let documentaryStreetFood:typeDocumentary = { title:'Street food', year:2019, type:'culture', country:'United Stated'};
        let documentaryTheWorldAtWar:typeDocumentary = { title:'The world at war', year:1974, type:'history', country:'Europe'};
        
        let collectionDocumentary1 = new Documentary([documentaryStreetFood]);

                
        it('Number of collection documentary, there is 1 documentary', () =>{
            expect(collectionDocumentary1.getElement().length).to.eq(1);
        });

        it('Add The World At War the collection, there are 2 documentaries', () =>{
            collectionDocumentary1.addElement(documentaryTheWorldAtWar);
            expect(collectionDocumentary1.getElement().length).to.eq(2);
        });

        it('Find history documentaries', () =>{
            expect(collectionDocumentary1.searchElement("type", "history")).to.deep.
            equal([documentaryTheWorldAtWar]);
        });
    });
});

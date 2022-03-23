import { Streamable } from "./Streamable";

// class abstracta use implements
// Definir constructor
// Devolver la longitud de la colección
// Definir el método de búsqueda general
// Definir el método de imprimir resultado
export abstract class BasicStreamableCollection<T> implements Streamable<T> {
    
    constructor(protected collection:[T]) {}
    
    getNumber(){ return this.collection.length; }
    
    // Obliga a subclases a implementar los metodos
    abstract searchElement(name:string, type:string):T[];

    abstract print():void;

}



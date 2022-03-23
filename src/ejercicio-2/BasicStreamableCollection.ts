import { StreamableSeach } from "./StreamableSeach";
import { Streamable } from './Streamable'

// class abstracta use implements
// Definir constructor
// Devolver la longitud de la colección
// Definir el método de búsqueda general
// Definir el método de imprimir resultado
export abstract class BasicStreamableCollection<T> implements StreamableSeach<T>, Streamable<T> {
    
    constructor(protected collection:T[]) {}
    
    getNumber(){ return this.collection.length; }

    addElement(element:T) { this.collection.push(element); }
    
    // Obliga a subclases a implementar los metodos - No se implementa
    abstract getElement():T[];

    abstract searchElement(name:string, type:string):T[];

}



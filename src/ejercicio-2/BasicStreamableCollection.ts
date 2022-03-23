import { StreamableSeach } from "./StreamableSeach";
import { Streamable } from './Streamable'

/**
 * Abstract class BasicStreamableCollection to include all Streamables
 */
export abstract class BasicStreamableCollection<T> implements StreamableSeach<T>, Streamable<T> {
    
    /**
     * _Constructor of the abstract class_
     * @param collection Array to save objects of type T
     */
    constructor(protected collection:T[]) {}

    /**
     * _Method that to add a object type T to the collection_
     * @param element elemento type T to add to the collection
     */
    addElement(element:T) { this.collection.push(element); }
    

    // Methods that should be implement in subclases;

    /**
     * _Method that to get element of the colletion_
     */
    abstract getElement():T[];


    /**
     * _Method that to seach type T with corresponding information_
     * @param data information that to seach
     * @param value value to seach
     */
    abstract searchElement(name:string, type:string):T[];

}



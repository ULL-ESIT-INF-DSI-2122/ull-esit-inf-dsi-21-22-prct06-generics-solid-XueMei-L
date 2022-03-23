export interface Streamable<T> {
    addElement(elemento:T):void;
    getElement():T[];
    getNumber():number;
}
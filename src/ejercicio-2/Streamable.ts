/**
 * _Interface that has the methods addElements() and getElement() to implement_
 */
export interface Streamable<T> {
    addElement(elemento:T):void;
    getElement():T[];
}
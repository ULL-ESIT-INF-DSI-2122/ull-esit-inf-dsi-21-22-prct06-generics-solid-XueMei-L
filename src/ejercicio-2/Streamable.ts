export interface Streamable<T> {
    getNumber():number;
    searchElement(tipo: string, nombre:string): T[];
}
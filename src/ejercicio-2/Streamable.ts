export interface Streamable<T> {
    getNumber():number;
    busqueda(tipo: string, nombre:string): T[];
}
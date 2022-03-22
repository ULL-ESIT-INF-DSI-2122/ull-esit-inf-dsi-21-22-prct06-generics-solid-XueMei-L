export interface Streamable<T> {
    getNumber():number;
    search(tipo: string, nombre:string): T[];
}
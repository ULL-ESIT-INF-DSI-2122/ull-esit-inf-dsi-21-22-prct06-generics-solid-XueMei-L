export interface StreamableSeach<T>{
    searchElement(type: string, name:string): T[];
}
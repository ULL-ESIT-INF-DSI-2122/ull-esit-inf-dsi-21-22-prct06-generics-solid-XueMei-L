/**
 * _Interface that has the method searchElement() to implement_
 */
export interface StreamableSeach<T>{
    searchElement(type: string, name:string): T[];
}
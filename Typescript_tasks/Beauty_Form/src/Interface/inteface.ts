export interface data{
    input:{type:string,name:string,value:string}[];
    label:{for:string,text:string}[];
}

export interface formData {
    input: {type:string, name:string, value:string, placeholder:string}[],
    label: {for:string, text:string, img: string}[],
    button:{class:string, type:string, text:string,eventName?:string}
} 

export interface IStorage {
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
    removeItem(key: string): void;
  }
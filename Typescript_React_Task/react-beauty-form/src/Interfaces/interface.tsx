export interface genderInput {
    name: string;
    type: string;
    value?: string;
    labelText?: string;
    styleClass: string;
}

export interface options {
    data: string[];
}

export interface inputs extends genderInput {
    name: string;
    placeholder?: string;
    labelIcon?: string;
    errorMsg? : string
    inputEvent?: (e:any) => void;
}

export interface buttons {
    text: string;
}

export interface IStorage {
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
    removeItem(key: string): void;
}

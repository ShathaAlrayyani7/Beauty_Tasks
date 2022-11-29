export interface genderInput {
    type: string;
    name: string;
    value: string;
    labelText: string;
}

export interface inputs extends genderInput {
    placeholder?: string;
    labelIcon?: string;
}

export interface IStorage {
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
    removeItem(key: string): void;
}

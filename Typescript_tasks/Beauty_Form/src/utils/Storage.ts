import { IStorage } from "../Interface/inteface"

export default class Storage <T extends string>{
    private readonly _storage: IStorage
   
    public constructor(getStorage = (): IStorage => window.localStorage) {
        this._storage = getStorage()
    }

    get(key: T): string[] | ""{
        let data = this._storage.getItem(key)
        return (data)? JSON.parse(data): ""
    
    }

    set(key: T, value: string[]): void {
        this._storage.setItem(key, JSON.stringify(value))
    }

    clearItem(key: T): void {
        this._storage.removeItem(key)
    }

    clear(keys: T[]): void {
        keys.forEach((key) => this.clearItem(key))
    }
}
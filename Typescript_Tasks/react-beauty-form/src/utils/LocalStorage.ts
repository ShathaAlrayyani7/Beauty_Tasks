import { IStorage } from "../Interface/inteface"

export default class Storage <T extends string>{
    private readonly _storage: IStorage
   
    public constructor(getStorage = (): IStorage => window.localStorage) {
        this._storage = getStorage()
    }

    protected get(key: T): string | null {
        return this._storage.getItem(key)
    }

    protected set(key: T, value: string): void {
        this._storage.setItem(key, value)
    }

    protected clearItem(key: T): void {
        this._storage.removeItem(key)
    }

    protected clear(keys: T[]): void {
        keys.forEach((key) => this.clearItem(key))
    }
}
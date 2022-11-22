
export default class Option{
    private _option : HTMLOptionElement
    constructor(option: string){
        this._option = document.createElement('option')
        this._option.innerText = option
    }

    get option(){
        return this._option
    }
}
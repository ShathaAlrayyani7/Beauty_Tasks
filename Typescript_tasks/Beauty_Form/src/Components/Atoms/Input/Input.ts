export default class Input {

    private _input : HTMLInputElement

    constructor(inputType : string, inputName: string, event?:EventListener,inputPlaceholder?: string) {

        this._input = document.createElement('input')
        this._input.setAttribute('type', inputType)
        this._input.setAttribute('name', inputName);
        this._input.setAttribute('class','input');
        (inputPlaceholder)? this._input.setAttribute('placeholder',inputPlaceholder) :'';
        (event)? this._input.addEventListener('input',event): "";
    }

    get input() {
        return this._input
    }

}
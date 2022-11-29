import { Buttons } from "../../../Constants/Enums";

export default class Button {
    
    private _button : HTMLButtonElement

    constructor(text:Buttons) {
        this._button = document.createElement('button');
        this._button.setAttribute('class','button');
        this._button.setAttribute('type', 'submit');
        this._button.innerText = text;
    }

    get button(){
        return this._button
    }

}
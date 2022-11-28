import { FormTitles } from "../../../Constants/Enums"

export default class FormTitle{
    private _formTitle : HTMLHeadingElement
    
    constructor(text:FormTitles){
        this._formTitle = document.createElement('h1')
        this._formTitle.setAttribute('class','title')
        this._formTitle.innerText = text
    }

    get formTitle(){
        return this._formTitle
    }
}


import Input from "../../Atoms/Input/Input"
import Label from "../../Atoms/Label/Label"
import ValidationText from "../../Atoms/ValidationText/ValidationText"
export default class FormItem{
    private _formItem : HTMLDivElement
    constructor(labelFor:string, labelText:string, iconSrc:string, inputType:string , inputName:string, inputPlaceholder:string, inputValue:string){

        this._formItem = document.createElement('div')
        this._formItem.setAttribute('class',`formItem ${labelFor}`)
        const item = document.createElement('div')
        item.setAttribute('class','item')
        const {label} = new Label(labelFor, labelText,iconSrc)
        const {input} = new Input(inputType,inputName,inputPlaceholder,inputValue)
        const {validationText} = new ValidationText(labelFor)
        item.appendChild(label)
        item.appendChild(input)
        this._formItem.appendChild(item)
        this._formItem.appendChild(validationText)
        
    }

    get formItem(){
        return this._formItem
    }

}
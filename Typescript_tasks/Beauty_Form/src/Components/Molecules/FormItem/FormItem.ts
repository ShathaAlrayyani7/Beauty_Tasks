

import { inputs } from "../../../Interface/inteface"
import Input from "../../Atoms/Input/Input"
import Label from "../../Atoms/Label/Label"
import ValidationText from "../../Atoms/ValidationText/ValidationText"
export default class FormItem{
    private _formItem : HTMLDivElement
    constructor(data:inputs){

        this._formItem = document.createElement('div')
        this._formItem.setAttribute('class',`formItem `)
        const item = document.createElement('div')
        item.setAttribute('class','item')
        const label = new Label(data.labelText,data.labelIcon).label
        const input = new Input(data.type,data.name,data.event,data.placeholder).input
        const validText = new ValidationText(data.name).validationText
        item.appendChild(label)
        item.appendChild(input)
        this._formItem.appendChild(item)
        this._formItem.appendChild(validText)
        
    }

    get formItem(){
        return this._formItem
    }

}
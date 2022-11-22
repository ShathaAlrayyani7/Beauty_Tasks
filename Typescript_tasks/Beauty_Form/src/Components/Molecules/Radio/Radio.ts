import { data } from "../../../Interface/inteface"
import Input from "../../Atoms/Input/Input"
import Label from "../../Atoms/Label/Label"

export default class Radio{

    private _radio : HTMLDivElement
    constructor(obj:data){

        this._radio = document.createElement('div')
        this._radio.setAttribute('class','radio')
        
        for(let i = 0 ; i < obj.input.length;i++){
            const radioItem = document.createElement('div')
            const {input} = new Input(obj.input[i].type, obj.input[i].name, obj.input[i].value)
            const {label} = new Label(obj.label[i].for, obj.label[i].text)
            radioItem.appendChild(input)
            radioItem.appendChild(label)
            this._radio.appendChild(radioItem)
        } 
    }

    get radio(){
        return this._radio
    }
}
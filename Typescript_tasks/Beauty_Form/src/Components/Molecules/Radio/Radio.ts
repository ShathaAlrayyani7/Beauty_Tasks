import Input from "../../Atoms/Input/Input"
import Label from "../../Atoms/Label/Label"
import { genderInput  } from "../../../Interface/inteface"

export default class Radio{

    private _radio : HTMLDivElement
    constructor(inputs:genderInput[]){

        this._radio = document.createElement('div')
        this._radio.setAttribute('class','radio')
        for(let i = 0 ; i < inputs.length;i++){
            let radioItem = document.createElement('div')
            const input = new Input(inputs[i].type, inputs[i].name).input
            const label = new Label(inputs[i].labelText).label
            input.className = "radio-input"
            radioItem.appendChild(input)
            radioItem.appendChild(label)
            this._radio.appendChild(radioItem)
        } 
    }

    get radio(){
        return this._radio
    }
}
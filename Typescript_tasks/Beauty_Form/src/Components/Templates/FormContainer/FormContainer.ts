
import { formData } from "../../../Interface/inteface"
import BackgroundImg from "../../Molecules/BackgroundImg/BackgroundImg"
import Form from "../../Organisms/Form/Form"

export default class FormContainer{
    private _formContainer: HTMLDivElement
    constructor(type:string, obj:formData){
        this._formContainer = document.createElement('div')

        const {form} = new Form(type, obj)
        this._formContainer.appendChild(form)
        const {backgroundImg} = new BackgroundImg(type)
        this._formContainer.setAttribute('class',`formContainer ${type}`)
        this._formContainer.appendChild(backgroundImg)
        
    }

    get formContainer(){
        return this._formContainer
    }
}
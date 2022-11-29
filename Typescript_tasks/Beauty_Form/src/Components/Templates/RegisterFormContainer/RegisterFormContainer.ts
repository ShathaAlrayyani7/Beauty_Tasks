
import RegisterForm from "../../Organisms/RegisterForm/RegisterForm"

export default class RegisterFormContainer{
    private _formContainer: HTMLDivElement
    constructor(){
        this._formContainer = document.createElement('div')
        let form = new RegisterForm().registerForm
        this._formContainer.appendChild(form)
        this._formContainer.setAttribute('class',`formContainer-register`)
    }

    get RegisterFormContainer(){
        return this._formContainer
    }
}
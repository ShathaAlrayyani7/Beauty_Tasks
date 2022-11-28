
import BackgroundImg from "../../Molecules/BackgroundImg/BackgroundImg"
import LoginForm from "../../Organisms/LoginForm/LoginForm"

export default class LoginFormContainer{
    private _formContainer: HTMLDivElement
    constructor(){
        this._formContainer = document.createElement('div')

        const form = new LoginForm().loginForm
        this._formContainer.appendChild(form)
        const {backgroundImg} = new BackgroundImg('login')
        this._formContainer.setAttribute('class',`formContainer-login`)
        this._formContainer.appendChild(backgroundImg)
        
    }

    get loginFormContainer(){
        return this._formContainer
    }
}
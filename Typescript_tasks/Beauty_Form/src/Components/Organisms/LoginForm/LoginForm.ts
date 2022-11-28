import { validSignIn } from "../../../utils/validation";
import { Buttons, FormTitles, SwitchLinks } from "../../../Constants/Enums";
import Form from "../Form/Form";
import { loginInputs } from "../../../Constants/loginInputs";
import RegisterFormContainer from "../../Templates/RegisterFormContainer/RegisterFormContainer";


export default class LoginForm extends Form{
    constructor(){
        super(Buttons.login,FormTitles.loginType,SwitchLinks.login,loginInputs)
        this._form.setAttribute('class','login-form')
        this._button.addEventListener('click', (e)=>this.submit(e));
        this._link.addEventListener('click',this.registerForm);
    }

    get loginForm(){
        return this._form
    }

    submit = <html extends HTMLInputElement> (e : MouseEvent) =>{

        e.preventDefault()
        const email = document.getElementsByName(`email`)[0] as html
        const userName = document.getElementsByName('userName')[0] as html
        const psw = document.getElementsByName(`psw`)[0] as html
        if(validSignIn(email.value ,psw.value)){
            alert(`Hi ${userName.value}, Nice to see you again!`);
            return true
        }

    }

    registerForm = (e:MouseEvent)=>{
        e.preventDefault()
        const app = document.getElementsByClassName('app')[0]
        const form = document.getElementsByClassName('formContainer-login')[0]
        form.remove()
        let newForm = new RegisterFormContainer().RegisterFormContainer
        app.appendChild(newForm)
    }

}
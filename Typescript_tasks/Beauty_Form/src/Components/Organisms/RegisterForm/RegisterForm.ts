import { Buttons, FormTitles, SwitchLinks } from "../../../Constants/Enums";
import { registerInputs } from "../../../Constants/registerInputs";
import { validEmail, validPsw1, validPsw2, validUserName } from "../../../utils/validation";
import LoginFormContainer from "../../Templates/LoginFormContainer/LoginFormContainer";
import Form from "../Form/Form";

export default class RegisterForm extends Form{
    constructor(){
        super(Buttons.register,FormTitles.registerType,SwitchLinks.register,registerInputs)
        this._button.addEventListener('click', (e)=>this.register(e));
        this._form.setAttribute('class','register-form')
        this._link.addEventListener('click',this.loginForm);
    }

    get registerForm(){
        return this._form
    }

    register  = <html extends HTMLInputElement> (e: MouseEvent) => {
        e.preventDefault()
        const email = document.getElementsByName(`email`)[0] as html
        const user = document.getElementsByName(`userName`)[0] as html
        const psw1 = document.getElementsByName(`psw`)[0] as html
        const psw2 = document.getElementsByName(`psw`)[1] as html
        if(validEmail(email.value ) && validUserName(user.value ) && validPsw1(psw1.value ) && validPsw2(psw1.value ,psw2.value )){
            const keys = Object.keys(localStorage)
            if(!keys.includes(email.value)){
                localStorage.setItem(`${email.value }`, JSON.stringify([psw1.value , user.value ]))
            }
            else{
                alert("This email is used, please enter another email.\n if you have an acount please login")
            }
        }
        else{
            alert("Please complete the registration form")
        }
    }

    loginForm = (e:MouseEvent)=>{
        e.preventDefault()
        const app = document.getElementsByClassName('app')[0]
        const form = document.getElementsByClassName('formContainer-register')[0]
        form.remove()
        const newForm = new LoginFormContainer().loginFormContainer
        app.appendChild(newForm)
    }


 

}
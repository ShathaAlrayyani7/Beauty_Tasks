import RegisterFormContainer from "../Components/Templates/RegisterFormContainer/RegisterFormContainer"
import { validSignIn } from "./validation"

export const submit = <html extends HTMLInputElement> (e : MouseEvent) => {

    e.preventDefault()
    const email = document.getElementsByName(`email`)[0] as html
    const userName = document.getElementsByName('userName')[0] as html
    const psw = document.getElementsByName(`psw`)[0] as html
    if(validSignIn(email.value ,psw.value)){
        alert(`Hi ${userName.value}, Nice to see you again!`);
        return true
    }

}

export const registerForm = (e:MouseEvent)=> {
    e.preventDefault()
    const app = document.getElementsByClassName('app')[0]
    const form = document.getElementsByClassName('formContainer-login')[0]
    form.remove()
    let newForm = new RegisterFormContainer().RegisterFormContainer
    app.appendChild(newForm)
}

export const loginValidation = <html extends HTMLInputElement>() => {
    const email = document.getElementsByName('email')[0] as html
    
    const psw = document.getElementsByName('psw')[0] as html
    validSignIn(email.value, psw.value)

}
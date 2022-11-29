import LoginFormContainer from "../Components/Templates/LoginFormContainer/LoginFormContainer"
import { validEmail, validPsw1, validPsw2, validUserName } from "./validation"



export const register  = <html extends HTMLInputElement> (e: MouseEvent) => {
    e.preventDefault()
    const email = document.getElementsByName(`email`)[0] as html
    const user = document.getElementsByName(`userName`)[0] as html
    const psw1 = document.getElementsByName(`psw`)[0] as html
    const psw2 = document.getElementsByName(`psw`)[1] as html
    if(validEmail(email.value ) && validUserName(user.value ) && validPsw1(psw1.value ) && validPsw2(psw1.value ,psw2.value )){
        let storage = new Storage()
        if(storage.get(email.value)){
            storage.set(email.value , [psw1.value , user.value ])
        }
        else{
            alert("This email is used, please enter another email.\n if you have an acount please login")
        }
    }else{
        alert("Please complete the registration form")
    }
}

export const registerValidation = <html extends HTMLInputElement>() => {
    const email = document.getElementsByName('email')[0] as html
    const userName = document.getElementsByName('userName')[0] as html
    const psw1 = document.getElementsByName('psw')[0] as html
    const psw2 = document.getElementsByName('psw')[1] as html
    validEmail(email.value)
    validUserName(userName.value)
    validPsw1(psw1.value)
    validPsw2(psw1.value, psw2.value)
}

export const loginForm = (e:MouseEvent)=> {
    e.preventDefault()
    const app = document.getElementsByClassName('app')[0]
    const form = document.getElementsByClassName('formContainer-register')[0]
    form.remove()
    const newForm = new LoginFormContainer().loginFormContainer
    app.appendChild(newForm)
}

import {
validEmail,
validPsw1,
validPsw2,
validSignIn,
validUserName
} from "../../../utils/validation"


export default class Input{
    private _input : HTMLInputElement
    constructor(inputType : string, inputName: string, inputValue: string,
        inputPlaceholder?: string){
        this._input = document.createElement('input')
        this._input.setAttribute('type', inputType)
        this._input.setAttribute('name', inputName);
        (inputPlaceholder) ? this._input.setAttribute('placeholder',inputPlaceholder) :''
        this._input.setAttribute('value',inputValue)
        this._input.setAttribute('class',`input-${inputName}`)
        this._input.addEventListener('input',this.validation)
    }

    get input(){
        return this._input
    }

    validation = <html extends HTMLInputElement>() => {
        const form = document.getElementsByClassName('form')[0]
        if(form .className == 'form login'){
            const email= document.getElementsByClassName('input-email')[0] as html
            const psw = document.getElementsByClassName('input-psw')[0] as html
            validSignIn(email.value, psw.value)
        }
        else{
            const email = document.getElementsByClassName('input-email')[0] as html
            validEmail(email.value)
            const userName = document.getElementsByClassName('input-userName')[0] as html
            validUserName(userName.value)
            const psw1 = document.getElementsByClassName('input-psw')[0] as html
            validPsw1(psw1.value)
            const psw2 = document.getElementsByClassName('input-psw')[1] as html
            validPsw2(psw1.value, psw2.value)
        }
    }
}
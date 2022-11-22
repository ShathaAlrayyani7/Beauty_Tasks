import {
validEmail,
validPsw1,
validPsw2,
validSignIn,
validUserName
} from '../../../utils/validation'

export default class Button{
    private _buttonContainer : HTMLDivElement
    constructor(cls: string ,type: string,text: string){
        this._buttonContainer = document.createElement('div')
        const button = document.createElement('button')

        this._buttonContainer.setAttribute('class','buttonContainer')
        button.setAttribute('class',cls)
        button.setAttribute('type', type)
        button.innerText = text
        this._buttonContainer.appendChild(button)
        if(text == 'Login'){
            button.addEventListener( 'click', this.submit)
        }else{
            button.addEventListener( 'click', this.register)
        }
    }

    get button(){
        return this._buttonContainer
    }

    submit = <html extends HTMLInputElement> (e : MouseEvent) =>{

        e.preventDefault()
        const email = document.getElementsByClassName(`input-email`)[0] as html
        // const userName = document.getElementsByClassName('input-userName')[0] as html
        const psw = document.getElementsByClassName(`input-psw`)[0] as html
        if(validSignIn(email.value ,psw.value)){
            return          
        }

    }

    register  = <html extends HTMLInputElement> (e: MouseEvent) => {

        e.preventDefault()

        const email = document.getElementsByClassName(`input-email`)[0] as html
        const user = document.getElementsByClassName(`input-userName`)[0] as html
        const psw1 = document.getElementsByClassName(`input-psw`)[0] as html
        const psw2 = document.getElementsByClassName(`input-psw`)[1] as html

        if(validEmail(email.value ) && validUserName(user.value ) && validPsw1(psw1.value ) && validPsw2(psw1.value ,psw2.value )){
            localStorage.setItem(`${email.value }`, JSON.stringify([psw1.value , user.value ]))
        }

    }

}

import { login } from '../../../Constants/login'
import {register} from '../../../Constants/register'
import FormContainer from '../../Templates/FormContainer/FormContainer'

export default class SwitchLink{
    private _text :HTMLDivElement
    constructor(type:string){
        this._text = document.createElement('div')
        const link = document.createElement('a')
        this._text.setAttribute('class','text')
        link.setAttribute('class','link')
        link.innerText = 'Click Here'
        
        if(type == 'login'){
            this._text.innerText = 'Don\'t have an account? ' 
            link.addEventListener('click',this.registerForm)
        }else{
            this._text.innerText = 'Have an account already? '
            link.addEventListener('click',this.loginForm)
        }
        
        this._text.appendChild(link)
    }
    
    get switchLink(){
        return this._text
    }
    registerForm = (e:MouseEvent)=>{
        e.preventDefault()
        const app = document.getElementsByClassName('app')[0]
        const form = document.getElementsByClassName('formContainer login')[0]
        form.remove()
        const newForm = new FormContainer('register',register).formContainer
        app.appendChild(newForm)
        }

    loginForm = (e:MouseEvent)=>{
        e.preventDefault()
        const app = document.getElementsByClassName('app')[0]
        const form = document.getElementsByClassName('formContainer register')[0]
        form.remove()
        const newForm = new FormContainer('login',login).formContainer
        app.appendChild(newForm)
    }
}
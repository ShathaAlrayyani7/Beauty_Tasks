
import Button from '../../Atoms/Button/Button'
import FormTitle from '../../Atoms/FormTitle/FormTitle'
import SwitchLink from '../../Atoms/SwitchLink/SwitchLink'
import { Buttons, FormTitles, SwitchLinks } from '../../../Constants/Enums'
import FormItem from '../../Molecules/FormItem/FormItem'
import { inputs } from '../../../Interface/inteface'

export default class Form{

    protected _form : HTMLFormElement
    protected _title: HTMLHeadingElement;
    protected _button: HTMLButtonElement;
    protected _link: HTMLDivElement;
    constructor( buttonFor:Buttons,text:FormTitles,switchText:SwitchLinks,obj:inputs[]){
        this._form = document.createElement('form')
        this._title = new FormTitle(text).formTitle
        this._form.appendChild(this._title);
        for(let i = 0 ; i < obj.length; i++){
            let formItem = new FormItem(obj[i]).formItem
            this._form.appendChild(formItem)
        }
        this._button = new Button(buttonFor).button
        this._link = new SwitchLink(switchText).switchLink
        this._form.appendChild(this._button);
        this._form.appendChild(this._link);

    }

    get form(){
        return this._form
    }

}
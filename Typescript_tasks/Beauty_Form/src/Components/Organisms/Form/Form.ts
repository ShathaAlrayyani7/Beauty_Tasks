
import { country_list } from '../../../Constants/countries'
import { gender } from '../../../Constants/gender'
import { formData } from '../../../Interface/inteface'
import Button from '../../Atoms/Button/Button'
import FormTitle from '../../Atoms/FormTitle/FormTitle'
import SwitchLink from '../../Atoms/SwitchLink/SwitchLink'
import FormItem from '../../Molecules/FormItem/FormItem'
import Radio from '../../Molecules/Radio/Radio'
import Select from '../../Molecules/Select/Select'

export default class Form{
    private _form : HTMLFormElement
    constructor(type: string, obj:formData){
        this._form = document.createElement('form')
        this._form.setAttribute('class', `form ${type}`)
        const title = new FormTitle(type).formTitle

        this._form.appendChild(title)

        for (let i = 0; i < obj.label.length; i++) {

            const {formItem} = new FormItem(
                obj.label[i].for,
                obj.label[i].text,
                obj.label[i].img,
                obj.input[i].type,
                obj.input[i].name,
                obj.input[i].value,
                obj.input[i].placeholder,
            )
            this._form.appendChild(formItem)
        }

        if (type == 'register') {
            const country = new Select(country_list, 'Select a Country').select
            this._form.appendChild(country)
            const {radio} = new Radio(gender)
            this._form.appendChild(radio)
        }
        const {button} = new Button(
            obj.button.class,
            obj.button.type,
            obj.button.text,)

        const link = new SwitchLink(type).switchLink

        this._form.appendChild(link)
        this._form.appendChild(button)
    }


    get form(){
        return this._form
    }

}
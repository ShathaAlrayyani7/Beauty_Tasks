import Button from '../../Atoms/Button/Button';
import FormItem from '../../Molecules/FormItem/FormItem';
import FormTitle from '../../Atoms/FormTitle/FormTitle';
import SwitchLink from '../../Atoms/SwitchLink/SwitchLink';
import { country_list } from '../../../Constants/countries';
import Select from '../../Molecules/Select/Select';
import Radio from '../../Molecules/Radio/Radio';
import { gender } from '../../../Constants/gender';
var Form = (function () {
    function Form(type, obj) {
        this._form = document.createElement('form');
        this._form.setAttribute('class', "form ".concat(type));
        var title = new FormTitle(type).formTitle;
        this._form.appendChild(title);
        for (var i = 0; i < obj.label.length; i++) {
            var formItem = new FormItem(obj.label[i].for, obj.label[i].text, obj.label[i].img, obj.input[i].type, obj.input[i].name, obj.input[i].value, obj.input[i].placeholder).formItem;
            this._form.appendChild(formItem);
        }
        if (type == 'register') {
            var country = new Select(country_list, 'Select a Country').select;
            this._form.appendChild(country);
            var radio = new Radio(gender).radio;
            this._form.appendChild(radio);
        }
        var button = new Button(obj.button.class, obj.button.type, obj.button.text).button;
        var link = new SwitchLink(type).switchLink;
        this._form.appendChild(link);
        this._form.appendChild(button);
    }
    Object.defineProperty(Form.prototype, "form", {
        get: function () {
            return this._form;
        },
        enumerable: false,
        configurable: true
    });
    return Form;
}());
export default Form;

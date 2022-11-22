var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Form_form;
import Button from '../../Atoms/Button/Button.js';
import FormItem from '../../Molecules/FormItem/FormItem.js';
import FormTitle from '../../Atoms/FormTitle/FormTitle.js';
import SwitchLink from '../../Atoms/SwitchLink/SwitchLink.js';
import { country_list } from '../../../Constants/countries.js';
import Select from '../../Molecules/Select/Select.js';
import Radio from '../../Molecules/Radio/Radio.js';
import { gender } from '../../../Constants/gender.js';
var Form = (function () {
    function Form(type, obj) {
        _Form_form.set(this, void 0);
        __classPrivateFieldSet(this, _Form_form, document.createElement('form'), "f");
        __classPrivateFieldGet(this, _Form_form, "f").setAttribute('class', "form ".concat(type));
        var title = new FormTitle(type).formTitle;
        __classPrivateFieldGet(this, _Form_form, "f").appendChild(title);
        for (var i = 0; i < obj.label.length; i++) {
            var formItem = new FormItem(obj.label[i].for, obj.label[i].text, obj.label[i].img, obj.input[i].type, obj.input[i].name, obj.input[i].value, obj.input[i].placeholder).formItem;
            __classPrivateFieldGet(this, _Form_form, "f").appendChild(formItem);
        }
        if (type == 'register') {
            var country = new Select(country_list, 'Select a Country').select;
            __classPrivateFieldGet(this, _Form_form, "f").appendChild(country);
            var radio = new Radio(gender).radio;
            __classPrivateFieldGet(this, _Form_form, "f").appendChild(radio);
        }
        var button = new Button(obj.button.class, obj.button.type, obj.button.text).button;
        var link = new SwitchLink(type).switchLink;
        __classPrivateFieldGet(this, _Form_form, "f").appendChild(link);
        __classPrivateFieldGet(this, _Form_form, "f").appendChild(button);
    }
    Object.defineProperty(Form.prototype, "form", {
        get: function () {
            return __classPrivateFieldGet(this, _Form_form, "f");
        },
        enumerable: false,
        configurable: true
    });
    return Form;
}());
export default Form;
_Form_form = new WeakMap();

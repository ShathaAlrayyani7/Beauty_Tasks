'use strict';
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
var _FormItem_formItem;
import Input from "../../Atoms/Input/Input.js";
import Label from "../../Atoms/Label/Label.js";
import ValidationText from "../../Atoms/ValidationText/ValidationText.js";
var FormItem = (function () {
    function FormItem(labelFor, labelText, iconSrc, inputType, inputName, inputPlaceholder, inputValue) {
        _FormItem_formItem.set(this, void 0);
        __classPrivateFieldSet(this, _FormItem_formItem, document.createElement('div'), "f");
        __classPrivateFieldGet(this, _FormItem_formItem, "f").setAttribute('class', "formItem ".concat(labelFor));
        var item = document.createElement('div');
        item.setAttribute('class', 'item');
        var label = new Label(labelFor, labelText, iconSrc).label;
        var input = new Input(inputType, inputName, inputPlaceholder, inputValue).input;
        var validationText = new ValidationText(labelFor).validationText;
        item.appendChild(label);
        item.appendChild(input);
        __classPrivateFieldGet(this, _FormItem_formItem, "f").appendChild(item);
        __classPrivateFieldGet(this, _FormItem_formItem, "f").appendChild(validationText);
    }
    Object.defineProperty(FormItem.prototype, "formItem", {
        get: function () {
            return __classPrivateFieldGet(this, _FormItem_formItem, "f");
        },
        enumerable: false,
        configurable: true
    });
    return FormItem;
}());
export default FormItem;
_FormItem_formItem = new WeakMap();

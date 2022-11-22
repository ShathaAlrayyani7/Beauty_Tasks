import Input from "../../Atoms/Input/Input";
import Label from "../../Atoms/Label/Label";
import ValidationText from "../../Atoms/ValidationText/ValidationText";
var FormItem = (function () {
    function FormItem(labelFor, labelText, iconSrc, inputType, inputName, inputPlaceholder, inputValue) {
        this._formItem = document.createElement('div');
        this._formItem.setAttribute('class', "formItem ".concat(labelFor));
        var item = document.createElement('div');
        item.setAttribute('class', 'item');
        var label = new Label(labelFor, labelText, iconSrc).label;
        var input = new Input(inputType, inputName, inputPlaceholder, inputValue).input;
        var validationText = new ValidationText(labelFor).validationText;
        item.appendChild(label);
        item.appendChild(input);
        this._formItem.appendChild(item);
        this._formItem.appendChild(validationText);
    }
    Object.defineProperty(FormItem.prototype, "formItem", {
        get: function () {
            return this._formItem;
        },
        enumerable: false,
        configurable: true
    });
    return FormItem;
}());
export default FormItem;

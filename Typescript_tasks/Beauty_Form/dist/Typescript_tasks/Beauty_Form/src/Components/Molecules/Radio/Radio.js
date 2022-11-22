import Input from "../../Atoms/Input/Input";
import Label from "../../Atoms/Label/Label";
var Radio = (function () {
    function Radio(obj) {
        this._radio = document.createElement('div');
        this._radio.setAttribute('class', 'radio');
        for (var i = 0; i < obj.input.length; i++) {
            var radioItem = document.createElement('div');
            var input = new Input(obj.input[i].type, obj.input[i].name, obj.input[i].value).input;
            var label = new Label(obj.label[i].for, obj.label[i].text).label;
            radioItem.appendChild(input);
            radioItem.appendChild(label);
            this._radio.appendChild(radioItem);
        }
    }
    Object.defineProperty(Radio.prototype, "radio", {
        get: function () {
            return this._radio;
        },
        enumerable: false,
        configurable: true
    });
    return Radio;
}());
export default Radio;

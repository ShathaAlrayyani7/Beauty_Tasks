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
var _Radio_radio;
import Input from "../../Atoms/Input/Input.js";
import Label from "../../Atoms/Label/Label.js";
var Radio = (function () {
    function Radio(obj) {
        _Radio_radio.set(this, void 0);
        __classPrivateFieldSet(this, _Radio_radio, document.createElement('div'), "f");
        __classPrivateFieldGet(this, _Radio_radio, "f").setAttribute('class', 'radio');
        for (var i = 0; i < obj.input.length; i++) {
            var radioItem = document.createElement('div');
            var input = new Input(obj.input[i].type, obj.input[i].name, obj.input[i].value).input;
            var label = new Label(obj.label[i].for, obj.label[i].text).label;
            radioItem.appendChild(input);
            radioItem.appendChild(label);
            __classPrivateFieldGet(this, _Radio_radio, "f").appendChild(radioItem);
        }
    }
    Object.defineProperty(Radio.prototype, "radio", {
        get: function () {
            return __classPrivateFieldGet(this, _Radio_radio, "f");
        },
        enumerable: false,
        configurable: true
    });
    return Radio;
}());
export default Radio;
_Radio_radio = new WeakMap();

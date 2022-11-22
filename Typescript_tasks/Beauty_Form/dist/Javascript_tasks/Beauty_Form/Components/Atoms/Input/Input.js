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
var _Input_input;
import { validEmail, validPsw1, validPsw2, validSignIn, validUserName } from "../../../utils/validation.js";
var Input = (function () {
    function Input(inputType, inputName, inputValue, inputPlaceholder) {
        if (inputPlaceholder === void 0) { inputPlaceholder = ''; }
        var _a;
        _Input_input.set(this, void 0);
        this.validation = function () {
            var form = document.getElementsByClassName('form')[0];
            if (form.className == 'form login') {
                var email = document.getElementsByClassName('input-email')[0].value;
                var psw = document.getElementsByClassName('input-psw')[0].value;
                validSignIn(email, psw);
            }
            else {
                var email = document.getElementsByClassName('input-email')[0].value;
                validEmail(email);
                var userName = document.getElementsByClassName('input-userName')[0].value;
                validUserName(userName);
                var psw1 = document.getElementsByClassName('input-psw')[0].value;
                validPsw1(psw1);
                var psw2 = document.getElementsByClassName('input-psw')[1].value;
                validPsw2(psw1, psw2);
            }
        };
        __classPrivateFieldSet(this, _Input_input, document.createElement('input'), "f");
        __classPrivateFieldGet(this, _Input_input, "f").setAttribute('type', inputType);
        __classPrivateFieldGet(this, _Input_input, "f").setAttribute('name', inputName);
        (_a = __classPrivateFieldGet(this, _Input_input, "f").setAttribute('placeholder', inputPlaceholder)) !== null && _a !== void 0 ? _a : '';
        __classPrivateFieldGet(this, _Input_input, "f").setAttribute('value', inputValue);
        __classPrivateFieldGet(this, _Input_input, "f").setAttribute('class', "input-".concat(inputName));
        __classPrivateFieldGet(this, _Input_input, "f").addEventListener('input', this.validation);
    }
    Object.defineProperty(Input.prototype, "input", {
        get: function () {
            return __classPrivateFieldGet(this, _Input_input, "f");
        },
        enumerable: false,
        configurable: true
    });
    return Input;
}());
export default Input;
_Input_input = new WeakMap();

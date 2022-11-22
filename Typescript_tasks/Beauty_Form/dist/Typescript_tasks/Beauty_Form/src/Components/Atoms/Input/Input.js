import { validEmail, validPsw1, validPsw2, validSignIn, validUserName } from "../../../utils/validation";
var Input = (function () {
    function Input(inputType, inputName, inputValue, inputPlaceholder) {
        this.validation = function () {
            var form = document.getElementsByClassName('form')[0];
            if (form.className == 'form login') {
                var email = document.getElementsByClassName('input-email')[0];
                var psw = document.getElementsByClassName('input-psw')[0];
                validSignIn(email.value, psw.value);
            }
            else {
                var email = document.getElementsByClassName('input-email')[0];
                validEmail(email.value);
                var userName = document.getElementsByClassName('input-userName')[0];
                validUserName(userName.value);
                var psw1 = document.getElementsByClassName('input-psw')[0];
                validPsw1(psw1.value);
                var psw2 = document.getElementsByClassName('input-psw')[1];
                validPsw2(psw1.value, psw2.value);
            }
        };
        this._input = document.createElement('input');
        this._input.setAttribute('type', inputType);
        this._input.setAttribute('name', inputName);
        (inputPlaceholder) ? this._input.setAttribute('placeholder', inputPlaceholder) : '';
        this._input.setAttribute('value', inputValue);
        this._input.setAttribute('class', "input-".concat(inputName));
        this._input.addEventListener('input', this.validation);
    }
    Object.defineProperty(Input.prototype, "input", {
        get: function () {
            return this._input;
        },
        enumerable: false,
        configurable: true
    });
    return Input;
}());
export default Input;

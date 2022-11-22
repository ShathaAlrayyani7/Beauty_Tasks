import { validEmail, validUserName, validPsw1, validPsw2, validSignIn } from '../../../utils/validation';
var Button = (function () {
    function Button(cls, type, text) {
        this.submit = function (e) {
            e.preventDefault();
            var email = document.getElementsByClassName("input-email")[0];
            var userName = document.getElementsByClassName('input-userName')[0];
            var psw = document.getElementsByClassName("input-psw")[0];
            if (validSignIn(email.value, psw.value)) {
                console.log("Hello ".concat(userName.value));
            }
            ;
        };
        this.register = function (e) {
            e.preventDefault();
            var email = document.getElementsByClassName("input-email")[0];
            var user = document.getElementsByClassName("input-userName")[0];
            var psw1 = document.getElementsByClassName("input-psw")[0];
            var psw2 = document.getElementsByClassName("input-psw")[1];
            if (validEmail(email.value) && validUserName(user.value) && validPsw1(psw1.value) && validPsw2(psw1.value, psw2.value)) {
                localStorage.setItem("".concat(email.value), JSON.stringify([psw1.value, user.value]));
            }
        };
        this._buttonContainer = document.createElement('div');
        var button = document.createElement('button');
        this._buttonContainer.setAttribute('class', 'buttonContainer');
        button.setAttribute('class', cls);
        button.setAttribute('type', type);
        button.innerText = text;
        this._buttonContainer.appendChild(button);
        if (text == 'Login') {
            button.addEventListener('click', this.submit);
        }
        else {
            button.addEventListener('click', this.register);
        }
    }
    Object.defineProperty(Button.prototype, "button", {
        get: function () {
            return this._buttonContainer;
        },
        enumerable: false,
        configurable: true
    });
    return Button;
}());
export default Button;

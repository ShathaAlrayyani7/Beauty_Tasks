'use strict';
import { validEmail, validUserName, validPsw1, validPsw2, validSignIn } from '../../../utils/validation.js';
var Button = (function () {
    function Button(cls, type, text) {
        this.submit = function (e) {
            e.preventDefault();
            var email = document.getElementsByClassName("input-email")[0].value;
            var psw = document.getElementsByClassName("input-psw")[0].value;
            validSignIn(email, psw);
        };
        this.register = function (e) {
            e.preventDefault();
            var email = document.getElementsByClassName("input-email")[0].value;
            validEmail(email);
            var user = document.getElementsByClassName("input-userName")[0].value;
            validUserName(user);
            var psw1 = document.getElementsByClassName("input-psw")[0].value;
            validPsw1(psw1);
            var psw2 = document.getElementsByClassName("input-psw")[1].value;
            validPsw2(psw1, psw2);
            if (validEmail(email) && validUserName(user) && validPsw1(psw1) && validPsw2(psw1, psw2)) {
                localStorage.setItem("".concat(email), JSON.stringify([psw1, user]));
            }
        };
        this.buttonContainer = document.createElement('div');
        var button = document.createElement('button');
        this.buttonContainer.setAttribute('class', 'buttonContainer');
        button.setAttribute('class', cls);
        button.setAttribute('type', type);
        button.innerText = text;
        this.buttonContainer.appendChild(button);
        if (text == 'Login') {
            button.addEventListener('click', this.submit);
        }
        else {
            button.addEventListener('click', this.register);
        }
    }
    Object.defineProperty(Button.prototype, "button", {
        get: function () {
            return this.buttonContainer;
        },
        enumerable: false,
        configurable: true
    });
    return Button;
}());
export default Button;

import { login } from '../../../Constants/login';
import { register } from '../../../Constants/register';
import FormContainer from '../../Templates/FormContainer/FormContainer';
var SwitchLink = (function () {
    function SwitchLink(type) {
        this.registerForm = function (e) {
            e.preventDefault();
            var app = document.getElementsByClassName('app')[0];
            var form = document.getElementsByClassName('formContainer login')[0];
            form.remove();
            var newForm = new FormContainer('register', register).formContainer;
            app.appendChild(newForm);
        };
        this.loginForm = function (e) {
            e.preventDefault();
            var app = document.getElementsByClassName('app')[0];
            var form = document.getElementsByClassName('formContainer register')[0];
            form.remove();
            var newForm = new FormContainer('login', login).formContainer;
            app.appendChild(newForm);
        };
        this._text = document.createElement('div');
        var link = document.createElement('a');
        this._text.setAttribute('class', 'text');
        link.setAttribute('class', 'link');
        link.innerText = 'Click Here';
        if (type == 'login') {
            this._text.innerText = 'Don\'t have an account? ';
            link.addEventListener('click', this.registerForm);
        }
        else {
            this._text.innerText = 'Have an account already? ';
            link.addEventListener('click', this.loginForm);
        }
        this._text.appendChild(link);
    }
    Object.defineProperty(SwitchLink.prototype, "switchLink", {
        get: function () {
            return this._text;
        },
        enumerable: false,
        configurable: true
    });
    return SwitchLink;
}());
export default SwitchLink;

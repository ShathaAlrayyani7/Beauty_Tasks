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
var _SwitchLink_text;
import { login } from '../../../Constants/login.js';
import { register } from '../../../Constants/register.js';
import FormContainer from '../../Templates/FormContainer/FormContainer.js';
var SwitchLink = (function () {
    function SwitchLink(type) {
        _SwitchLink_text.set(this, void 0);
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
        __classPrivateFieldSet(this, _SwitchLink_text, document.createElement('div'), "f");
        var link = document.createElement('a');
        __classPrivateFieldGet(this, _SwitchLink_text, "f").setAttribute('class', 'text');
        link.setAttribute('class', 'link');
        link.innerText = 'Click Here';
        if (type == 'login') {
            __classPrivateFieldGet(this, _SwitchLink_text, "f").innerText = 'Don\'t have an account? ';
            link.addEventListener('click', this.registerForm);
        }
        else {
            __classPrivateFieldGet(this, _SwitchLink_text, "f").innerText = 'Have an account already? ';
            link.addEventListener('click', this.loginForm);
        }
        __classPrivateFieldGet(this, _SwitchLink_text, "f").appendChild(link);
    }
    Object.defineProperty(SwitchLink.prototype, "switchLink", {
        get: function () {
            return __classPrivateFieldGet(this, _SwitchLink_text, "f");
        },
        enumerable: false,
        configurable: true
    });
    return SwitchLink;
}());
export default SwitchLink;
_SwitchLink_text = new WeakMap();

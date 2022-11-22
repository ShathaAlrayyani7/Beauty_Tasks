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
var _FormContainer_formContainer;
import Form from "../../Organisms/Form/Form.js";
import BackgroundImg from "../../Molecules/BackgroundImg/BackgroundImg.js";
var FormContainer = (function () {
    function FormContainer(type, obj) {
        _FormContainer_formContainer.set(this, void 0);
        __classPrivateFieldSet(this, _FormContainer_formContainer, document.createElement('div'), "f");
        var form = new Form(type, obj).form;
        __classPrivateFieldGet(this, _FormContainer_formContainer, "f").appendChild(form);
        var backgroundImg = new BackgroundImg(type).backgroundImg;
        __classPrivateFieldGet(this, _FormContainer_formContainer, "f").setAttribute('class', "formContainer ".concat(type));
        __classPrivateFieldGet(this, _FormContainer_formContainer, "f").appendChild(backgroundImg);
    }
    Object.defineProperty(FormContainer.prototype, "formContainer", {
        get: function () {
            return __classPrivateFieldGet(this, _FormContainer_formContainer, "f");
        },
        enumerable: false,
        configurable: true
    });
    return FormContainer;
}());
export default FormContainer;
_FormContainer_formContainer = new WeakMap();

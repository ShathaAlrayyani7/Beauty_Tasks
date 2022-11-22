import Form from "../../Organisms/Form/Form";
import BackgroundImg from "../../Molecules/BackgroundImg/BackgroundImg";
var FormContainer = (function () {
    function FormContainer(type, obj) {
        this._formContainer = document.createElement('div');
        var form = new Form(type, obj).form;
        this._formContainer.appendChild(form);
        var backgroundImg = new BackgroundImg(type).backgroundImg;
        this._formContainer.setAttribute('class', "formContainer ".concat(type));
        this._formContainer.appendChild(backgroundImg);
    }
    Object.defineProperty(FormContainer.prototype, "formContainer", {
        get: function () {
            return this._formContainer;
        },
        enumerable: false,
        configurable: true
    });
    return FormContainer;
}());
export default FormContainer;

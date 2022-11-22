var FormTitle = (function () {
    function FormTitle(type) {
        this._formTitle = document.createElement('h1');
        this._formTitle.setAttribute('class', 'title');
        if (type == 'login') {
            this._formTitle.innerText = 'Login';
        }
        else {
            this._formTitle.innerText = 'Register';
        }
    }
    Object.defineProperty(FormTitle.prototype, "formTitle", {
        get: function () {
            return this._formTitle;
        },
        enumerable: false,
        configurable: true
    });
    return FormTitle;
}());
export default FormTitle;

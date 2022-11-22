var ValidationText = (function () {
    function ValidationText(type) {
        this._validationText = document.createElement('p');
        this._validationText.setAttribute('class', "valid ".concat(type));
    }
    Object.defineProperty(ValidationText.prototype, "validationText", {
        get: function () {
            return this._validationText;
        },
        enumerable: false,
        configurable: true
    });
    return ValidationText;
}());
export default ValidationText;

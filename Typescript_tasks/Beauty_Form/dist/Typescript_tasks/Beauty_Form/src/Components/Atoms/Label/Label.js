var Label = (function () {
    function Label(labelFor, labelText, iconSrc) {
        if (iconSrc === void 0) { iconSrc = ''; }
        this._label = document.createElement('label');
        this._label.setAttribute('for', labelFor);
        this._label.innerText = labelText;
        if (iconSrc) {
            var icon = document.createElement('img');
            icon.setAttribute('src', iconSrc);
            icon.setAttribute('class', 'iconImg');
            this._label.appendChild(icon);
        }
    }
    Object.defineProperty(Label.prototype, "label", {
        get: function () {
            return this._label;
        },
        enumerable: false,
        configurable: true
    });
    return Label;
}());
export default Label;

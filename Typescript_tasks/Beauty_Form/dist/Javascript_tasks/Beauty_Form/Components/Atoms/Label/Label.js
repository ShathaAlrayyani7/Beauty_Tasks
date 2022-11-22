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
var _Label_label;
var Label = (function () {
    function Label(labelFor, labelText, iconSrc) {
        if (iconSrc === void 0) { iconSrc = ''; }
        _Label_label.set(this, void 0);
        __classPrivateFieldSet(this, _Label_label, document.createElement('label'), "f");
        var icon = (iconSrc) ? document.createElement('img') : '';
        __classPrivateFieldGet(this, _Label_label, "f").setAttribute('for', labelFor);
        __classPrivateFieldGet(this, _Label_label, "f").innerText = labelText;
        iconSrc ? icon.setAttribute('src', iconSrc) : '';
        (iconSrc) ? icon.setAttribute('class', 'iconImg') : '';
        iconSrc ? __classPrivateFieldGet(this, _Label_label, "f").appendChild(icon) : '';
    }
    Object.defineProperty(Label.prototype, "label", {
        get: function () {
            return __classPrivateFieldGet(this, _Label_label, "f");
        },
        enumerable: false,
        configurable: true
    });
    return Label;
}());
export default Label;
_Label_label = new WeakMap();

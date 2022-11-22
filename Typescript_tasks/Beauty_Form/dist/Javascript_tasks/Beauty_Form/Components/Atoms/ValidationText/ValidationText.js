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
var _ValidationText_validationText;
var ValidationText = (function () {
    function ValidationText(type) {
        _ValidationText_validationText.set(this, void 0);
        __classPrivateFieldSet(this, _ValidationText_validationText, document.createElement('p'), "f");
        __classPrivateFieldGet(this, _ValidationText_validationText, "f").setAttribute('class', "valid ".concat(type));
    }
    Object.defineProperty(ValidationText.prototype, "validationText", {
        get: function () {
            return __classPrivateFieldGet(this, _ValidationText_validationText, "f");
        },
        enumerable: false,
        configurable: true
    });
    return ValidationText;
}());
export default ValidationText;
_ValidationText_validationText = new WeakMap();

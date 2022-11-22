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
var _Select_url, _Select_select;
import Option from "../../Atoms/Option/Option.js";
var Select = (function () {
    function Select(data, text) {
        _Select_url.set(this, 'https://restcountries.com/v2/all');
        _Select_select.set(this, void 0);
        __classPrivateFieldSet(this, _Select_select, document.createElement('select'), "f");
        __classPrivateFieldGet(this, _Select_select, "f").setAttribute('class', 'select');
        var option = new Option(text).option;
        __classPrivateFieldGet(this, _Select_select, "f").appendChild(option);
        for (var i = 0; i < data.length; i++) {
            var options = new Option(data[i]).option;
            __classPrivateFieldGet(this, _Select_select, "f").appendChild(options);
        }
    }
    Object.defineProperty(Select.prototype, "select", {
        get: function () {
            return __classPrivateFieldGet(this, _Select_select, "f");
        },
        enumerable: false,
        configurable: true
    });
    return Select;
}());
export default Select;
_Select_url = new WeakMap(), _Select_select = new WeakMap();

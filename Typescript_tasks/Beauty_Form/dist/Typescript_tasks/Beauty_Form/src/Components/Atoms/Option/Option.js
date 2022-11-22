var Option = (function () {
    function Option(option) {
        this._option = document.createElement('option');
        this._option.innerText = option;
    }
    Object.defineProperty(Option.prototype, "option", {
        get: function () {
            return this._option;
        },
        enumerable: false,
        configurable: true
    });
    return Option;
}());
export default Option;

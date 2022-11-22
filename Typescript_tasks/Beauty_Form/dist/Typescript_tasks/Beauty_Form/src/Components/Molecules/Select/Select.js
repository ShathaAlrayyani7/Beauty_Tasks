import Option from "../../Atoms/Option/Option";
var Select = (function () {
    function Select(data, text) {
        this._select = document.createElement('select');
        this._select.setAttribute('class', 'select');
        var option = new Option(text).option;
        this._select.appendChild(option);
        for (var i = 0; i < data.length; i++) {
            var options = new Option(data[i]).option;
            this._select.appendChild(options);
        }
    }
    Object.defineProperty(Select.prototype, "select", {
        get: function () {
            return this._select;
        },
        enumerable: false,
        configurable: true
    });
    return Select;
}());
export default Select;

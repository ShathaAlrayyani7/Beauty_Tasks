var LocalStorage = (function () {
    function LocalStorage() {
        this.storage = window.localStorage;
        console.log(storage);
    }
    Object.defineProperty(LocalStorage.prototype, "storage", {
        get: function () {
        },
        enumerable: false,
        configurable: true
    });
    return LocalStorage;
}());
export default LocalStorage;

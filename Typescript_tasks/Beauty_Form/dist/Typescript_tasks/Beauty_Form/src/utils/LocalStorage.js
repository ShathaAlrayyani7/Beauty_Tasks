var Storage = (function () {
    function Storage(getStorage) {
        if (getStorage === void 0) { getStorage = function () { return window.localStorage; }; }
        this._storage = getStorage();
    }
    Storage.prototype.get = function (key) {
        return this._storage.getItem(key);
    };
    Storage.prototype.set = function (key, value) {
        this._storage.setItem(key, value);
    };
    Storage.prototype.clearItem = function (key) {
        this._storage.removeItem(key);
    };
    Storage.prototype.clear = function (keys) {
        var _this = this;
        keys.forEach(function (key) { return _this.clearItem(key); });
    };
    return Storage;
}());
export default Storage;

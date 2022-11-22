'use strict';
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _BackgroundImg_url, _BackgroundImg_altUrl, _BackgroundImg_backgroundImg;
var BackgroundImg = (function () {
    function BackgroundImg(type, url) {
        if (url === void 0) { url = __classPrivateFieldGet(this, _BackgroundImg_url, "f"); }
        _BackgroundImg_url.set(this, 'https://blog.prezi.com/wp-content/uploads/2019/03/jason-leung-479251-unsplash.jpg');
        _BackgroundImg_altUrl.set(this, 'https://images.hdqwalls.com/wallpapers/hatake-kakashi-naruto-anime-q5.jpg');
        _BackgroundImg_backgroundImg.set(this, void 0);
        __classPrivateFieldSet(this, _BackgroundImg_backgroundImg, document.createElement('div'), "f");
        var background = document.createElement('img');
        __classPrivateFieldGet(this, _BackgroundImg_backgroundImg, "f").setAttribute('class', "Background ".concat(type));
        background.setAttribute('class', "backgroundImg ".concat(type));
        background.setAttribute('src', url);
        background.setAttribute('onerror', this.handleImageError);
        background.setAttribute('alt', 'Background Image');
        __classPrivateFieldGet(this, _BackgroundImg_backgroundImg, "f").appendChild(background);
    }
    Object.defineProperty(BackgroundImg.prototype, "backgroundImg", {
        get: function () {
            return __classPrivateFieldGet(this, _BackgroundImg_backgroundImg, "f");
        },
        enumerable: false,
        configurable: true
    });
    BackgroundImg.prototype.handleImageError = function () {
        this.src = __classPrivateFieldGet(this, _BackgroundImg_altUrl, "f");
    };
    return BackgroundImg;
}());
export default BackgroundImg;
_BackgroundImg_url = new WeakMap(), _BackgroundImg_altUrl = new WeakMap(), _BackgroundImg_backgroundImg = new WeakMap();

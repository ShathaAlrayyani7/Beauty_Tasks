var BackgroundImg = (function () {
    function BackgroundImg(type, url) {
        if (url === void 0) { url = 'https://blog.prezi.com/wp-content/uploads/2019/03/jason-leung-479251-unsplash.jpg'; }
        var _this = this;
        this._altUrl = 'https://images.hdqwalls.com/wallpapers/hatake-kakashi-naruto-anime-q5.jpg';
        this.handleImageError = function () {
            var img = document.getElementsByClassName('backgroundImg')[0];
            img.src = _this._altUrl;
        };
        this._backgroundImg = document.createElement('div');
        var background = document.createElement('img');
        this._backgroundImg.setAttribute('class', "Background ".concat(type));
        background.setAttribute('class', "backgroundImg ".concat(type));
        background.setAttribute('src', url);
        background.addEventListener('onerror', this.handleImageError);
        background.setAttribute('alt', 'Background Image');
        this._backgroundImg.appendChild(background);
    }
    Object.defineProperty(BackgroundImg.prototype, "backgroundImg", {
        get: function () {
            return this._backgroundImg;
        },
        enumerable: false,
        configurable: true
    });
    return BackgroundImg;
}());
export default BackgroundImg;

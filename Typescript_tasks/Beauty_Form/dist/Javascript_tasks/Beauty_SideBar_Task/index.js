"use strict";
var NavItem = (function () {
    function NavItem(url, img) {
        this.navItem = document.createElement('a');
        var icon = document.createElement('img');
        this.navItem.setAttribute('class', 'navItem');
        this.navItem.setAttribute('href', "".concat(url));
        icon.setAttribute('class', 'icon');
        icon.setAttribute('src', "".concat(img));
        this.navItem.appendChild(icon);
    }
    Object.defineProperty(NavItem.prototype, "NavItem", {
        get: function () {
            return this.navItem;
        },
        enumerable: false,
        configurable: true
    });
    return NavItem;
}());
var SideBar = (function () {
    function SideBar() {
        this.sideBar = document.createElement('div');
        this.sideBar.setAttribute('class', 'sideBar');
        var data = [
            {
                title: "Home", url: "https://en.wikipedia.org/wiki/Naruto", img: "./assets/icons8-naruto-sign-100.png"
            }, {
                title: "Add", url: "https://en.wikipedia.org/wiki/Naruto", img: "./assets/icons8-plus-100.png"
            }, {
                title: "Find", url: "https://en.wikipedia.org/wiki/Naruto", img: "./assets/icons8-folder-100.png"
            }, {
                title: "My Contact", url: "https://en.wikipedia.org/wiki/Naruto", img: "./assets/icons8-myspace-100.png"
            }, {
                title: "Support", url: "https://en.wikipedia.org/wiki/Naruto", img: "./assets/icons8-support-100.png"
            }, {
                title: "About Us", url: "https://en.wikipedia.org/wiki/Naruto", img: "./assets/icons8-info-100.png"
            }, {
                title: "Settings", url: "https://en.wikipedia.org/wiki/Naruto", img: "./assets/icons8-settings-100.png"
            }
        ];
        for (var i = 0; i < data.length; i++) {
            this.sideBar.append(new NavItem(data[i].url, data[i].img).NavItem);
        }
    }
    Object.defineProperty(SideBar.prototype, "SideBar", {
        get: function () {
            return this.sideBar;
        },
        enumerable: false,
        configurable: true
    });
    return SideBar;
}());
var ImgContainer = (function () {
    function ImgContainer() {
        var url = 'https://4kwallpapers.com/images/wallpapers/naruto-digital-art-black-background-amoled-3840x2160-5056.png';
        this.imgContainer = document.createElement('div');
        var background = document.createElement('img');
        this.imgContainer.setAttribute('class', 'ImgContainer');
        background.setAttribute('class', 'backgroundImg');
        background.setAttribute('src', url);
        background.setAttribute('onerror', "this.onerror= null,this.src='https://images.hdqwalls.com/wallpapers/hatake-kakashi-naruto-anime-q5.jpg'");
        background.setAttribute('alt', 'Background Image');
        this.imgContainer.appendChild(background);
    }
    Object.defineProperty(ImgContainer.prototype, "ImgContainer", {
        get: function () {
            return this.imgContainer;
        },
        enumerable: false,
        configurable: true
    });
    return ImgContainer;
}());
var Page = (function () {
    function Page() {
        this.renderPage = function () {
            var sideBar = new SideBar().SideBar;
            console.log(sideBar);
            var imgContainer = new ImgContainer().ImgContainer;
            var container = document.getElementsByClassName('container')[0];
            container.appendChild(sideBar);
            container.appendChild(imgContainer);
        };
        this.showSideBar = function (event) {
            var _a;
            var sideBar = document.getElementsByClassName('sideBar')[0];
            var classList = Object.values((_a = sideBar.classList) !== null && _a !== void 0 ? _a : {});
            ;
            var clientX = event;
            var screenWidth = document.documentElement.clientWidth;
            var sideBarWidth = (screenWidth * 10) / 100;
            var imgContainerWidth = screenWidth - sideBarWidth;
            if (clientX.clientX > imgContainerWidth) {
                sideBar.classList.add('show');
            }
            else {
                sideBar.classList.remove('show');
            }
        };
        var body = document.getElementsByTagName('body')[0];
        var container = document.createElement('div');
        container.setAttribute('class', 'container');
        container.addEventListener('mousemove', this.showSideBar);
        body.appendChild(container);
    }
    return Page;
}());
var page = new Page();
page.renderPage();

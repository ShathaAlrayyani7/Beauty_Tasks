'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Card = (function () {
    function Card(title, id, hex) {
        var _this = this;
        this.getCard = function () {
            return _this.card;
        };
        this.generateRandomColor = function () {
            var colorHex = [];
            for (var i = 0; i < 20; i++) {
                var maxVal = 0xFFFFFF;
                var randomNumber = Math.random() * maxVal;
                randomNumber = Math.floor(randomNumber);
                randomNumber = randomNumber.toString(16);
                var randColor = randomNumber.padStart(6, 0);
                colorHex.push("".concat(randColor.toUpperCase()));
            }
            return colorHex;
        };
        this.getName = function (hexArr) { return __awaiter(_this, void 0, void 0, function () {
            var url, response, data, colorName, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "https://www.thecolorapi.com/id?hex=".concat(hexArr);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4, fetch(url)];
                    case 2:
                        response = _a.sent();
                        return [4, response.json()];
                    case 3:
                        data = _a.sent();
                        colorName = data.name.value;
                        return [2, colorName];
                    case 4:
                        error_1 = _a.sent();
                        console.log("There is no data", error_1);
                        return [3, 5];
                    case 5: return [2];
                }
            });
        }); };
        this.addcolor = function () { return __awaiter(_this, void 0, void 0, function () {
            var classList, hex, colorName, index, count, name;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log("Hi");
                        classList = Object.values((_a = this.card.classList) !== null && _a !== void 0 ? _a : {});
                        console.log(classList);
                        hex = this.boxColor.getAttribute('data-color');
                        this.selectedColors = JSON.parse(localStorage.getItem('selectedColors'));
                        console.log(localStorage.getItem('selectedColors'));
                        return [4, this.getName(hex)];
                    case 1:
                        colorName = _b.sent();
                        console.log(colorName);
                        if (classList.includes('selected')) {
                            this.card.classList.remove('selected');
                            index = this.selectedColors.indexOf(colorName);
                            console.log(this.selectedColors);
                            console.log(this.selectedColors);
                            this.selectedColors.splice(index, 1);
                            this.cardButton.setAttribute("style", "background-color:cadetblue");
                            this.card.style.transform = "scale(1)";
                            this.card.style.transition = "all 1s";
                            this.cardButton.innerText = 'Select';
                        }
                        else {
                            this.card.classList.add('selected');
                            this.selectedColors.push(colorName);
                            this.cardButton.setAttribute("style", "background-color:lightgreen");
                            this.card.style.transform = "scale(1.07)";
                            this.card.style.transition = "all 1s";
                            this.cardButton.innerText = 'Selected';
                        }
                        count = document.getElementById('count');
                        name = document.getElementById('name');
                        name.innerHTML = "Selected Colors: ".concat(this.selectedColors);
                        count.innerHTML = "count of selected cards: ".concat(this.selectedColors.length);
                        localStorage.setItem("selectedColors", JSON.stringify(this.selectedColors));
                        console.log(this.selectedColors);
                        return [2];
                }
            });
        }); };
        this.card = document.createElement("div");
        this.cardButton = document.createElement("button");
        this.selectedColors = localStorage.setItem("selectedColors", JSON.stringify([]));
        this.boxColor = document.createElement("div");
        var cardTitle = document.createElement("h3");
        var cardText = document.createElement("h4");
        var info = document.createElement('div');
        this.card.setAttribute('class', 'card');
        this.card.setAttribute('id', "card".concat(id));
        this.boxColor.setAttribute('class', 'bgColor');
        this.boxColor.setAttribute('id', "box".concat(hex));
        this.boxColor.setAttribute('data-color', "".concat(hex));
        this.boxColor.setAttribute('style', "background-color:#".concat(hex));
        info.setAttribute('class', 'info');
        this.cardButton.setAttribute('class', 'select');
        this.cardButton.setAttribute('id', "btn".concat(hex));
        this.cardButton.setAttribute('style', 'background-color:cadetblue');
        this.cardButton.addEventListener("click", this.addcolor);
        this.cardButton.innerText = 'Sellect';
        cardTitle.innerText = title !== null && title !== void 0 ? title : '';
        cardText.innerText = title !== null && title !== void 0 ? title : '';
        info.appendChild(cardTitle);
        info.appendChild(cardText);
        this.card.appendChild(this.boxColor);
        this.card.appendChild(info);
        this.card.appendChild(this.cardButton);
    }
    return Card;
}());
var AllData = (function () {
    function AllData() {
        var _this = this;
        this.drawCard = function (cards) {
            var gridCards = document.getElementById('section');
            cards.forEach(function (card) {
                gridCards.append(new Card(card.title, card.id, card.hex).getCard());
            });
        };
        this.generateRandomColor = function () {
            var colorHex = [];
            for (var i = 0; i < 20; i++) {
                var maxVal = 0xFFFFFF;
                var randomNumber = Math.random() * maxVal;
                randomNumber = Math.floor(randomNumber);
                randomNumber = randomNumber.toString(16);
                var randColor = randomNumber.padStart(6, 0);
                colorHex.push("".concat(randColor.toUpperCase()));
            }
            return colorHex;
        };
        this.fetching = function () {
            var url = "https://jsonplaceholder.typicode.com/photos";
            fetch(url)
                .then(function (response) { return response.json(); })
                .then(function (data) {
                var cardsData = data.splice(0, 20);
                console.log(cardsData);
                var hex = _this.generateRandomColor();
                console.log(hex);
                for (var i = 0; i < cardsData.length; i++) {
                    cardsData[i]['hex'] = hex[i];
                }
                console.log(cardsData);
                _this.drawCard(cardsData);
            })
                .catch(function (err) { console.log(err); });
        };
        var body = document.getElementsByTagName('body')[0];
        var container = document.createElement('div');
        var cardCont = document.createElement('div');
        var header = document.createElement('header');
        var title = document.createElement('h2');
        var count = document.createElement('h3');
        var name = document.createElement('h3');
        container.setAttribute('class', 'container');
        header.setAttribute('class', 'header');
        cardCont.setAttribute('class', 'section');
        cardCont.setAttribute('id', 'section');
        count.setAttribute('class', 'infoText');
        count.setAttribute('id', 'count');
        name.setAttribute('class', 'infoText');
        name.setAttribute('id', 'name');
        title.innerText = 'Lorem Ipsum';
        count.innerHTML = "count of selected cards: 0";
        name.innerHTML = "Selected Colors:";
        header.appendChild(title);
        header.appendChild(count);
        header.appendChild(name);
        container.appendChild(header);
        container.appendChild(cardCont);
        body.appendChild(container);
    }
    return AllData;
}());
var list = new AllData();
list.fetching();

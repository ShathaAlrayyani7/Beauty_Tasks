'use strict';
var CurrentTime = (function () {
    function CurrentTime() {
        var date = new Date();
        this.secRatio = date.getSeconds() / 60;
        this.minRatio = (date.getMinutes()) / 60;
        this.hourRatio = (this.minRatio + date.getHours() - 0.05) / 12;
    }
    Object.defineProperty(CurrentTime.prototype, "currentTime", {
        get: function () {
            return { 'secRatio': this.secRatio, 'minRatio': this.minRatio, 'hourRatio': this.hourRatio };
        },
        enumerable: false,
        configurable: true
    });
    return CurrentTime;
}());
var Hand = (function () {
    function Hand() {
        var _this = this;
        this.time = function () {
            setTimeout(_this.setCurrentTime);
            setInterval(_this.setCurrentTime, 1000);
        };
        this.setCurrentTime = function () {
            var currentTime = new CurrentTime().currentTime;
            var secHand = document.getElementsByClassName('secHand')[0];
            var minHand = document.getElementsByClassName('minHand')[0];
            var hourHand = document.getElementsByClassName('hourHand')[0];
            secHand.style.setProperty('--rotation', currentTime.secRatio * 360);
            minHand.style.setProperty('--rotation', currentTime.minRatio * 360);
            hourHand.style.setProperty('--rotation', currentTime.hourRatio * 360);
        };
        this.handContainer = document.createElement('div');
        this.handContainer.setAttribute('class', 'hand-container');
        var data = ["hand secHand", "hand minHand", "hand hourHand", "center"];
        for (var i = 0; i < data.length; i++) {
            var element = document.createElement('div');
            element.setAttribute('class', data[i]);
            this.handContainer.appendChild(element);
        }
    }
    Object.defineProperty(Hand.prototype, "hand", {
        get: function () {
            return this.handContainer;
        },
        enumerable: false,
        configurable: true
    });
    return Hand;
}());
var Clock = (function () {
    function Clock() {
        this.clockData = function () {
            var clock = document.getElementsByClassName('clock')[0];
            var hand = new Hand();
            hand.time();
            clock.append(hand.hand);
        };
        var body = document.getElementsByTagName('body')[0];
        var clockContainer = document.createElement('div');
        var clock = document.createElement('div');
        clockContainer.setAttribute('class', 'clockContainer');
        clock.setAttribute('class', 'clock');
        var num = [
            {
                element: 'div', class: "number number-3", text: '3'
            }, {
                element: 'div', class: "number number-6", text: '6'
            }, {
                element: 'div', class: "number number-9", text: '9'
            }, {
                element: 'div', class: "number number-12", text: '12'
            }
        ];
        for (var i = 0; i < num.length; i++) {
            var number = document.createElement("".concat(num[i].element));
            number.setAttribute('class', num[i].class);
            number.innerText = num[i].text;
            clock.appendChild(number);
        }
        clockContainer.appendChild(clock);
        body.appendChild(clockContainer);
    }
    return Clock;
}());
var clock = new Clock();
clock.clockData();

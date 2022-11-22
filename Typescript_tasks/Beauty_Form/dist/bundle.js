/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Typescript_tasks/Beauty_Form/src/Components/Atoms/Button/Button.ts":
/*!****************************************************************************!*\
  !*** ./Typescript_tasks/Beauty_Form/src/Components/Atoms/Button/Button.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/validation */ "./Typescript_tasks/Beauty_Form/src/utils/validation.ts");

var Button = (function () {
    function Button(cls, type, text) {
        this.submit = function (e) {
            e.preventDefault();
            var email = document.getElementsByClassName("input-email")[0];
            var userName = document.getElementsByClassName('input-userName')[0];
            var psw = document.getElementsByClassName("input-psw")[0];
            if ((0,_utils_validation__WEBPACK_IMPORTED_MODULE_0__.validSignIn)(email.value, psw.value)) {
                console.log("Hello ".concat(userName.value));
            }
            ;
        };
        this.register = function (e) {
            e.preventDefault();
            var email = document.getElementsByClassName("input-email")[0];
            var user = document.getElementsByClassName("input-userName")[0];
            var psw1 = document.getElementsByClassName("input-psw")[0];
            var psw2 = document.getElementsByClassName("input-psw")[1];
            if ((0,_utils_validation__WEBPACK_IMPORTED_MODULE_0__.validEmail)(email.value) && (0,_utils_validation__WEBPACK_IMPORTED_MODULE_0__.validUserName)(user.value) && (0,_utils_validation__WEBPACK_IMPORTED_MODULE_0__.validPsw1)(psw1.value) && (0,_utils_validation__WEBPACK_IMPORTED_MODULE_0__.validPsw2)(psw1.value, psw2.value)) {
                localStorage.setItem("".concat(email.value), JSON.stringify([psw1.value, user.value]));
            }
        };
        this._buttonContainer = document.createElement('div');
        var button = document.createElement('button');
        this._buttonContainer.setAttribute('class', 'buttonContainer');
        button.setAttribute('class', cls);
        button.setAttribute('type', type);
        button.innerText = text;
        this._buttonContainer.appendChild(button);
        if (text == 'Login') {
            button.addEventListener('click', this.submit);
        }
        else {
            button.addEventListener('click', this.register);
        }
    }
    Object.defineProperty(Button.prototype, "button", {
        get: function () {
            return this._buttonContainer;
        },
        enumerable: false,
        configurable: true
    });
    return Button;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ "./Typescript_tasks/Beauty_Form/src/Components/Atoms/FormTitle/FormTitle.ts":
/*!**********************************************************************************!*\
  !*** ./Typescript_tasks/Beauty_Form/src/Components/Atoms/FormTitle/FormTitle.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var FormTitle = (function () {
    function FormTitle(type) {
        this._formTitle = document.createElement('h1');
        this._formTitle.setAttribute('class', 'title');
        if (type == 'login') {
            this._formTitle.innerText = 'Login';
        }
        else {
            this._formTitle.innerText = 'Register';
        }
    }
    Object.defineProperty(FormTitle.prototype, "formTitle", {
        get: function () {
            return this._formTitle;
        },
        enumerable: false,
        configurable: true
    });
    return FormTitle;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormTitle);


/***/ }),

/***/ "./Typescript_tasks/Beauty_Form/src/Components/Atoms/Input/Input.ts":
/*!**************************************************************************!*\
  !*** ./Typescript_tasks/Beauty_Form/src/Components/Atoms/Input/Input.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/validation */ "./Typescript_tasks/Beauty_Form/src/utils/validation.ts");

var Input = (function () {
    function Input(inputType, inputName, inputValue, inputPlaceholder) {
        this.validation = function () {
            var form = document.getElementsByClassName('form')[0];
            if (form.className == 'form login') {
                var email = document.getElementsByClassName('input-email')[0];
                var psw = document.getElementsByClassName('input-psw')[0];
                (0,_utils_validation__WEBPACK_IMPORTED_MODULE_0__.validSignIn)(email.value, psw.value);
            }
            else {
                var email = document.getElementsByClassName('input-email')[0];
                (0,_utils_validation__WEBPACK_IMPORTED_MODULE_0__.validEmail)(email.value);
                var userName = document.getElementsByClassName('input-userName')[0];
                (0,_utils_validation__WEBPACK_IMPORTED_MODULE_0__.validUserName)(userName.value);
                var psw1 = document.getElementsByClassName('input-psw')[0];
                (0,_utils_validation__WEBPACK_IMPORTED_MODULE_0__.validPsw1)(psw1.value);
                var psw2 = document.getElementsByClassName('input-psw')[1];
                (0,_utils_validation__WEBPACK_IMPORTED_MODULE_0__.validPsw2)(psw1.value, psw2.value);
            }
        };
        this._input = document.createElement('input');
        this._input.setAttribute('type', inputType);
        this._input.setAttribute('name', inputName);
        (inputPlaceholder) ? this._input.setAttribute('placeholder', inputPlaceholder) : '';
        this._input.setAttribute('value', inputValue);
        this._input.setAttribute('class', "input-".concat(inputName));
        this._input.addEventListener('input', this.validation);
    }
    Object.defineProperty(Input.prototype, "input", {
        get: function () {
            return this._input;
        },
        enumerable: false,
        configurable: true
    });
    return Input;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);


/***/ }),

/***/ "./Typescript_tasks/Beauty_Form/src/Components/Atoms/Label/Label.ts":
/*!**************************************************************************!*\
  !*** ./Typescript_tasks/Beauty_Form/src/Components/Atoms/Label/Label.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Label = (function () {
    function Label(labelFor, labelText, iconSrc) {
        if (iconSrc === void 0) { iconSrc = ''; }
        this._label = document.createElement('label');
        this._label.setAttribute('for', labelFor);
        this._label.innerText = labelText;
        if (iconSrc) {
            var icon = document.createElement('img');
            icon.setAttribute('src', iconSrc);
            icon.setAttribute('class', 'iconImg');
            this._label.appendChild(icon);
        }
    }
    Object.defineProperty(Label.prototype, "label", {
        get: function () {
            return this._label;
        },
        enumerable: false,
        configurable: true
    });
    return Label;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Label);


/***/ }),

/***/ "./Typescript_tasks/Beauty_Form/src/Components/Atoms/Option/Option.ts":
/*!****************************************************************************!*\
  !*** ./Typescript_tasks/Beauty_Form/src/Components/Atoms/Option/Option.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Option);


/***/ }),

/***/ "./Typescript_tasks/Beauty_Form/src/Components/Atoms/SwitchLink/SwitchLink.ts":
/*!************************************************************************************!*\
  !*** ./Typescript_tasks/Beauty_Form/src/Components/Atoms/SwitchLink/SwitchLink.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Constants_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Constants/login */ "./Typescript_tasks/Beauty_Form/src/Constants/login.ts");
/* harmony import */ var _Constants_register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Constants/register */ "./Typescript_tasks/Beauty_Form/src/Constants/register.ts");
/* harmony import */ var _Templates_FormContainer_FormContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Templates/FormContainer/FormContainer */ "./Typescript_tasks/Beauty_Form/src/Components/Templates/FormContainer/FormContainer.ts");



var SwitchLink = (function () {
    function SwitchLink(type) {
        this.registerForm = function (e) {
            e.preventDefault();
            var app = document.getElementsByClassName('app')[0];
            var form = document.getElementsByClassName('formContainer login')[0];
            form.remove();
            var newForm = new _Templates_FormContainer_FormContainer__WEBPACK_IMPORTED_MODULE_2__["default"]('register', _Constants_register__WEBPACK_IMPORTED_MODULE_1__.register).formContainer;
            app.appendChild(newForm);
        };
        this.loginForm = function (e) {
            e.preventDefault();
            var app = document.getElementsByClassName('app')[0];
            var form = document.getElementsByClassName('formContainer register')[0];
            form.remove();
            var newForm = new _Templates_FormContainer_FormContainer__WEBPACK_IMPORTED_MODULE_2__["default"]('login', _Constants_login__WEBPACK_IMPORTED_MODULE_0__.login).formContainer;
            app.appendChild(newForm);
        };
        this._text = document.createElement('div');
        var link = document.createElement('a');
        this._text.setAttribute('class', 'text');
        link.setAttribute('class', 'link');
        link.innerText = 'Click Here';
        if (type == 'login') {
            this._text.innerText = 'Don\'t have an account? ';
            link.addEventListener('click', this.registerForm);
        }
        else {
            this._text.innerText = 'Have an account already? ';
            link.addEventListener('click', this.loginForm);
        }
        this._text.appendChild(link);
    }
    Object.defineProperty(SwitchLink.prototype, "switchLink", {
        get: function () {
            return this._text;
        },
        enumerable: false,
        configurable: true
    });
    return SwitchLink;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SwitchLink);


/***/ }),

/***/ "./Typescript_tasks/Beauty_Form/src/Components/Atoms/ValidationText/ValidationText.ts":
/*!********************************************************************************************!*\
  !*** ./Typescript_tasks/Beauty_Form/src/Components/Atoms/ValidationText/ValidationText.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ValidationText = (function () {
    function ValidationText(type) {
        this._validationText = document.createElement('p');
        this._validationText.setAttribute('class', "valid ".concat(type));
    }
    Object.defineProperty(ValidationText.prototype, "validationText", {
        get: function () {
            return this._validationText;
        },
        enumerable: false,
        configurable: true
    });
    return ValidationText;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidationText);


/***/ }),

/***/ "./Typescript_tasks/Beauty_Form/src/Components/Molecules/BackgroundImg/BackgroundImg.ts":
/*!**********************************************************************************************!*\
  !*** ./Typescript_tasks/Beauty_Form/src/Components/Molecules/BackgroundImg/BackgroundImg.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackgroundImg);


/***/ }),

/***/ "./Typescript_tasks/Beauty_Form/src/Components/Molecules/FormItem/FormItem.ts":
/*!************************************************************************************!*\
  !*** ./Typescript_tasks/Beauty_Form/src/Components/Molecules/FormItem/FormItem.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Atoms_Input_Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Atoms/Input/Input */ "./Typescript_tasks/Beauty_Form/src/Components/Atoms/Input/Input.ts");
/* harmony import */ var _Atoms_Label_Label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Atoms/Label/Label */ "./Typescript_tasks/Beauty_Form/src/Components/Atoms/Label/Label.ts");
/* harmony import */ var _Atoms_ValidationText_ValidationText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Atoms/ValidationText/ValidationText */ "./Typescript_tasks/Beauty_Form/src/Components/Atoms/ValidationText/ValidationText.ts");



var FormItem = (function () {
    function FormItem(labelFor, labelText, iconSrc, inputType, inputName, inputPlaceholder, inputValue) {
        this._formItem = document.createElement('div');
        this._formItem.setAttribute('class', "formItem ".concat(labelFor));
        var item = document.createElement('div');
        item.setAttribute('class', 'item');
        var label = new _Atoms_Label_Label__WEBPACK_IMPORTED_MODULE_1__["default"](labelFor, labelText, iconSrc).label;
        var input = new _Atoms_Input_Input__WEBPACK_IMPORTED_MODULE_0__["default"](inputType, inputName, inputPlaceholder, inputValue).input;
        var validationText = new _Atoms_ValidationText_ValidationText__WEBPACK_IMPORTED_MODULE_2__["default"](labelFor).validationText;
        item.appendChild(label);
        item.appendChild(input);
        this._formItem.appendChild(item);
        this._formItem.appendChild(validationText);
    }
    Object.defineProperty(FormItem.prototype, "formItem", {
        get: function () {
            return this._formItem;
        },
        enumerable: false,
        configurable: true
    });
    return FormItem;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormItem);


/***/ }),

/***/ "./Typescript_tasks/Beauty_Form/src/Components/Molecules/Radio/Radio.ts":
/*!******************************************************************************!*\
  !*** ./Typescript_tasks/Beauty_Form/src/Components/Molecules/Radio/Radio.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Atoms_Input_Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Atoms/Input/Input */ "./Typescript_tasks/Beauty_Form/src/Components/Atoms/Input/Input.ts");
/* harmony import */ var _Atoms_Label_Label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Atoms/Label/Label */ "./Typescript_tasks/Beauty_Form/src/Components/Atoms/Label/Label.ts");


var Radio = (function () {
    function Radio(obj) {
        this._radio = document.createElement('div');
        this._radio.setAttribute('class', 'radio');
        for (var i = 0; i < obj.input.length; i++) {
            var radioItem = document.createElement('div');
            var input = new _Atoms_Input_Input__WEBPACK_IMPORTED_MODULE_0__["default"](obj.input[i].type, obj.input[i].name, obj.input[i].value).input;
            var label = new _Atoms_Label_Label__WEBPACK_IMPORTED_MODULE_1__["default"](obj.label[i].for, obj.label[i].text).label;
            radioItem.appendChild(input);
            radioItem.appendChild(label);
            this._radio.appendChild(radioItem);
        }
    }
    Object.defineProperty(Radio.prototype, "radio", {
        get: function () {
            return this._radio;
        },
        enumerable: false,
        configurable: true
    });
    return Radio;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Radio);


/***/ }),

/***/ "./Typescript_tasks/Beauty_Form/src/Components/Molecules/Select/Select.ts":
/*!********************************************************************************!*\
  !*** ./Typescript_tasks/Beauty_Form/src/Components/Molecules/Select/Select.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Atoms_Option_Option__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Atoms/Option/Option */ "./Typescript_tasks/Beauty_Form/src/Components/Atoms/Option/Option.ts");

var Select = (function () {
    function Select(data, text) {
        this._select = document.createElement('select');
        this._select.setAttribute('class', 'select');
        var option = new _Atoms_Option_Option__WEBPACK_IMPORTED_MODULE_0__["default"](text).option;
        this._select.appendChild(option);
        for (var i = 0; i < data.length; i++) {
            var options = new _Atoms_Option_Option__WEBPACK_IMPORTED_MODULE_0__["default"](data[i]).option;
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Select);


/***/ }),

/***/ "./Typescript_tasks/Beauty_Form/src/Components/Organisms/Form/Form.ts":
/*!****************************************************************************!*\
  !*** ./Typescript_tasks/Beauty_Form/src/Components/Organisms/Form/Form.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Atoms_Button_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Atoms/Button/Button */ "./Typescript_tasks/Beauty_Form/src/Components/Atoms/Button/Button.ts");
/* harmony import */ var _Molecules_FormItem_FormItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Molecules/FormItem/FormItem */ "./Typescript_tasks/Beauty_Form/src/Components/Molecules/FormItem/FormItem.ts");
/* harmony import */ var _Atoms_FormTitle_FormTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Atoms/FormTitle/FormTitle */ "./Typescript_tasks/Beauty_Form/src/Components/Atoms/FormTitle/FormTitle.ts");
/* harmony import */ var _Atoms_SwitchLink_SwitchLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Atoms/SwitchLink/SwitchLink */ "./Typescript_tasks/Beauty_Form/src/Components/Atoms/SwitchLink/SwitchLink.ts");
/* harmony import */ var _Constants_countries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Constants/countries */ "./Typescript_tasks/Beauty_Form/src/Constants/countries.ts");
/* harmony import */ var _Molecules_Select_Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Molecules/Select/Select */ "./Typescript_tasks/Beauty_Form/src/Components/Molecules/Select/Select.ts");
/* harmony import */ var _Molecules_Radio_Radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Molecules/Radio/Radio */ "./Typescript_tasks/Beauty_Form/src/Components/Molecules/Radio/Radio.ts");
/* harmony import */ var _Constants_gender__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Constants/gender */ "./Typescript_tasks/Beauty_Form/src/Constants/gender.ts");








var Form = (function () {
    function Form(type, obj) {
        this._form = document.createElement('form');
        this._form.setAttribute('class', "form ".concat(type));
        var title = new _Atoms_FormTitle_FormTitle__WEBPACK_IMPORTED_MODULE_2__["default"](type).formTitle;
        this._form.appendChild(title);
        for (var i = 0; i < obj.label.length; i++) {
            var formItem = new _Molecules_FormItem_FormItem__WEBPACK_IMPORTED_MODULE_1__["default"](obj.label[i].for, obj.label[i].text, obj.label[i].img, obj.input[i].type, obj.input[i].name, obj.input[i].value, obj.input[i].placeholder).formItem;
            this._form.appendChild(formItem);
        }
        if (type == 'register') {
            var country = new _Molecules_Select_Select__WEBPACK_IMPORTED_MODULE_5__["default"](_Constants_countries__WEBPACK_IMPORTED_MODULE_4__.country_list, 'Select a Country').select;
            this._form.appendChild(country);
            var radio = new _Molecules_Radio_Radio__WEBPACK_IMPORTED_MODULE_6__["default"](_Constants_gender__WEBPACK_IMPORTED_MODULE_7__.gender).radio;
            this._form.appendChild(radio);
        }
        var button = new _Atoms_Button_Button__WEBPACK_IMPORTED_MODULE_0__["default"](obj.button.class, obj.button.type, obj.button.text).button;
        var link = new _Atoms_SwitchLink_SwitchLink__WEBPACK_IMPORTED_MODULE_3__["default"](type).switchLink;
        this._form.appendChild(link);
        this._form.appendChild(button);
    }
    Object.defineProperty(Form.prototype, "form", {
        get: function () {
            return this._form;
        },
        enumerable: false,
        configurable: true
    });
    return Form;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);


/***/ }),

/***/ "./Typescript_tasks/Beauty_Form/src/Components/Templates/FormContainer/FormContainer.ts":
/*!**********************************************************************************************!*\
  !*** ./Typescript_tasks/Beauty_Form/src/Components/Templates/FormContainer/FormContainer.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Organisms_Form_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Organisms/Form/Form */ "./Typescript_tasks/Beauty_Form/src/Components/Organisms/Form/Form.ts");
/* harmony import */ var _Molecules_BackgroundImg_BackgroundImg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Molecules/BackgroundImg/BackgroundImg */ "./Typescript_tasks/Beauty_Form/src/Components/Molecules/BackgroundImg/BackgroundImg.ts");


var FormContainer = (function () {
    function FormContainer(type, obj) {
        this._formContainer = document.createElement('div');
        var form = new _Organisms_Form_Form__WEBPACK_IMPORTED_MODULE_0__["default"](type, obj).form;
        this._formContainer.appendChild(form);
        var backgroundImg = new _Molecules_BackgroundImg_BackgroundImg__WEBPACK_IMPORTED_MODULE_1__["default"](type).backgroundImg;
        this._formContainer.setAttribute('class', "formContainer ".concat(type));
        this._formContainer.appendChild(backgroundImg);
    }
    Object.defineProperty(FormContainer.prototype, "formContainer", {
        get: function () {
            return this._formContainer;
        },
        enumerable: false,
        configurable: true
    });
    return FormContainer;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormContainer);


/***/ }),

/***/ "./Typescript_tasks/Beauty_Form/src/Constants/countries.ts":
/*!*****************************************************************!*\
  !*** ./Typescript_tasks/Beauty_Form/src/Constants/countries.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "country_list": () => (/* binding */ country_list)
/* harmony export */ });
var country_list = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];


/***/ }),

/***/ "./Typescript_tasks/Beauty_Form/src/Constants/gender.ts":
/*!**************************************************************!*\
  !*** ./Typescript_tasks/Beauty_Form/src/Constants/gender.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gender": () => (/* binding */ gender)
/* harmony export */ });
var gender = {
    label: [
        {
            for: "gender1",
            text: "Male",
        },
        {
            for: "gender2",
            text: "Female",
        }
    ],
    input: [
        {
            name: "gender",
            type: "radio",
            value: "Male"
        },
        {
            name: "gender",
            type: "radio",
            value: "Female"
        }
    ]
};


/***/ }),

/***/ "./Typescript_tasks/Beauty_Form/src/Constants/login.ts":
/*!*************************************************************!*\
  !*** ./Typescript_tasks/Beauty_Form/src/Constants/login.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "login": () => (/* binding */ login)
/* harmony export */ });
var login = {
    label: [
        {
            for: "email",
            img: "../assets/letter.png",
            text: "",
        },
        {
            for: "psw",
            img: "../assets/shield.png",
            text: "",
        },
    ],
    input: [
        {
            name: "email",
            type: "text",
            placeholder: "Email",
            value: ""
        },
        {
            name: "psw",
            type: "password",
            placeholder: "Password",
            value: ""
        },
    ],
    button: {
        class: 'button',
        type: 'submit',
        text: 'Login',
        eventName: 'onsubmit',
    }
};


/***/ }),

/***/ "./Typescript_tasks/Beauty_Form/src/Constants/register.ts":
/*!****************************************************************!*\
  !*** ./Typescript_tasks/Beauty_Form/src/Constants/register.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "register": () => (/* binding */ register)
/* harmony export */ });
var register = {
    label: [
        {
            for: "email",
            img: "../assets/letter.png",
            text: "",
        },
        {
            for: "userName",
            img: "../assets/account.png",
            text: "",
        },
        {
            for: "psw1",
            img: "../assets/shield.png",
            text: "",
        },
        {
            for: "psw2",
            img: "../assets/shield.png",
            text: "",
        },
    ],
    input: [
        {
            name: "email",
            type: "text",
            placeholder: "e.g name@name.com",
            value: ""
        },
        {
            name: "userName",
            type: "text",
            placeholder: "User Name",
            value: ""
        },
        {
            name: "psw",
            type: "password",
            placeholder: "Password",
            value: ""
        },
        {
            name: "psw",
            type: "password",
            placeholder: "Password 2",
            value: ""
        },
        {
            name: "gender",
            type: "radio",
            placeholder: "",
            value: "Male"
        },
        {
            name: "gender",
            type: "radio",
            placeholder: "",
            value: "Female"
        }
    ],
    button: {
        class: 'button',
        type: 'submit',
        text: 'Register',
    }
};


/***/ }),

/***/ "./Typescript_tasks/Beauty_Form/src/utils/validation.ts":
/*!**************************************************************!*\
  !*** ./Typescript_tasks/Beauty_Form/src/utils/validation.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validEmail": () => (/* binding */ validEmail),
/* harmony export */   "validPsw1": () => (/* binding */ validPsw1),
/* harmony export */   "validPsw2": () => (/* binding */ validPsw2),
/* harmony export */   "validSignIn": () => (/* binding */ validSignIn),
/* harmony export */   "validUserName": () => (/* binding */ validUserName)
/* harmony export */ });
var validEmail = function (mail) {
    var regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var validMsg = document.getElementsByClassName('valid email')[0];
    var text = '';
    if (regx.test(mail)) {
        validMsg.innerText = text;
        return true;
    }
    else {
        text = "You have entered an invalid email address!";
        validMsg.innerText = text;
        return false;
    }
};
var validUserName = function (psw) {
    var regx = /[a-z]/;
    var validMsg = document.getElementsByClassName('valid userName')[0];
    var text = '';
    if (regx.test(psw)) {
        validMsg.innerText = text;
        return true;
    }
    else {
        text = "Only lowercase characters allowed";
        validMsg.innerText = text;
        return false;
    }
};
var validPsw1 = function (psw) {
    var regx = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    var numbers = /[0-9]/g;
    var uppercase = /[A-Z]/g;
    var text = '';
    var validMsg = document.getElementsByClassName('valid psw1')[0];
    var text1 = " -Your password must be more than 8 characters and less than 16 \n";
    var text2 = "-Your password must contain at least one digit \n";
    var text3 = "-Your password must contain at least one uppercase letter.\n";
    if (regx.test(psw)) {
        validMsg.innerText = text;
        return true;
    }
    if (!regx.test(psw)) {
        if (psw.length < 8 || psw.length > 16) {
            text += text1;
        }
        if (!psw.match(numbers)) {
            text += text2;
        }
        if (!psw.match(uppercase)) {
            text += text3;
        }
        validMsg.innerText = text;
        return false;
    }
};
var validPsw2 = function (psw1, psw2) {
    var validMsg = document.getElementsByClassName('valid psw2')[0];
    var text = '';
    validPsw1(psw1);
    if (psw1 === psw2) {
        validMsg.innerText = text;
        return true;
    }
    else {
        text = "Please Enter the Same Password";
        validMsg.innerText = text;
        return false;
    }
};
var validSignIn = function (email, psw) {
    var validMail = document.getElementsByClassName('valid email')[0];
    var validPass = document.getElementsByClassName('valid psw')[0];
    var data = JSON.parse(localStorage.getItem(email) || "");
    var text = '';
    var text1 = "You Entered Invalid Email Address!";
    var text2 = 'Please make sure to write the password correctly';
    if (data) {
        validMail.innerText = text;
        if ("".concat(psw) !== data[0]) {
            validPass.innerText = text2;
            return false;
        }
        else {
            validPass.innerText = text;
            return true;
        }
    }
    else {
        validMail.innerText = text1;
        validPass.innerText = text2;
        return false;
    }
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************************************************!*\
  !*** ./Typescript_tasks/Beauty_Form/src/Components/Pages/App.ts ***!
  \******************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Constants_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Constants/login */ "./Typescript_tasks/Beauty_Form/src/Constants/login.ts");
/* harmony import */ var _Templates_FormContainer_FormContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Templates/FormContainer/FormContainer */ "./Typescript_tasks/Beauty_Form/src/Components/Templates/FormContainer/FormContainer.ts");


var body = document.getElementsByTagName('body')[0];
var app = document.createElement('div');
app.setAttribute('class', 'app');
var form = new _Templates_FormContainer_FormContainer__WEBPACK_IMPORTED_MODULE_1__["default"]('login', _Constants_login__WEBPACK_IMPORTED_MODULE_0__.login).formContainer;
app.appendChild(form);
body.appendChild(app);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRU87QUFDUCxzREFBc0QsSUFBSTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxxQ0FBcUMsS0FBSztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUM1RkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOOEM7QUFDdUI7QUFDckU7QUFDQTtBQUNBO0FBQ0EsZUFBZSw4RUFBYSxVQUFVLG1EQUFLO0FBQzNDO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZWF1dHlfdGFzay8uL1R5cGVzY3JpcHRfdGFza3MvQmVhdXR5X0Zvcm0vc3JjL0NvbXBvbmVudHMvQXRvbXMvQnV0dG9uL0J1dHRvbi50cyIsIndlYnBhY2s6Ly9iZWF1dHlfdGFzay8uL1R5cGVzY3JpcHRfdGFza3MvQmVhdXR5X0Zvcm0vc3JjL0NvbXBvbmVudHMvQXRvbXMvRm9ybVRpdGxlL0Zvcm1UaXRsZS50cyIsIndlYnBhY2s6Ly9iZWF1dHlfdGFzay8uL1R5cGVzY3JpcHRfdGFza3MvQmVhdXR5X0Zvcm0vc3JjL0NvbXBvbmVudHMvQXRvbXMvSW5wdXQvSW5wdXQudHMiLCJ3ZWJwYWNrOi8vYmVhdXR5X3Rhc2svLi9UeXBlc2NyaXB0X3Rhc2tzL0JlYXV0eV9Gb3JtL3NyYy9Db21wb25lbnRzL0F0b21zL0xhYmVsL0xhYmVsLnRzIiwid2VicGFjazovL2JlYXV0eV90YXNrLy4vVHlwZXNjcmlwdF90YXNrcy9CZWF1dHlfRm9ybS9zcmMvQ29tcG9uZW50cy9BdG9tcy9PcHRpb24vT3B0aW9uLnRzIiwid2VicGFjazovL2JlYXV0eV90YXNrLy4vVHlwZXNjcmlwdF90YXNrcy9CZWF1dHlfRm9ybS9zcmMvQ29tcG9uZW50cy9BdG9tcy9Td2l0Y2hMaW5rL1N3aXRjaExpbmsudHMiLCJ3ZWJwYWNrOi8vYmVhdXR5X3Rhc2svLi9UeXBlc2NyaXB0X3Rhc2tzL0JlYXV0eV9Gb3JtL3NyYy9Db21wb25lbnRzL0F0b21zL1ZhbGlkYXRpb25UZXh0L1ZhbGlkYXRpb25UZXh0LnRzIiwid2VicGFjazovL2JlYXV0eV90YXNrLy4vVHlwZXNjcmlwdF90YXNrcy9CZWF1dHlfRm9ybS9zcmMvQ29tcG9uZW50cy9Nb2xlY3VsZXMvQmFja2dyb3VuZEltZy9CYWNrZ3JvdW5kSW1nLnRzIiwid2VicGFjazovL2JlYXV0eV90YXNrLy4vVHlwZXNjcmlwdF90YXNrcy9CZWF1dHlfRm9ybS9zcmMvQ29tcG9uZW50cy9Nb2xlY3VsZXMvRm9ybUl0ZW0vRm9ybUl0ZW0udHMiLCJ3ZWJwYWNrOi8vYmVhdXR5X3Rhc2svLi9UeXBlc2NyaXB0X3Rhc2tzL0JlYXV0eV9Gb3JtL3NyYy9Db21wb25lbnRzL01vbGVjdWxlcy9SYWRpby9SYWRpby50cyIsIndlYnBhY2s6Ly9iZWF1dHlfdGFzay8uL1R5cGVzY3JpcHRfdGFza3MvQmVhdXR5X0Zvcm0vc3JjL0NvbXBvbmVudHMvTW9sZWN1bGVzL1NlbGVjdC9TZWxlY3QudHMiLCJ3ZWJwYWNrOi8vYmVhdXR5X3Rhc2svLi9UeXBlc2NyaXB0X3Rhc2tzL0JlYXV0eV9Gb3JtL3NyYy9Db21wb25lbnRzL09yZ2FuaXNtcy9Gb3JtL0Zvcm0udHMiLCJ3ZWJwYWNrOi8vYmVhdXR5X3Rhc2svLi9UeXBlc2NyaXB0X3Rhc2tzL0JlYXV0eV9Gb3JtL3NyYy9Db21wb25lbnRzL1RlbXBsYXRlcy9Gb3JtQ29udGFpbmVyL0Zvcm1Db250YWluZXIudHMiLCJ3ZWJwYWNrOi8vYmVhdXR5X3Rhc2svLi9UeXBlc2NyaXB0X3Rhc2tzL0JlYXV0eV9Gb3JtL3NyYy9Db25zdGFudHMvY291bnRyaWVzLnRzIiwid2VicGFjazovL2JlYXV0eV90YXNrLy4vVHlwZXNjcmlwdF90YXNrcy9CZWF1dHlfRm9ybS9zcmMvQ29uc3RhbnRzL2dlbmRlci50cyIsIndlYnBhY2s6Ly9iZWF1dHlfdGFzay8uL1R5cGVzY3JpcHRfdGFza3MvQmVhdXR5X0Zvcm0vc3JjL0NvbnN0YW50cy9sb2dpbi50cyIsIndlYnBhY2s6Ly9iZWF1dHlfdGFzay8uL1R5cGVzY3JpcHRfdGFza3MvQmVhdXR5X0Zvcm0vc3JjL0NvbnN0YW50cy9yZWdpc3Rlci50cyIsIndlYnBhY2s6Ly9iZWF1dHlfdGFzay8uL1R5cGVzY3JpcHRfdGFza3MvQmVhdXR5X0Zvcm0vc3JjL3V0aWxzL3ZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vYmVhdXR5X3Rhc2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmVhdXR5X3Rhc2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JlYXV0eV90YXNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmVhdXR5X3Rhc2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iZWF1dHlfdGFzay8uL1R5cGVzY3JpcHRfdGFza3MvQmVhdXR5X0Zvcm0vc3JjL0NvbXBvbmVudHMvUGFnZXMvQXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHZhbGlkRW1haWwsIHZhbGlkVXNlck5hbWUsIHZhbGlkUHN3MSwgdmFsaWRQc3cyLCB2YWxpZFNpZ25JbiB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3ZhbGlkYXRpb24nO1xudmFyIEJ1dHRvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQnV0dG9uKGNscywgdHlwZSwgdGV4dCkge1xuICAgICAgICB0aGlzLnN1Ym1pdCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaW5wdXQtZW1haWxcIilbMF07XG4gICAgICAgICAgICB2YXIgdXNlck5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbnB1dC11c2VyTmFtZScpWzBdO1xuICAgICAgICAgICAgdmFyIHBzdyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpbnB1dC1wc3dcIilbMF07XG4gICAgICAgICAgICBpZiAodmFsaWRTaWduSW4oZW1haWwudmFsdWUsIHBzdy52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkhlbGxvIFwiLmNvbmNhdCh1c2VyTmFtZS52YWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlZ2lzdGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpbnB1dC1lbWFpbFwiKVswXTtcbiAgICAgICAgICAgIHZhciB1c2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImlucHV0LXVzZXJOYW1lXCIpWzBdO1xuICAgICAgICAgICAgdmFyIHBzdzEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaW5wdXQtcHN3XCIpWzBdO1xuICAgICAgICAgICAgdmFyIHBzdzIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaW5wdXQtcHN3XCIpWzFdO1xuICAgICAgICAgICAgaWYgKHZhbGlkRW1haWwoZW1haWwudmFsdWUpICYmIHZhbGlkVXNlck5hbWUodXNlci52YWx1ZSkgJiYgdmFsaWRQc3cxKHBzdzEudmFsdWUpICYmIHZhbGlkUHN3Mihwc3cxLnZhbHVlLCBwc3cyLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiXCIuY29uY2F0KGVtYWlsLnZhbHVlKSwgSlNPTi5zdHJpbmdpZnkoW3BzdzEudmFsdWUsIHVzZXIudmFsdWVdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2J1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB2YXIgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRoaXMuX2J1dHRvbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2J1dHRvbkNvbnRhaW5lcicpO1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsIGNscyk7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB0eXBlKTtcbiAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMuX2J1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICBpZiAodGV4dCA9PSAnTG9naW4nKSB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnN1Ym1pdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlZ2lzdGVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnV0dG9uLnByb3RvdHlwZSwgXCJidXR0b25cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9idXR0b25Db250YWluZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gQnV0dG9uO1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiIsInZhciBGb3JtVGl0bGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZvcm1UaXRsZSh0eXBlKSB7XG4gICAgICAgIHRoaXMuX2Zvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIHRoaXMuX2Zvcm1UaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RpdGxlJyk7XG4gICAgICAgIGlmICh0eXBlID09ICdsb2dpbicpIHtcbiAgICAgICAgICAgIHRoaXMuX2Zvcm1UaXRsZS5pbm5lclRleHQgPSAnTG9naW4nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZm9ybVRpdGxlLmlubmVyVGV4dCA9ICdSZWdpc3Rlcic7XG4gICAgICAgIH1cbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1UaXRsZS5wcm90b3R5cGUsIFwiZm9ybVRpdGxlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZm9ybVRpdGxlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIEZvcm1UaXRsZTtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBGb3JtVGl0bGU7XG4iLCJpbXBvcnQgeyB2YWxpZEVtYWlsLCB2YWxpZFBzdzEsIHZhbGlkUHN3MiwgdmFsaWRTaWduSW4sIHZhbGlkVXNlck5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvdmFsaWRhdGlvblwiO1xudmFyIElucHV0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBJbnB1dChpbnB1dFR5cGUsIGlucHV0TmFtZSwgaW5wdXRWYWx1ZSwgaW5wdXRQbGFjZWhvbGRlcikge1xuICAgICAgICB0aGlzLnZhbGlkYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Zvcm0nKVswXTtcbiAgICAgICAgICAgIGlmIChmb3JtLmNsYXNzTmFtZSA9PSAnZm9ybSBsb2dpbicpIHtcbiAgICAgICAgICAgICAgICB2YXIgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbnB1dC1lbWFpbCcpWzBdO1xuICAgICAgICAgICAgICAgIHZhciBwc3cgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbnB1dC1wc3cnKVswXTtcbiAgICAgICAgICAgICAgICB2YWxpZFNpZ25JbihlbWFpbC52YWx1ZSwgcHN3LnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2lucHV0LWVtYWlsJylbMF07XG4gICAgICAgICAgICAgICAgdmFsaWRFbWFpbChlbWFpbC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdmFyIHVzZXJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW5wdXQtdXNlck5hbWUnKVswXTtcbiAgICAgICAgICAgICAgICB2YWxpZFVzZXJOYW1lKHVzZXJOYW1lLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB2YXIgcHN3MSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2lucHV0LXBzdycpWzBdO1xuICAgICAgICAgICAgICAgIHZhbGlkUHN3MShwc3cxLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB2YXIgcHN3MiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2lucHV0LXBzdycpWzFdO1xuICAgICAgICAgICAgICAgIHZhbGlkUHN3Mihwc3cxLnZhbHVlLCBwc3cyLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5faW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0aGlzLl9pbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBpbnB1dFR5cGUpO1xuICAgICAgICB0aGlzLl9pbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBpbnB1dE5hbWUpO1xuICAgICAgICAoaW5wdXRQbGFjZWhvbGRlcikgPyB0aGlzLl9pbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgaW5wdXRQbGFjZWhvbGRlcikgOiAnJztcbiAgICAgICAgdGhpcy5faW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGlucHV0VmFsdWUpO1xuICAgICAgICB0aGlzLl9pbnB1dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgXCJpbnB1dC1cIi5jb25jYXQoaW5wdXROYW1lKSk7XG4gICAgICAgIHRoaXMuX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy52YWxpZGF0aW9uKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KElucHV0LnByb3RvdHlwZSwgXCJpbnB1dFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lucHV0O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIElucHV0O1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIiwidmFyIExhYmVsID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBMYWJlbChsYWJlbEZvciwgbGFiZWxUZXh0LCBpY29uU3JjKSB7XG4gICAgICAgIGlmIChpY29uU3JjID09PSB2b2lkIDApIHsgaWNvblNyYyA9ICcnOyB9XG4gICAgICAgIHRoaXMuX2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgdGhpcy5fbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBsYWJlbEZvcik7XG4gICAgICAgIHRoaXMuX2xhYmVsLmlubmVyVGV4dCA9IGxhYmVsVGV4dDtcbiAgICAgICAgaWYgKGljb25TcmMpIHtcbiAgICAgICAgICAgIHZhciBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBpY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgaWNvblNyYyk7XG4gICAgICAgICAgICBpY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbkltZycpO1xuICAgICAgICAgICAgdGhpcy5fbGFiZWwuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KExhYmVsLnByb3RvdHlwZSwgXCJsYWJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xhYmVsO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIExhYmVsO1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IExhYmVsO1xuIiwidmFyIE9wdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gT3B0aW9uKG9wdGlvbikge1xuICAgICAgICB0aGlzLl9vcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgdGhpcy5fb3B0aW9uLmlubmVyVGV4dCA9IG9wdGlvbjtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9wdGlvbi5wcm90b3R5cGUsIFwib3B0aW9uXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9uO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIE9wdGlvbjtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBPcHRpb247XG4iLCJpbXBvcnQgeyBsb2dpbiB9IGZyb20gJy4uLy4uLy4uL0NvbnN0YW50cy9sb2dpbic7XG5pbXBvcnQgeyByZWdpc3RlciB9IGZyb20gJy4uLy4uLy4uL0NvbnN0YW50cy9yZWdpc3Rlcic7XG5pbXBvcnQgRm9ybUNvbnRhaW5lciBmcm9tICcuLi8uLi9UZW1wbGF0ZXMvRm9ybUNvbnRhaW5lci9Gb3JtQ29udGFpbmVyJztcbnZhciBTd2l0Y2hMaW5rID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTd2l0Y2hMaW5rKHR5cGUpIHtcbiAgICAgICAgdGhpcy5yZWdpc3RlckZvcm0gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIGFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FwcCcpWzBdO1xuICAgICAgICAgICAgdmFyIGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtQ29udGFpbmVyIGxvZ2luJylbMF07XG4gICAgICAgICAgICBmb3JtLnJlbW92ZSgpO1xuICAgICAgICAgICAgdmFyIG5ld0Zvcm0gPSBuZXcgRm9ybUNvbnRhaW5lcigncmVnaXN0ZXInLCByZWdpc3RlcikuZm9ybUNvbnRhaW5lcjtcbiAgICAgICAgICAgIGFwcC5hcHBlbmRDaGlsZChuZXdGb3JtKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIGFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FwcCcpWzBdO1xuICAgICAgICAgICAgdmFyIGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtQ29udGFpbmVyIHJlZ2lzdGVyJylbMF07XG4gICAgICAgICAgICBmb3JtLnJlbW92ZSgpO1xuICAgICAgICAgICAgdmFyIG5ld0Zvcm0gPSBuZXcgRm9ybUNvbnRhaW5lcignbG9naW4nLCBsb2dpbikuZm9ybUNvbnRhaW5lcjtcbiAgICAgICAgICAgIGFwcC5hcHBlbmRDaGlsZChuZXdGb3JtKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgdGhpcy5fdGV4dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHQnKTtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpbmsnKTtcbiAgICAgICAgbGluay5pbm5lclRleHQgPSAnQ2xpY2sgSGVyZSc7XG4gICAgICAgIGlmICh0eXBlID09ICdsb2dpbicpIHtcbiAgICAgICAgICAgIHRoaXMuX3RleHQuaW5uZXJUZXh0ID0gJ0RvblxcJ3QgaGF2ZSBhbiBhY2NvdW50PyAnO1xuICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVnaXN0ZXJGb3JtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3RleHQuaW5uZXJUZXh0ID0gJ0hhdmUgYW4gYWNjb3VudCBhbHJlYWR5PyAnO1xuICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubG9naW5Gb3JtKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl90ZXh0LmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3dpdGNoTGluay5wcm90b3R5cGUsIFwic3dpdGNoTGlua1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gU3dpdGNoTGluaztcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBTd2l0Y2hMaW5rO1xuIiwidmFyIFZhbGlkYXRpb25UZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBWYWxpZGF0aW9uVGV4dCh0eXBlKSB7XG4gICAgICAgIHRoaXMuX3ZhbGlkYXRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0aGlzLl92YWxpZGF0aW9uVGV4dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgXCJ2YWxpZCBcIi5jb25jYXQodHlwZSkpO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmFsaWRhdGlvblRleHQucHJvdG90eXBlLCBcInZhbGlkYXRpb25UZXh0XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGlvblRleHQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gVmFsaWRhdGlvblRleHQ7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdGlvblRleHQ7XG4iLCJ2YXIgQmFja2dyb3VuZEltZyA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQmFja2dyb3VuZEltZyh0eXBlLCB1cmwpIHtcbiAgICAgICAgaWYgKHVybCA9PT0gdm9pZCAwKSB7IHVybCA9ICdodHRwczovL2Jsb2cucHJlemkuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzAzL2phc29uLWxldW5nLTQ3OTI1MS11bnNwbGFzaC5qcGcnOyB9XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuX2FsdFVybCA9ICdodHRwczovL2ltYWdlcy5oZHF3YWxscy5jb20vd2FsbHBhcGVycy9oYXRha2Uta2FrYXNoaS1uYXJ1dG8tYW5pbWUtcTUuanBnJztcbiAgICAgICAgdGhpcy5oYW5kbGVJbWFnZUVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JhY2tncm91bmRJbWcnKVswXTtcbiAgICAgICAgICAgIGltZy5zcmMgPSBfdGhpcy5fYWx0VXJsO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHZhciBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHRoaXMuX2JhY2tncm91bmRJbWcuc2V0QXR0cmlidXRlKCdjbGFzcycsIFwiQmFja2dyb3VuZCBcIi5jb25jYXQodHlwZSkpO1xuICAgICAgICBiYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBcImJhY2tncm91bmRJbWcgXCIuY29uY2F0KHR5cGUpKTtcbiAgICAgICAgYmFja2dyb3VuZC5zZXRBdHRyaWJ1dGUoJ3NyYycsIHVybCk7XG4gICAgICAgIGJhY2tncm91bmQuYWRkRXZlbnRMaXN0ZW5lcignb25lcnJvcicsIHRoaXMuaGFuZGxlSW1hZ2VFcnJvcik7XG4gICAgICAgIGJhY2tncm91bmQuc2V0QXR0cmlidXRlKCdhbHQnLCAnQmFja2dyb3VuZCBJbWFnZScpO1xuICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kSW1nLmFwcGVuZENoaWxkKGJhY2tncm91bmQpO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQmFja2dyb3VuZEltZy5wcm90b3R5cGUsIFwiYmFja2dyb3VuZEltZ1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2JhY2tncm91bmRJbWc7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gQmFja2dyb3VuZEltZztcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBCYWNrZ3JvdW5kSW1nO1xuIiwiaW1wb3J0IElucHV0IGZyb20gXCIuLi8uLi9BdG9tcy9JbnB1dC9JbnB1dFwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuLi8uLi9BdG9tcy9MYWJlbC9MYWJlbFwiO1xuaW1wb3J0IFZhbGlkYXRpb25UZXh0IGZyb20gXCIuLi8uLi9BdG9tcy9WYWxpZGF0aW9uVGV4dC9WYWxpZGF0aW9uVGV4dFwiO1xudmFyIEZvcm1JdGVtID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBGb3JtSXRlbShsYWJlbEZvciwgbGFiZWxUZXh0LCBpY29uU3JjLCBpbnB1dFR5cGUsIGlucHV0TmFtZSwgaW5wdXRQbGFjZWhvbGRlciwgaW5wdXRWYWx1ZSkge1xuICAgICAgICB0aGlzLl9mb3JtSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLl9mb3JtSXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgXCJmb3JtSXRlbSBcIi5jb25jYXQobGFiZWxGb3IpKTtcbiAgICAgICAgdmFyIGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2l0ZW0nKTtcbiAgICAgICAgdmFyIGxhYmVsID0gbmV3IExhYmVsKGxhYmVsRm9yLCBsYWJlbFRleHQsIGljb25TcmMpLmxhYmVsO1xuICAgICAgICB2YXIgaW5wdXQgPSBuZXcgSW5wdXQoaW5wdXRUeXBlLCBpbnB1dE5hbWUsIGlucHV0UGxhY2Vob2xkZXIsIGlucHV0VmFsdWUpLmlucHV0O1xuICAgICAgICB2YXIgdmFsaWRhdGlvblRleHQgPSBuZXcgVmFsaWRhdGlvblRleHQobGFiZWxGb3IpLnZhbGlkYXRpb25UZXh0O1xuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIHRoaXMuX2Zvcm1JdGVtLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICB0aGlzLl9mb3JtSXRlbS5hcHBlbmRDaGlsZCh2YWxpZGF0aW9uVGV4dCk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtSXRlbS5wcm90b3R5cGUsIFwiZm9ybUl0ZW1cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mb3JtSXRlbTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBGb3JtSXRlbTtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBGb3JtSXRlbTtcbiIsImltcG9ydCBJbnB1dCBmcm9tIFwiLi4vLi4vQXRvbXMvSW5wdXQvSW5wdXRcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi4vLi4vQXRvbXMvTGFiZWwvTGFiZWxcIjtcbnZhciBSYWRpbyA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmFkaW8ob2JqKSB7XG4gICAgICAgIHRoaXMuX3JhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuX3JhZGlvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncmFkaW8nKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmouaW5wdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciByYWRpb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHZhciBpbnB1dCA9IG5ldyBJbnB1dChvYmouaW5wdXRbaV0udHlwZSwgb2JqLmlucHV0W2ldLm5hbWUsIG9iai5pbnB1dFtpXS52YWx1ZSkuaW5wdXQ7XG4gICAgICAgICAgICB2YXIgbGFiZWwgPSBuZXcgTGFiZWwob2JqLmxhYmVsW2ldLmZvciwgb2JqLmxhYmVsW2ldLnRleHQpLmxhYmVsO1xuICAgICAgICAgICAgcmFkaW9JdGVtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgICAgIHJhZGlvSXRlbS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICB0aGlzLl9yYWRpby5hcHBlbmRDaGlsZChyYWRpb0l0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSYWRpby5wcm90b3R5cGUsIFwicmFkaW9cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yYWRpbztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBSYWRpbztcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBSYWRpbztcbiIsImltcG9ydCBPcHRpb24gZnJvbSBcIi4uLy4uL0F0b21zL09wdGlvbi9PcHRpb25cIjtcbnZhciBTZWxlY3QgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNlbGVjdChkYXRhLCB0ZXh0KSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICB0aGlzLl9zZWxlY3Quc2V0QXR0cmlidXRlKCdjbGFzcycsICdzZWxlY3QnKTtcbiAgICAgICAgdmFyIG9wdGlvbiA9IG5ldyBPcHRpb24odGV4dCkub3B0aW9uO1xuICAgICAgICB0aGlzLl9zZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IG5ldyBPcHRpb24oZGF0YVtpXSkub3B0aW9uO1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWxlY3QucHJvdG90eXBlLCBcInNlbGVjdFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBTZWxlY3Q7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgU2VsZWN0O1xuIiwiaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9BdG9tcy9CdXR0b24vQnV0dG9uJztcbmltcG9ydCBGb3JtSXRlbSBmcm9tICcuLi8uLi9Nb2xlY3VsZXMvRm9ybUl0ZW0vRm9ybUl0ZW0nO1xuaW1wb3J0IEZvcm1UaXRsZSBmcm9tICcuLi8uLi9BdG9tcy9Gb3JtVGl0bGUvRm9ybVRpdGxlJztcbmltcG9ydCBTd2l0Y2hMaW5rIGZyb20gJy4uLy4uL0F0b21zL1N3aXRjaExpbmsvU3dpdGNoTGluayc7XG5pbXBvcnQgeyBjb3VudHJ5X2xpc3QgfSBmcm9tICcuLi8uLi8uLi9Db25zdGFudHMvY291bnRyaWVzJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi4vLi4vTW9sZWN1bGVzL1NlbGVjdC9TZWxlY3QnO1xuaW1wb3J0IFJhZGlvIGZyb20gJy4uLy4uL01vbGVjdWxlcy9SYWRpby9SYWRpbyc7XG5pbXBvcnQgeyBnZW5kZXIgfSBmcm9tICcuLi8uLi8uLi9Db25zdGFudHMvZ2VuZGVyJztcbnZhciBGb3JtID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBGb3JtKHR5cGUsIG9iaikge1xuICAgICAgICB0aGlzLl9mb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICB0aGlzLl9mb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBcImZvcm0gXCIuY29uY2F0KHR5cGUpKTtcbiAgICAgICAgdmFyIHRpdGxlID0gbmV3IEZvcm1UaXRsZSh0eXBlKS5mb3JtVGl0bGU7XG4gICAgICAgIHRoaXMuX2Zvcm0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iai5sYWJlbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGZvcm1JdGVtID0gbmV3IEZvcm1JdGVtKG9iai5sYWJlbFtpXS5mb3IsIG9iai5sYWJlbFtpXS50ZXh0LCBvYmoubGFiZWxbaV0uaW1nLCBvYmouaW5wdXRbaV0udHlwZSwgb2JqLmlucHV0W2ldLm5hbWUsIG9iai5pbnB1dFtpXS52YWx1ZSwgb2JqLmlucHV0W2ldLnBsYWNlaG9sZGVyKS5mb3JtSXRlbTtcbiAgICAgICAgICAgIHRoaXMuX2Zvcm0uYXBwZW5kQ2hpbGQoZm9ybUl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09ICdyZWdpc3RlcicpIHtcbiAgICAgICAgICAgIHZhciBjb3VudHJ5ID0gbmV3IFNlbGVjdChjb3VudHJ5X2xpc3QsICdTZWxlY3QgYSBDb3VudHJ5Jykuc2VsZWN0O1xuICAgICAgICAgICAgdGhpcy5fZm9ybS5hcHBlbmRDaGlsZChjb3VudHJ5KTtcbiAgICAgICAgICAgIHZhciByYWRpbyA9IG5ldyBSYWRpbyhnZW5kZXIpLnJhZGlvO1xuICAgICAgICAgICAgdGhpcy5fZm9ybS5hcHBlbmRDaGlsZChyYWRpbyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJ1dHRvbiA9IG5ldyBCdXR0b24ob2JqLmJ1dHRvbi5jbGFzcywgb2JqLmJ1dHRvbi50eXBlLCBvYmouYnV0dG9uLnRleHQpLmJ1dHRvbjtcbiAgICAgICAgdmFyIGxpbmsgPSBuZXcgU3dpdGNoTGluayh0eXBlKS5zd2l0Y2hMaW5rO1xuICAgICAgICB0aGlzLl9mb3JtLmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICB0aGlzLl9mb3JtLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtLnByb3RvdHlwZSwgXCJmb3JtXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZm9ybTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBGb3JtO1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iLCJpbXBvcnQgRm9ybSBmcm9tIFwiLi4vLi4vT3JnYW5pc21zL0Zvcm0vRm9ybVwiO1xuaW1wb3J0IEJhY2tncm91bmRJbWcgZnJvbSBcIi4uLy4uL01vbGVjdWxlcy9CYWNrZ3JvdW5kSW1nL0JhY2tncm91bmRJbWdcIjtcbnZhciBGb3JtQ29udGFpbmVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBGb3JtQ29udGFpbmVyKHR5cGUsIG9iaikge1xuICAgICAgICB0aGlzLl9mb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHZhciBmb3JtID0gbmV3IEZvcm0odHlwZSwgb2JqKS5mb3JtO1xuICAgICAgICB0aGlzLl9mb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgICAgICB2YXIgYmFja2dyb3VuZEltZyA9IG5ldyBCYWNrZ3JvdW5kSW1nKHR5cGUpLmJhY2tncm91bmRJbWc7XG4gICAgICAgIHRoaXMuX2Zvcm1Db250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsIFwiZm9ybUNvbnRhaW5lciBcIi5jb25jYXQodHlwZSkpO1xuICAgICAgICB0aGlzLl9mb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGJhY2tncm91bmRJbWcpO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybUNvbnRhaW5lci5wcm90b3R5cGUsIFwiZm9ybUNvbnRhaW5lclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Zvcm1Db250YWluZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gRm9ybUNvbnRhaW5lcjtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBGb3JtQ29udGFpbmVyO1xuIiwiZXhwb3J0IHZhciBjb3VudHJ5X2xpc3QgPSBbXCJBZmdoYW5pc3RhblwiLCBcIkFsYmFuaWFcIiwgXCJBbGdlcmlhXCIsIFwiQW5kb3JyYVwiLCBcIkFuZ29sYVwiLCBcIkFuZ3VpbGxhXCIsIFwiQW50aWd1YSAmYW1wOyBCYXJidWRhXCIsIFwiQXJnZW50aW5hXCIsIFwiQXJtZW5pYVwiLCBcIkFydWJhXCIsIFwiQXVzdHJhbGlhXCIsIFwiQXVzdHJpYVwiLCBcIkF6ZXJiYWlqYW5cIiwgXCJCYWhhbWFzXCIsIFwiQmFocmFpblwiLCBcIkJhbmdsYWRlc2hcIiwgXCJCYXJiYWRvc1wiLCBcIkJlbGFydXNcIiwgXCJCZWxnaXVtXCIsIFwiQmVsaXplXCIsIFwiQmVuaW5cIiwgXCJCZXJtdWRhXCIsIFwiQmh1dGFuXCIsIFwiQm9saXZpYVwiLCBcIkJvc25pYSAmYW1wOyBIZXJ6ZWdvdmluYVwiLCBcIkJvdHN3YW5hXCIsIFwiQnJhemlsXCIsIFwiQnJpdGlzaCBWaXJnaW4gSXNsYW5kc1wiLCBcIkJydW5laVwiLCBcIkJ1bGdhcmlhXCIsIFwiQnVya2luYSBGYXNvXCIsIFwiQnVydW5kaVwiLCBcIkNhbWJvZGlhXCIsIFwiQ2FtZXJvb25cIiwgXCJDYXBlIFZlcmRlXCIsIFwiQ2F5bWFuIElzbGFuZHNcIiwgXCJDaGFkXCIsIFwiQ2hpbGVcIiwgXCJDaGluYVwiLCBcIkNvbG9tYmlhXCIsIFwiQ29uZ29cIiwgXCJDb29rIElzbGFuZHNcIiwgXCJDb3N0YSBSaWNhXCIsIFwiQ290ZSBEIEl2b2lyZVwiLCBcIkNyb2F0aWFcIiwgXCJDcnVpc2UgU2hpcFwiLCBcIkN1YmFcIiwgXCJDeXBydXNcIiwgXCJDemVjaCBSZXB1YmxpY1wiLCBcIkRlbm1hcmtcIiwgXCJEamlib3V0aVwiLCBcIkRvbWluaWNhXCIsIFwiRG9taW5pY2FuIFJlcHVibGljXCIsIFwiRWN1YWRvclwiLCBcIkVneXB0XCIsIFwiRWwgU2FsdmFkb3JcIiwgXCJFcXVhdG9yaWFsIEd1aW5lYVwiLCBcIkVzdG9uaWFcIiwgXCJFdGhpb3BpYVwiLCBcIkZhbGtsYW5kIElzbGFuZHNcIiwgXCJGYXJvZSBJc2xhbmRzXCIsIFwiRmlqaVwiLCBcIkZpbmxhbmRcIiwgXCJGcmFuY2VcIiwgXCJGcmVuY2ggUG9seW5lc2lhXCIsIFwiRnJlbmNoIFdlc3QgSW5kaWVzXCIsIFwiR2Fib25cIiwgXCJHYW1iaWFcIiwgXCJHZW9yZ2lhXCIsIFwiR2VybWFueVwiLCBcIkdoYW5hXCIsIFwiR2licmFsdGFyXCIsIFwiR3JlZWNlXCIsIFwiR3JlZW5sYW5kXCIsIFwiR3JlbmFkYVwiLCBcIkd1YW1cIiwgXCJHdWF0ZW1hbGFcIiwgXCJHdWVybnNleVwiLCBcIkd1aW5lYVwiLCBcIkd1aW5lYSBCaXNzYXVcIiwgXCJHdXlhbmFcIiwgXCJIYWl0aVwiLCBcIkhvbmR1cmFzXCIsIFwiSG9uZyBLb25nXCIsIFwiSHVuZ2FyeVwiLCBcIkljZWxhbmRcIiwgXCJJbmRpYVwiLCBcIkluZG9uZXNpYVwiLCBcIklyYW5cIiwgXCJJcmFxXCIsIFwiSXJlbGFuZFwiLCBcIklzbGUgb2YgTWFuXCIsIFwiSXNyYWVsXCIsIFwiSXRhbHlcIiwgXCJKYW1haWNhXCIsIFwiSmFwYW5cIiwgXCJKZXJzZXlcIiwgXCJKb3JkYW5cIiwgXCJLYXpha2hzdGFuXCIsIFwiS2VueWFcIiwgXCJLdXdhaXRcIiwgXCJLeXJneXogUmVwdWJsaWNcIiwgXCJMYW9zXCIsIFwiTGF0dmlhXCIsIFwiTGViYW5vblwiLCBcIkxlc290aG9cIiwgXCJMaWJlcmlhXCIsIFwiTGlieWFcIiwgXCJMaWVjaHRlbnN0ZWluXCIsIFwiTGl0aHVhbmlhXCIsIFwiTHV4ZW1ib3VyZ1wiLCBcIk1hY2F1XCIsIFwiTWFjZWRvbmlhXCIsIFwiTWFkYWdhc2NhclwiLCBcIk1hbGF3aVwiLCBcIk1hbGF5c2lhXCIsIFwiTWFsZGl2ZXNcIiwgXCJNYWxpXCIsIFwiTWFsdGFcIiwgXCJNYXVyaXRhbmlhXCIsIFwiTWF1cml0aXVzXCIsIFwiTWV4aWNvXCIsIFwiTW9sZG92YVwiLCBcIk1vbmFjb1wiLCBcIk1vbmdvbGlhXCIsIFwiTW9udGVuZWdyb1wiLCBcIk1vbnRzZXJyYXRcIiwgXCJNb3JvY2NvXCIsIFwiTW96YW1iaXF1ZVwiLCBcIk5hbWliaWFcIiwgXCJOZXBhbFwiLCBcIk5ldGhlcmxhbmRzXCIsIFwiTmV0aGVybGFuZHMgQW50aWxsZXNcIiwgXCJOZXcgQ2FsZWRvbmlhXCIsIFwiTmV3IFplYWxhbmRcIiwgXCJOaWNhcmFndWFcIiwgXCJOaWdlclwiLCBcIk5pZ2VyaWFcIiwgXCJOb3J3YXlcIiwgXCJPbWFuXCIsIFwiUGFraXN0YW5cIiwgXCJQYWxlc3RpbmVcIiwgXCJQYW5hbWFcIiwgXCJQYXB1YSBOZXcgR3VpbmVhXCIsIFwiUGFyYWd1YXlcIiwgXCJQZXJ1XCIsIFwiUGhpbGlwcGluZXNcIiwgXCJQb2xhbmRcIiwgXCJQb3J0dWdhbFwiLCBcIlB1ZXJ0byBSaWNvXCIsIFwiUWF0YXJcIiwgXCJSZXVuaW9uXCIsIFwiUm9tYW5pYVwiLCBcIlJ1c3NpYVwiLCBcIlJ3YW5kYVwiLCBcIlNhaW50IFBpZXJyZSAmYW1wOyBNaXF1ZWxvblwiLCBcIlNhbW9hXCIsIFwiU2FuIE1hcmlub1wiLCBcIlNhdGVsbGl0ZVwiLCBcIlNhdWRpIEFyYWJpYVwiLCBcIlNlbmVnYWxcIiwgXCJTZXJiaWFcIiwgXCJTZXljaGVsbGVzXCIsIFwiU2llcnJhIExlb25lXCIsIFwiU2luZ2Fwb3JlXCIsIFwiU2xvdmFraWFcIiwgXCJTbG92ZW5pYVwiLCBcIlNvdXRoIEFmcmljYVwiLCBcIlNvdXRoIEtvcmVhXCIsIFwiU3BhaW5cIiwgXCJTcmkgTGFua2FcIiwgXCJTdCBLaXR0cyAmYW1wOyBOZXZpc1wiLCBcIlN0IEx1Y2lhXCIsIFwiU3QgVmluY2VudFwiLCBcIlN0LiBMdWNpYVwiLCBcIlN1ZGFuXCIsIFwiU3VyaW5hbWVcIiwgXCJTd2F6aWxhbmRcIiwgXCJTd2VkZW5cIiwgXCJTd2l0emVybGFuZFwiLCBcIlN5cmlhXCIsIFwiVGFpd2FuXCIsIFwiVGFqaWtpc3RhblwiLCBcIlRhbnphbmlhXCIsIFwiVGhhaWxhbmRcIiwgXCJUaW1vciBMJ0VzdGVcIiwgXCJUb2dvXCIsIFwiVG9uZ2FcIiwgXCJUcmluaWRhZCAmYW1wOyBUb2JhZ29cIiwgXCJUdW5pc2lhXCIsIFwiVHVya2V5XCIsIFwiVHVya21lbmlzdGFuXCIsIFwiVHVya3MgJmFtcDsgQ2FpY29zXCIsIFwiVWdhbmRhXCIsIFwiVWtyYWluZVwiLCBcIlVuaXRlZCBBcmFiIEVtaXJhdGVzXCIsIFwiVW5pdGVkIEtpbmdkb21cIiwgXCJVcnVndWF5XCIsIFwiVXpiZWtpc3RhblwiLCBcIlZlbmV6dWVsYVwiLCBcIlZpZXRuYW1cIiwgXCJWaXJnaW4gSXNsYW5kcyAoVVMpXCIsIFwiWWVtZW5cIiwgXCJaYW1iaWFcIiwgXCJaaW1iYWJ3ZVwiXTtcbiIsImV4cG9ydCB2YXIgZ2VuZGVyID0ge1xuICAgIGxhYmVsOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvcjogXCJnZW5kZXIxXCIsXG4gICAgICAgICAgICB0ZXh0OiBcIk1hbGVcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yOiBcImdlbmRlcjJcIixcbiAgICAgICAgICAgIHRleHQ6IFwiRmVtYWxlXCIsXG4gICAgICAgIH1cbiAgICBdLFxuICAgIGlucHV0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiZ2VuZGVyXCIsXG4gICAgICAgICAgICB0eXBlOiBcInJhZGlvXCIsXG4gICAgICAgICAgICB2YWx1ZTogXCJNYWxlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJnZW5kZXJcIixcbiAgICAgICAgICAgIHR5cGU6IFwicmFkaW9cIixcbiAgICAgICAgICAgIHZhbHVlOiBcIkZlbWFsZVwiXG4gICAgICAgIH1cbiAgICBdXG59O1xuIiwiZXhwb3J0IHZhciBsb2dpbiA9IHtcbiAgICBsYWJlbDogW1xuICAgICAgICB7XG4gICAgICAgICAgICBmb3I6IFwiZW1haWxcIixcbiAgICAgICAgICAgIGltZzogXCIuLi9hc3NldHMvbGV0dGVyLnBuZ1wiLFxuICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yOiBcInBzd1wiLFxuICAgICAgICAgICAgaW1nOiBcIi4uL2Fzc2V0cy9zaGllbGQucG5nXCIsXG4gICAgICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgaW5wdXQ6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbWFpbFwiLFxuICAgICAgICAgICAgdmFsdWU6IFwiXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJwc3dcIixcbiAgICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlBhc3N3b3JkXCIsXG4gICAgICAgICAgICB2YWx1ZTogXCJcIlxuICAgICAgICB9LFxuICAgIF0sXG4gICAgYnV0dG9uOiB7XG4gICAgICAgIGNsYXNzOiAnYnV0dG9uJyxcbiAgICAgICAgdHlwZTogJ3N1Ym1pdCcsXG4gICAgICAgIHRleHQ6ICdMb2dpbicsXG4gICAgICAgIGV2ZW50TmFtZTogJ29uc3VibWl0JyxcbiAgICB9XG59O1xuIiwiZXhwb3J0IHZhciByZWdpc3RlciA9IHtcbiAgICBsYWJlbDogW1xuICAgICAgICB7XG4gICAgICAgICAgICBmb3I6IFwiZW1haWxcIixcbiAgICAgICAgICAgIGltZzogXCIuLi9hc3NldHMvbGV0dGVyLnBuZ1wiLFxuICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yOiBcInVzZXJOYW1lXCIsXG4gICAgICAgICAgICBpbWc6IFwiLi4vYXNzZXRzL2FjY291bnQucG5nXCIsXG4gICAgICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBmb3I6IFwicHN3MVwiLFxuICAgICAgICAgICAgaW1nOiBcIi4uL2Fzc2V0cy9zaGllbGQucG5nXCIsXG4gICAgICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBmb3I6IFwicHN3MlwiLFxuICAgICAgICAgICAgaW1nOiBcIi4uL2Fzc2V0cy9zaGllbGQucG5nXCIsXG4gICAgICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgaW5wdXQ6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJlLmcgbmFtZUBuYW1lLmNvbVwiLFxuICAgICAgICAgICAgdmFsdWU6IFwiXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJ1c2VyTmFtZVwiLFxuICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJVc2VyIE5hbWVcIixcbiAgICAgICAgICAgIHZhbHVlOiBcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwicHN3XCIsXG4gICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJQYXNzd29yZFwiLFxuICAgICAgICAgICAgdmFsdWU6IFwiXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJwc3dcIixcbiAgICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlBhc3N3b3JkIDJcIixcbiAgICAgICAgICAgIHZhbHVlOiBcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiZ2VuZGVyXCIsXG4gICAgICAgICAgICB0eXBlOiBcInJhZGlvXCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJcIixcbiAgICAgICAgICAgIHZhbHVlOiBcIk1hbGVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcImdlbmRlclwiLFxuICAgICAgICAgICAgdHlwZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiXCIsXG4gICAgICAgICAgICB2YWx1ZTogXCJGZW1hbGVcIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBidXR0b246IHtcbiAgICAgICAgY2xhc3M6ICdidXR0b24nLFxuICAgICAgICB0eXBlOiAnc3VibWl0JyxcbiAgICAgICAgdGV4dDogJ1JlZ2lzdGVyJyxcbiAgICB9XG59O1xuIiwiZXhwb3J0IHZhciB2YWxpZEVtYWlsID0gZnVuY3Rpb24gKG1haWwpIHtcbiAgICB2YXIgcmVneCA9IC9eXFx3KyhbXFwuLV0/XFx3KykqQFxcdysoW1xcLi1dP1xcdyspKihcXC5cXHd7MiwzfSkrJC87XG4gICAgdmFyIHZhbGlkTXNnID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndmFsaWQgZW1haWwnKVswXTtcbiAgICB2YXIgdGV4dCA9ICcnO1xuICAgIGlmIChyZWd4LnRlc3QobWFpbCkpIHtcbiAgICAgICAgdmFsaWRNc2cuaW5uZXJUZXh0ID0gdGV4dDtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0ZXh0ID0gXCJZb3UgaGF2ZSBlbnRlcmVkIGFuIGludmFsaWQgZW1haWwgYWRkcmVzcyFcIjtcbiAgICAgICAgdmFsaWRNc2cuaW5uZXJUZXh0ID0gdGV4dDtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn07XG5leHBvcnQgdmFyIHZhbGlkVXNlck5hbWUgPSBmdW5jdGlvbiAocHN3KSB7XG4gICAgdmFyIHJlZ3ggPSAvW2Etel0vO1xuICAgIHZhciB2YWxpZE1zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ZhbGlkIHVzZXJOYW1lJylbMF07XG4gICAgdmFyIHRleHQgPSAnJztcbiAgICBpZiAocmVneC50ZXN0KHBzdykpIHtcbiAgICAgICAgdmFsaWRNc2cuaW5uZXJUZXh0ID0gdGV4dDtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0ZXh0ID0gXCJPbmx5IGxvd2VyY2FzZSBjaGFyYWN0ZXJzIGFsbG93ZWRcIjtcbiAgICAgICAgdmFsaWRNc2cuaW5uZXJUZXh0ID0gdGV4dDtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn07XG5leHBvcnQgdmFyIHZhbGlkUHN3MSA9IGZ1bmN0aW9uIChwc3cpIHtcbiAgICB2YXIgcmVneCA9IC9eW2EtekEtWjAtOSFAIyQlXiYqXXs4LDE2fSQvO1xuICAgIHZhciBudW1iZXJzID0gL1swLTldL2c7XG4gICAgdmFyIHVwcGVyY2FzZSA9IC9bQS1aXS9nO1xuICAgIHZhciB0ZXh0ID0gJyc7XG4gICAgdmFyIHZhbGlkTXNnID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndmFsaWQgcHN3MScpWzBdO1xuICAgIHZhciB0ZXh0MSA9IFwiIC1Zb3VyIHBhc3N3b3JkIG11c3QgYmUgbW9yZSB0aGFuIDggY2hhcmFjdGVycyBhbmQgbGVzcyB0aGFuIDE2IFxcblwiO1xuICAgIHZhciB0ZXh0MiA9IFwiLVlvdXIgcGFzc3dvcmQgbXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSBkaWdpdCBcXG5cIjtcbiAgICB2YXIgdGV4dDMgPSBcIi1Zb3VyIHBhc3N3b3JkIG11c3QgY29udGFpbiBhdCBsZWFzdCBvbmUgdXBwZXJjYXNlIGxldHRlci5cXG5cIjtcbiAgICBpZiAocmVneC50ZXN0KHBzdykpIHtcbiAgICAgICAgdmFsaWRNc2cuaW5uZXJUZXh0ID0gdGV4dDtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghcmVneC50ZXN0KHBzdykpIHtcbiAgICAgICAgaWYgKHBzdy5sZW5ndGggPCA4IHx8IHBzdy5sZW5ndGggPiAxNikge1xuICAgICAgICAgICAgdGV4dCArPSB0ZXh0MTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXBzdy5tYXRjaChudW1iZXJzKSkge1xuICAgICAgICAgICAgdGV4dCArPSB0ZXh0MjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXBzdy5tYXRjaCh1cHBlcmNhc2UpKSB7XG4gICAgICAgICAgICB0ZXh0ICs9IHRleHQzO1xuICAgICAgICB9XG4gICAgICAgIHZhbGlkTXNnLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59O1xuZXhwb3J0IHZhciB2YWxpZFBzdzIgPSBmdW5jdGlvbiAocHN3MSwgcHN3Mikge1xuICAgIHZhciB2YWxpZE1zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ZhbGlkIHBzdzInKVswXTtcbiAgICB2YXIgdGV4dCA9ICcnO1xuICAgIHZhbGlkUHN3MShwc3cxKTtcbiAgICBpZiAocHN3MSA9PT0gcHN3Mikge1xuICAgICAgICB2YWxpZE1zZy5pbm5lclRleHQgPSB0ZXh0O1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRleHQgPSBcIlBsZWFzZSBFbnRlciB0aGUgU2FtZSBQYXNzd29yZFwiO1xuICAgICAgICB2YWxpZE1zZy5pbm5lclRleHQgPSB0ZXh0O1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufTtcbmV4cG9ydCB2YXIgdmFsaWRTaWduSW4gPSBmdW5jdGlvbiAoZW1haWwsIHBzdykge1xuICAgIHZhciB2YWxpZE1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2YWxpZCBlbWFpbCcpWzBdO1xuICAgIHZhciB2YWxpZFBhc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2YWxpZCBwc3cnKVswXTtcbiAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oZW1haWwpIHx8IFwiXCIpO1xuICAgIHZhciB0ZXh0ID0gJyc7XG4gICAgdmFyIHRleHQxID0gXCJZb3UgRW50ZXJlZCBJbnZhbGlkIEVtYWlsIEFkZHJlc3MhXCI7XG4gICAgdmFyIHRleHQyID0gJ1BsZWFzZSBtYWtlIHN1cmUgdG8gd3JpdGUgdGhlIHBhc3N3b3JkIGNvcnJlY3RseSc7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgICAgdmFsaWRNYWlsLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgICAgIGlmIChcIlwiLmNvbmNhdChwc3cpICE9PSBkYXRhWzBdKSB7XG4gICAgICAgICAgICB2YWxpZFBhc3MuaW5uZXJUZXh0ID0gdGV4dDI7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWxpZFBhc3MuaW5uZXJUZXh0ID0gdGV4dDtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YWxpZE1haWwuaW5uZXJUZXh0ID0gdGV4dDE7XG4gICAgICAgIHZhbGlkUGFzcy5pbm5lclRleHQgPSB0ZXh0MjtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGxvZ2luIH0gZnJvbSAnLi4vLi4vQ29uc3RhbnRzL2xvZ2luJztcbmltcG9ydCBGb3JtQ29udGFpbmVyIGZyb20gJy4uL1RlbXBsYXRlcy9Gb3JtQ29udGFpbmVyL0Zvcm1Db250YWluZXInO1xudmFyIGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xudmFyIGFwcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYXBwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYXBwJyk7XG52YXIgZm9ybSA9IG5ldyBGb3JtQ29udGFpbmVyKCdsb2dpbicsIGxvZ2luKS5mb3JtQ29udGFpbmVyO1xuYXBwLmFwcGVuZENoaWxkKGZvcm0pO1xuYm9keS5hcHBlbmRDaGlsZChhcHApO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
export var validEmail = function (mail) {
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
export var validUserName = function (psw) {
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
export var validPsw1 = function (psw) {
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
export var validPsw2 = function (psw1, psw2) {
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
export var validSignIn = function (email, psw) {
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

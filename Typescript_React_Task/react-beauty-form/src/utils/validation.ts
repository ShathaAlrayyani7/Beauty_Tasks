type hp = HTMLParagraphElement;

export const validEmail = (mail: string): boolean => {
    const regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let validMsg = document.getElementsByClassName("valid email")[0] as hp;
    let text = "";
    if (regx.test(mail)) {
        validMsg.innerText = text;
        return true;
    } else {
        text = "You have entered an invalid email address!";
        validMsg.innerText = text;
        return false;
    }
};

export const validUserName = (psw: string): boolean => {
    const regx = /^[a-z]+$/;
    const validMsg = document.getElementsByClassName("valid userName")[0] as hp;
    let text = "";

    if (regx.test(psw)) {
        validMsg.innerText = text;
        return true;
    } else {
        text = `Only lowercase characters allowed`;
        validMsg.innerText = text;
        return false;
    }
};

export const validPsw1 = (psw: string): boolean | undefined => {
    const regx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/;
    const numbers = /[0-9]/g;
    const uppercase = /[A-Z]/g;
    let text = "";
    const validMsg = document.getElementsByClassName("valid psw")[0] as hp;

    const text1 = ` -Your password must be more than 8 characters and less than 16 \n`;
    const text2 = `-Your password must contain at least one digit \n`;
    const text3 = `-Your password must contain at least one uppercase letter.\n`;
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

export const validPsw2 = (psw1: string, psw2: string): boolean => {
    const validMsg = document.getElementsByClassName("valid psw")[1] as hp;
    let text = "";

    validPsw1(psw1);
    if (psw1 === psw2) {
        validMsg.innerText = text;
        return true;
    } else {
        text = `Please Enter the Same Password`;
        validMsg.innerText = text;
        return false;
    }
};

export const validSignIn = (email: string, psw: string): boolean => {
    let validMail = document.getElementsByClassName("valid email")[0] as hp;
    let validPass = document.getElementsByClassName("valid psw")[0] as hp;
    let data: string = JSON.parse(localStorage.getItem(email) || "[]");
    const keys = Object.keys(localStorage);

    const text = "";
    const text1 = "You Entered Invalid Email Address!";
    const text2 = "Please make sure to write the password correctly";

    if (keys.includes(email)) {
        validMail.innerText = text;
        if (`${psw}` !== data[0]) {
            validPass.innerText = text2;
            return false;
        } else {
            validPass.innerText = text;
            return true;
        }
    } else {
        validMail.innerText = text1;
        validPass.innerText = text2;
        return false;
    }
};

export const registerValidation = <html extends HTMLInputElement>() => {
    const email = document.getElementsByName("email")[0] as html;
    validEmail(email.value);
    const userName = document.getElementsByName("userName")[0] as html;
    validUserName(userName.value);
    const psw1 = document.getElementsByName("psw")[0] as html;
    validPsw1(psw1.value);
    const psw2 = document.getElementsByName("psw")[1] as html;
    validPsw2(psw1.value, psw2.value);
};

export const loginValidation = <html extends HTMLInputElement>() => {
    const email = document.getElementsByName("email")[0] as html;

    const psw = document.getElementsByName("psw")[0] as html;
    validSignIn(email.value, psw.value);
};

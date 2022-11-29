
export const validEmail = (mail)=>{
    let regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let validMsg = document.getElementsByClassName('valid email')[0];
    let text = '';

    if (regx.test(mail)){
        validMsg.innerText = text
        return true
    }else{
        text = "You have entered an invalid email address!"
        validMsg.innerText = text
        return false
    }
}

export const validUserName = (psw)=>{
    let regx = /[a-z]/;
    let validMsg = document.getElementsByClassName('valid userName')[0];
    let text = '';

    if (regx.test(psw)){
        validMsg.innerText = text
        return true
    }else{
        text = `Only lowercase characters allowed`
        validMsg.innerText = text
        return false
    }
}

export const validPsw1 = (psw)=>{
    const regx = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/
    const numbers = /[0-9]/
    const uppercase = /[A-Z]/
    const length = /^.{8,16}$/
    let text = ''
    const validMsg = document.getElementsByClassName('valid psw')[0]

    const text1 = ` -Your password must be more than 8 characters and less than 16 \n`
    const text2  =  `-Your password must contain at least one digit \n`
    const text3  = `-Your password must contain at least one uppercase letter.\n`
    if(!regx.test(psw)){
             
        if(!length.test(psw)){
            text += text1
        }
        if(!numbers.test(psw)){
            text += text2
        }
        if(!uppercase.test(psw)){
            text += text3
        }
        validMsg.innerText=text
        
    }else{
        validMsg.innerText=text
        return true
    }
}

export const validPsw2 = (psw1,psw2)=>{

    let validMsg = document.getElementsByClassName('valid psw2')[0];
    let text = ''
    
    validPsw1(psw1)
    if (psw1 === psw2){
        validMsg.innerText = text
        return true
    }else{
        text = `Please Enter the Same Password`
        validMsg.innerText = text
        return false
    }
}

export const validSignIn =(email,psw)=>{

    let validMail = document.getElementsByClassName('valid email')[0];
    let validPass = document.getElementsByClassName('valid psw')[0];
    let data = JSON.parse(localStorage.getItem(email))
    let text = ''
    let text1 = "You Entered Invalid Email Address!"
    let text2 = 'Please make sure to write the password correctly'
   
    if (data){
        validMail.innerText = text;
        if(`${psw}` != data[0]) {
            validPass.innerText = text2
            return false
        } else {
            validPass.innerText = text
            return true
        }
    }
    else{
        validMail.innerText = text1;
        validPass.innerText = text2
        return false

    }
}

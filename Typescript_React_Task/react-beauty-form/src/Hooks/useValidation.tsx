import { useState } from "react";

interface dataInterface {
    [key: string]: string;
    psw2:string
    psw: string;
    email: string;
    userName : string;
    psw1: string
    email1: string
}

export const useValidation = () => {
    const [values, setValues] = useState<dataInterface>({
        userName: "",
        psw: "",
        psw2: "",
        email: "",
        psw1:"",
        email1:""
    });

    const [errors, setErrors] = useState<dataInterface>({
        userName: "",
        psw: "",
        psw2: "",
        email: "",
        psw1:"",
        email1:""
    });

    const loginValidate = (e: InputEvent, name: string, value: string) => {
        let data :string = JSON.parse(localStorage.getItem(values.email1)||"[]");
        const keys = Object.keys(localStorage);        
        const text = ''
        const text1 = "You Entered Invalid Email Address!"
        const text2 = 'Please make sure to write the password correctly'
   
        switch (name) {
            case "email1":
                if (keys.includes(value)) {
                    console.log(values);
                    if(values.psw1 === data[0]){
                        setErrors({
                            ...errors,
                            psw1: text,
                            email1: text,
                        });
                        return true
                    }
                    else{
                        setErrors({
                            ...errors,
                            psw1: text2,
                            email1: text,
                        });
                        return false
                    }
                }
                else{
                    setErrors({
                        ...errors,
                        email1: text1,
                        psw1: text2
                    });
                    return false
                }
            case "psw1":                
                if(value === data[0]){
                    setErrors({
                        ...errors,
                        psw1: text,
                    });
                    return true
                }
                else{
                    setErrors({
                        ...errors,
                        psw1: text2,
                    });
                    return false
                }
            default:
                return false;
        }
    };

    const registerValidate = (e: InputEvent, name: string, value: string) : boolean => {
        e.preventDefault();
        switch (name) {
            case "userName":
                if (value.length <= 4) {
                    // we will set the error state

                    setErrors({
                        ...errors,
                        userName: "Username atleast have 5 letters",
                    });
                    return false
                } else {
                    // set the error state empty or remove the error for username input

                    //omit function removes/omits the value from given object and returns a new object
                    setErrors({
                        ...errors,
                        userName: "",
                    });
                    return true
                }

            case "email":
                const emailRegx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if (!emailRegx.test(value)) {
                    setErrors({
                        ...errors,
                        email: "Enter a valid email address",
                    });
                    return false
                } else {
                    setErrors({
                        ...errors,
                        email: "",
                    });
                    return true
                }

            case "psw":
                const regx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/;
                const numbers = /[0-9]/g;
                const uppercase = /[A-Z]/g;
                let text = "";
                const text1 = ` -Your password must be more than 8 characters and less than 16 \n`;
                const text2 = `-Your password must contain at least one digit \n`;
                const text3 = `-Your password must contain at least one uppercase letter.\n`;

                if (regx.test(value)) {
                    setErrors({
                        ...errors,
                        psw: "",
                    });
                    return true
                } else {
                    if (value.length < 8 || value.length > 16) {
                        text += text1;
                    }
                    if (!value.match(numbers)) {
                        text += text2;
                    }
                    if (!value.match(uppercase)) {
                        text += text3;
                    }
                    setErrors({
                        ...errors,
                        psw: text,
                    });
                    return false
                }

            case "psw2":
                if (value != values.psw) {
                    setErrors({
                        ...errors,
                        psw2: "Please make sure to write the same password",
                    });
                    return false
                }
                else{
                    setErrors({
                        ...errors,
                        psw2:'',
                    });
                    return true
                }
            default:
                return false
        }
    };

    const handleValidation = (e: InputEvent) : boolean => {
        e.preventDefault();
        let data = e.currentTarget! as HTMLInputElement;
        let name = data.name;
        let value = data.value;

        setValues({
            ...values,
            [name]: value,
        });

        if(name == 'email1' || name == 'psw1'){
            loginValidate(e, name, value)
            if(loginValidate(e, name, value)){
                return true
            }else{
                return false
            }
        }else{
            registerValidate(e, name, value);
            let condition = registerValidate(e, name, value)
            if(condition){
                return true
            }else{
                return false
            }
        }

    };

    return {
        values,
        errors,
        handleValidation,
    };
};

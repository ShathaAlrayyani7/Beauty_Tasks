import { formData } from "../Interface/inteface"


export const register : formData = {
    button: {
        class: 'button',
        text: 'Register',
        type: 'submit',
    
    },
    input: [
        {
            name: "email",
            placeholder: "e.g name@name.com",
            type: "text",
            value: ""
        },
        {
            name: "userName",
            placeholder: "User Name",
            type: "text",
            value: ""
        },
        {
            name: "psw",
            placeholder: "Password",
            type: "password",
            value: ""
        },
        {
            name: "psw",
            placeholder: "Password 2",
            type: "password",
            value: ""
        },
        {
            name: "gender",
            placeholder: "",
            type: "radio",
            value: "Male"
        },
        {
            name: "gender",
            placeholder: "",
            type: "radio",
            value: "Female"
        }
    ],
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

    ]
}

import { formData } from "../Interfaces/interface"

export const login : formData = {
    button:{
        class:'button',
        eventName:'onsubmit',
        text:'Login',
        type:'submit',
    },
    input:[
        {
            name : "email",
            placeholder:"Email",
            type :"text",
            value:""
        },
        {
            name : "psw",
            placeholder:"Password",
            type :"password",
            value:""
        },
    ],
    label:[
        {
            for : "email",
            img : "../assets/letter.png",
            text :"",
            
        },
        {
            for : "psw",
            img : "../assets/shield.png",
            text :"",
        },
    ]
}
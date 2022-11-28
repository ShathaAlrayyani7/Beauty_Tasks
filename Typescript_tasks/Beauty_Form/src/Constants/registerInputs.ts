import { inputs } from "../Interface/inteface"
import { registerValidation } from "../utils/validation"

export const registerInputs: inputs[]= [
    {
        name: "email",
        placeholder: "e.g name@name.com",
        type: "text",
        value: "",
        labelText:"",
        labelIcon:"../assets/letter.png",
        event : registerValidation
    },
    {
        name: "userName",
        placeholder: "User Name",
        type: "text",
        value: "",
        labelText:"",
        labelIcon:"../assets/account.png",
        event : registerValidation

    },
    {
        name: "psw",
        placeholder: "Password",
        type: "password",
        value: "",
        labelText:"",
        labelIcon:"../assets/shield.png",
        event : registerValidation

    },
    {
        name: "psw",
        placeholder: "Password 2",
        type: "password",
        value: "",
        labelText:"",
        labelIcon:"../assets/shield.png",
        event : registerValidation
    }
]


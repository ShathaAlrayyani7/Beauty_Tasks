import { inputs} from "../Interface/inteface"
import { loginValidation } from "../utils/validation"

export const loginInputs:inputs[] = [
    {
        type :"text",
        name : "email",
        value:"",
        labelText :"",
        placeholder:"Email",
        labelIcon : "../assets/letter.png",
        event : loginValidation
    },
    {
        name : "psw",
        placeholder:"Password",
        type :"password",
        value:"",
        labelText:"",
        labelIcon:"../assets/shield.png",
        event : loginValidation
    },
]

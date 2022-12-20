import {  useNavigate } from "react-router-dom";
import { country_list } from "../../../Constants/countries";
import {
    ButtonsEnum,
    FormTitlesEnum,
    SwitchLinksEnum,
} from "../../../Constants/Enums";
import { genderInputs } from "../../../Constants/genderInputs";
import { registerInputs } from "../../../Constants/registerInputs";
import { useValidation } from "../../../Hooks/useValidation";
import { Form } from "../Form/Form";

interface dataInterface {
    [key: string]: string;
    psw2:string
    psw: string;
    email: string;
    userName : string;
    psw1: string
    email1: string
}
export const RegisterForm = () => {
    const { handleValidation, values, errors } = useValidation();
    const navigate = useNavigate();

    const handleSubmit = (e: MouseEvent) => {
        e.preventDefault();
        
        const keys = Object.keys(localStorage)
        console.log(keys);
        let newErrors : dataInterface = {
            userName: "",
            psw: "",
            psw2: "",
            email: "",
            psw1: "",
            email1: "",
        };
        
        if (JSON.stringify(errors) != JSON.stringify(newErrors)) {
            alert("Please complete the registration form")
        }
        else{
            if(!keys.includes(values.email)){
                localStorage.setItem(values.email, JSON.stringify([values.psw, values.userName]))
                navigate('/')
            }
            else{
                alert("This email is used, please enter another email.\n if you have an acount please login")
            }
        }
    };

    return (
        <Form
            inputLabel={registerInputs}
            formTitle={FormTitlesEnum.registerForm}
            buttonText={ButtonsEnum.register}
            switchLinkText={SwitchLinksEnum.register}
            styleClass={"register-form"}
            inputEvent={handleValidation}
            submitEvent={handleSubmit}
            countries={country_list}
            genderInputs={genderInputs}
            switcLinkPath={"/"}
            errorMSgs={errors}
        />
    );
};

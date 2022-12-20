import { useRef } from "react";
import {
    ButtonsEnum,
    FormTitlesEnum,
    SwitchLinksEnum,
} from "../../../Constants/Enums";
import { loginInputs } from "../../../Constants/loginInputs";
import { useValidation } from "../../../Hooks/useValidation";
import { Form } from "../Form/Form";

export const LoginForm = () => {
    const { handleValidation, errors, values } = useValidation();

    const handleSubmit = (e: MouseEvent) => {
        e.preventDefault();
        console.log(values.userName);
        
        let newErrors = {
            userName: "",
            psw: "",
            psw2: "",
            email: "",
            psw1: "",
            email1: "",
        };
        if (JSON.stringify(errors) === JSON.stringify(newErrors)) {
            let data :string = JSON.parse(localStorage.getItem(values.email1)||"[]")
            alert(`Hi ${data[1]}, Nice to see you again!`);

        }else{
            alert("Please complete the Login form")

        }
        
    };

    return (
        <Form
            inputLabel={loginInputs}
            formTitle={FormTitlesEnum.loginForm}
            buttonText={ButtonsEnum.login}
            switchLinkText={SwitchLinksEnum.login}
            styleClass={"login-form"}
            inputEvent={handleValidation}
            submitEvent={handleSubmit}
            switcLinkPath={"/register"}
            errorMSgs={errors}
        />
    );
};

import { Buttons, FormTitles, SwitchLinks } from "../../../Constants/Enums";
import Form from "../Form/Form";
import { loginInputs } from "../../../Constants/loginInputs";
import {
    loginValidation,
    registerForm,
    submit,
} from "../../../utils/loginUtils";

export default class LoginForm extends Form {
    constructor() {
        super(
            Buttons.login,
            FormTitles.loginType,
            SwitchLinks.login,
            loginInputs,
            loginValidation
        );
        this._form.setAttribute("class", "login-form");
        this._button.addEventListener("click",submit);
        this._link.addEventListener("click", registerForm);
    }

}

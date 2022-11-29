import { Buttons, FormTitles, SwitchLinks } from "../../../Constants/Enums";
import { registerInputs } from "../../../Constants/registerInputs";
import Form from "../Form/Form";
import {
    loginForm,
    register,
    registerValidation,
} from "../../../utils/registerUtils";
import { genderInputs } from "../../../Constants/genderInputs";

export default class RegisterForm extends Form {
    constructor() {
        super(
            Buttons.register,
            FormTitles.registerType,
            SwitchLinks.register,
            registerInputs,
            registerValidation,
            genderInputs
        );
        this._button.addEventListener("click", (e) => register(e));
        this._form.setAttribute("class", "register-form");
        this._link.addEventListener("click", loginForm);
    }

    get registerForm() {
        return this._form;
    }
}

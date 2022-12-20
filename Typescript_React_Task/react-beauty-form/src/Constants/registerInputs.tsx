import { inputs } from "../Interfaces/interface";

export const registerInputs: inputs[] = [
    {
        name: "email",
        placeholder: "e.g name@name.com",
        type: "text",
        labelIcon: "https://cdn-icons-png.flaticon.com/512/4812/4812397.png",
        styleClass: "input"
    },
    {
        name: "userName",
        placeholder: "User Name",
        type: "text",
        labelIcon: "https://cdn-icons-png.flaticon.com/512/2102/2102647.png",
        styleClass: "input"
    },
    {
        name: "psw",
        placeholder: "Password",
        type: "password",
        labelIcon: "https://cdn.iconscout.com/icon/premium/png-256-thumb/reset-password-2452338-2029992.png",
        styleClass: "input"
    },
    {
        name: "psw2",
        placeholder: "Password 2",
        type: "password",
        labelIcon: "https://cdn.iconscout.com/icon/premium/png-256-thumb/reset-password-2452338-2029992.png",
        styleClass: "input"
    },
];

export var register = {
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
    ],
    input: [
        {
            name: "email",
            type: "text",
            placeholder: "e.g name@name.com",
            value: ""
        },
        {
            name: "userName",
            type: "text",
            placeholder: "User Name",
            value: ""
        },
        {
            name: "psw",
            type: "password",
            placeholder: "Password",
            value: ""
        },
        {
            name: "psw",
            type: "password",
            placeholder: "Password 2",
            value: ""
        },
        {
            name: "gender",
            type: "radio",
            placeholder: "",
            value: "Male"
        },
        {
            name: "gender",
            type: "radio",
            placeholder: "",
            value: "Female"
        }
    ],
    button: {
        class: 'button',
        type: 'submit',
        text: 'Register',
    }
};

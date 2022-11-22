export var login = {
    label: [
        {
            for: "email",
            img: "../assets/letter.png",
            text: "",
        },
        {
            for: "psw",
            img: "../assets/shield.png",
            text: "",
        },
    ],
    input: [
        {
            name: "email",
            type: "text",
            placeholder: "Email",
            value: ""
        },
        {
            name: "psw",
            type: "password",
            placeholder: "Password",
            value: ""
        },
    ],
    button: {
        class: 'button',
        type: 'submit',
        text: 'Login',
        eventName: 'onsubmit',
    }
};

import { SwitchLinks } from "../../../Constants/Enums";

export default class SwitchLink {
    private _text: HTMLDivElement;

    constructor(text: SwitchLinks) {
        this._text = document.createElement("div");
        const link = document.createElement("a");
        this._text.setAttribute("class", "text");
        link.setAttribute("class", "link");
        link.innerText = "Click Here";
        this._text.innerText = text;
        this._text.appendChild(link);
    }

    get switchLink() {
        return this._text;
    }
}

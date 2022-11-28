export default class Label{
    private _label : HTMLLabelElement
    constructor(labelText:string ,iconSrc :string =''){

        this._label = document.createElement('label')
        this._label.innerText = labelText

        if(iconSrc){
            const icon = document.createElement('img') 
            icon.setAttribute('src', iconSrc)
            icon.setAttribute('class', 'iconImg')
            this._label.appendChild(icon)
        }
    }

    get label(){
        return this._label
    }
}
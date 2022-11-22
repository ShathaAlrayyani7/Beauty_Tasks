
export default class ValidationText{
    private _validationText
    constructor(type:string,){

        this._validationText = document.createElement('p')
        this._validationText.setAttribute('class',`valid ${type}`)
    }
    
    get validationText(){
        return this._validationText
    }
    
}
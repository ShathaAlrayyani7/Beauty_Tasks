
export default class FormTitle{
    private _formTitle : HTMLHeadingElement
    constructor(type: string){

        this._formTitle = document.createElement('h1')
        this._formTitle.setAttribute('class','title')

        if(type == 'login'){
            this._formTitle.innerText ='Login'
        }else{
            this._formTitle.innerText ='Register'
        }
    }
    get formTitle(){
        return this._formTitle
    }
}
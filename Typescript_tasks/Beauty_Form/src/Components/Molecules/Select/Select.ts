import Option from "../../Atoms/Option/Option"

export default class Select{
    
    // #url = 'https://restcountries.com/v2/all';

    private _select :HTMLSelectElement
     constructor(data: string[],text:string) {
            this._select = document.createElement('select')
            this._select.setAttribute('class','select')
            const {option} = new Option(text)
            this._select.appendChild(option)
            for(let i = 0 ; i < data.length ; i++){
                const options = new Option(data[i]).option
                this._select.appendChild(options)
            }
    }

    get  select(){
        return this._select
    }

}


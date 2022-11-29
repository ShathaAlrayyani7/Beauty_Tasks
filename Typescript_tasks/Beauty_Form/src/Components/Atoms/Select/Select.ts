
export default class Select {
    
    // #url = 'https://restcountries.com/v2/all';

    private _select :HTMLSelectElement

    constructor(data: string[]) {

        this._select = document.createElement('select')
        this._select.className = 'select'
        for (let i = 0; i < data.length; i++) {
            let options = document.createElement('option') as HTMLOptionElement
            options.innerText = data[i]
            options.className = 'options'
            this._select.appendChild(options)
        }
    }

    get  select() {
        return this._select
    }

}


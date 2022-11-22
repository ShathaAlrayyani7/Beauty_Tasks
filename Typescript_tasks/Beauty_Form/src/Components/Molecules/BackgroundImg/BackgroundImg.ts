
export default class BackgroundImg{
    private _altUrl = 'https://images.hdqwalls.com/wallpapers/hatake-kakashi-naruto-anime-q5.jpg'
    private _backgroundImg : HTMLDivElement
    constructor(type:string , url:string = 'https://blog.prezi.com/wp-content/uploads/2019/03/jason-leung-479251-unsplash.jpg'){

        this._backgroundImg = document.createElement('div')
        const background : HTMLImageElement = document.createElement('img')
        this._backgroundImg.setAttribute('class', `Background ${type}`)

        background.setAttribute('class', `backgroundImg ${type}`)
        background.setAttribute('src', url)
        background.addEventListener('onerror',this.handleImageError)
        background.setAttribute('alt', 'Background Image')

        this._backgroundImg.appendChild(background)
    }

    get backgroundImg(){
        return this._backgroundImg
    }

    handleImageError = ()=> {
        const img = document.getElementsByClassName('backgroundImg')[0] as HTMLImageElement
        img.src = this._altUrl
    }


}
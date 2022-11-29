import LoginFormContainer from '../Templates/LoginFormContainer/LoginFormContainer'


let body : HTMLBodyElement = document.getElementsByTagName('body')[0]
let app :HTMLDivElement = document.createElement('div')
app.setAttribute('class','app')

let form = new LoginFormContainer().loginFormContainer
app.appendChild(form)
body.appendChild(app)

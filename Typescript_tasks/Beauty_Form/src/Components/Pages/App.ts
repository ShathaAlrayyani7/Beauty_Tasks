import { login } from '../../Constants/login'
import FormContainer from '../Templates/FormContainer/FormContainer'


const body = document.getElementsByTagName('body')[0]
const app = document.createElement('div')
app.setAttribute('class','app')

const form = new FormContainer('login',login).formContainer
app.appendChild(form)
body.appendChild(app)

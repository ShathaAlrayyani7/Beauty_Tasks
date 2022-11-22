import { login } from '../../Constants/login';
import FormContainer from '../Templates/FormContainer/FormContainer';
var body = document.getElementsByTagName('body')[0];
var app = document.createElement('div');
app.setAttribute('class', 'app');
var form = new FormContainer('login', login).formContainer;
app.appendChild(form);
body.appendChild(app);

import React from 'react';
import { validSignIn } from '../../../utils/Validation';


export default function Button(){



    function handleSubmit <html extends HTMLInputElement> (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    e.preventDefault()
    const email = document.getElementsByClassName(`input-email`)[0] as html
    const userName = document.getElementsByClassName('input-userName')[0] as html
    const psw = document.getElementsByClassName(`input-psw`)[0] as html
    if(validSignIn(email.value ,psw.value)){
        console.log(`${userName}`);
                  
    }}


    return(
        <div>
            <button type='submit' onClick={e => handleSubmit(e)}>
                <p>
                    Login
                </p>
            </button>
        </div>
    )
} 


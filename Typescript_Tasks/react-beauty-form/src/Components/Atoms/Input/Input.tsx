import React from 'react';
import { inputs } from '../../../Interfaces/interface';

export default function Input(props : inputs){
    return(
        <div>
            <input className='input' 
            type={props.type} 
            name={props.name} 
            onInput={props.event}
            placeholder={props.placeholder}>
            </input>
        </div>
    )
} 
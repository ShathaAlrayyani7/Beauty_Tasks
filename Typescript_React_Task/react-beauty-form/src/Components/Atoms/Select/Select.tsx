import React from 'react';
import { options } from '../../../Interfaces/interface';
import styles from './select.module.css'
export const Select = (props : options)=>{
    return(
        <div>
            <select className={styles.select}>
                {props.data.map((ele,index) => {
                    return(
                        <option value={ele} key={index}>
                            {ele}
                        </option>
                    )})}
            </select>
        </div>
    )
} 
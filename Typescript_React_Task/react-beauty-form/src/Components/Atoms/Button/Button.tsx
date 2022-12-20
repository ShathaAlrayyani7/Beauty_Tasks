import React from "react";
import styles from './button.module.css'
import { buttons } from "../../../Interfaces/interface";
export const Button = (props:buttons) => {
    return (
        <>
            <div className={styles.buttonContainer} >
                <button type="submit" className={styles.button}>
                    {props.text}
                </button>
            </div>
        </>
    );
};

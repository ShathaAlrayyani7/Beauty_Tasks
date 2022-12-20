import React from "react";
import styles from "./validationText.module.css";

type ValidationText = {
    text: string;
};

export const ValidationText = (props: ValidationText) => {
    return (
        <>
        {props.text ? <p className={styles.valid}>{props.text}</p> : ''}
        </>
    )
};

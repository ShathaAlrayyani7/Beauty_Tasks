import React from "react";
import { inputs } from "../../../Interfaces/interface";
import styles from "./input.module.css";

export const Input = (props: inputs) => {
    
    return (
        <div>
            <input
                className={styles[props.styleClass]}
                type={props.type}
                name={props.name}
                defaultValue={props.value || ""}
                {...(props.inputEvent && {onChange :props.inputEvent})}
                placeholder={props.placeholder || ""}
            ></input>
        </div>
    );
};

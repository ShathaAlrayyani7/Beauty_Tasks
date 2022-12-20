import React from "react";
import styles from "./switchLink.module.css";
import { Link } from "react-router-dom";

interface switchLinks {
    text: string;
    path : string
}

export const SwitchLink = (props: switchLinks) => {
    return (
        <div className={styles.text}>
            {props.text}
            <Link to={props.path} className={styles.link}>
                Click Here
            </Link>
        </div>
    );
};

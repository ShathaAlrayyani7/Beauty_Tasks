import React from "react";
import { inputs } from "../../../Interfaces/interface";
import styles from "./label.module.css";

interface labels {
    labelText?: string;
    labelIcon?: string;
    type?: string;
}

export const Label = (props: labels) => {
    return (
        <div>
            <label className="label">
                {props.labelText}
                {props.labelIcon ? (
                    <img
                        height= '50px'
                        src={props.labelIcon || ""}
                        alt={props.type}
                        className={styles.iconImg}
                    />
                ) : (
                    ""
                )}
            </label>
        </div>
    );
};

import React from "react";
import { genderInput } from "../../../Interfaces/interface";
import styles from "./radio.module.css";
import { Input } from "../Input/Input";
import { Label } from "../Label/Label";

interface genderInputInterFace {
    genderInputs: genderInput[];
}

export default function Radio(props: genderInputInterFace) {
    return (
        <div className={styles.radio}>
            {props.genderInputs.map((ele,index) => {
                return (
                    <div className={styles.container} key={index}>
                        <Input
                            type={ele.type}
                            styleClass={ele.styleClass}
                            name={ele.name}
                            value={ele.value} 
                            />
                        <Label labelText={ele.labelText} />
                    </div>
                    
                );
            })}
        </div>
    );
}

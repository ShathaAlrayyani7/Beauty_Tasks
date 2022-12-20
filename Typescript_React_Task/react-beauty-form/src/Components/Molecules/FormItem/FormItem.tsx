import { inputs } from "../../../Interfaces/interface";
import { Input } from "../../Atoms/Input/Input";
import { Label } from "../../Atoms/Label/Label";
import {ValidationText} from "../../Atoms/ValidationText/ValidationText";
import styles from "./formItem.module.css";

interface formItemInterface extends inputs {
    errorMsg? : string
}

export const FormItem = (props: formItemInterface) => {
    return (
        <div className={styles.formItem}>
            <div className={styles["label-input"]}>
                <Label
                    labelIcon={props.labelIcon}
                    labelText={props.labelText}
                />
                <Input
                    type={props.type}
                    name={props.name}
                    inputEvent={props.inputEvent}
                    styleClass={props.styleClass}
                    placeholder={props.placeholder} 
                    />
            </div>
            {props.errorMsg? <ValidationText text={props.errorMsg} /> : ''}
        </div>
    );
};
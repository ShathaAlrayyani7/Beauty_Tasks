import { RefObject } from "react";
import { country_list } from "../../../Constants/countries";
import { genderInputs } from "../../../Constants/genderInputs";
import { useValidation } from "../../../Hooks/useValidation";
import { genderInput, inputs } from "../../../Interfaces/interface";
import { Button } from "../../Atoms/Button/Button";
import { FormTitle } from "../../Atoms/FormTitle/FormTitle";
import Radio from "../../Atoms/Radio/Radio";
import { Select } from "../../Atoms/Select/Select";
import { SwitchLink } from "../../Atoms/SwitchLink/SwitchLink";
import { FormItem } from "../../Molecules/FormItem/FormItem";
import styles from "./Form.module.css";

interface dataInterface {
    [key: string]: string;
    psw2:string
    psw: string;
    email: string;
    userName : string;
}

interface formInterface {
    styleClass: string;
    inputLabel: inputs[];
    formTitle: string;
    countries?: string[];
    genderInputs?: genderInput[];
    buttonText: string;
    switchLinkText: string;
    switcLinkPath: string;
    inputEvent: (e: InputEvent) => void;
    submitEvent: (e:any) => void;
    errorMSgs : dataInterface
}

// interface FocusEvent<T = Element> extends SyntheticEvent<T, FocusEvent> {
//     relatedTarget: EventTarget | null;
//     target: EventTarget & T;
// }

export const Form = (props: formInterface) => {
    const {errors} = useValidation()
    return (
        <form
            className={styles[props.styleClass]}
            onSubmit={props.submitEvent}
        >
            <FormTitle text={props.formTitle} />

            {props.inputLabel.map((item, index) => {
                return (
                    <div key={index}>
                        <FormItem
                            labelIcon={item.labelIcon}
                            labelText={item.labelText}
                            name={item.name}
                            type={item.type}
                            styleClass={item.styleClass}
                            placeholder={item.placeholder}
                            inputEvent={props.inputEvent}
                            errorMsg={props.errorMSgs[item.name]}
                        />
                    </div>
                );
            })}

            {props.countries ? <Select data={country_list} /> : ""}
            {props.genderInputs ? <Radio genderInputs={genderInputs} /> : ""}
            <Button text={props.buttonText} />
            <SwitchLink
                path={props.switcLinkPath}
                text={props.switchLinkText}
            />
        </form>
    );
};

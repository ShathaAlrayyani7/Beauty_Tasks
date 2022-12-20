import { RegisterFormTemplate } from "../../Templates/RegisterFormTemplate/RegisterFormTemplate";
import styles from './Register.module.css'
export const Register = () => {
    return (
        <div className={styles.registerPage}>
            <RegisterFormTemplate />
        </div>
    );
};

import { LoginFormTemplate } from "../../Templates/LoginFormTemplate/LoginFormTemplate"
import styles from './Login.module.css'
export const Login = () => {
    return(
        <div className={styles.loginPage}>
            <LoginFormTemplate/>
        </div>
    )
}
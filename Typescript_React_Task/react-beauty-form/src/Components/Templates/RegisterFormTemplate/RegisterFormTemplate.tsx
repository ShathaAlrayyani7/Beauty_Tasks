import { RegisterForm } from "../../Organisms/RegisterForm/RegisterForm"
import styles from './RegisterFormTemplate.module.css'
export  const RegisterFormTemplate = () =>{
    return(
        <div className={styles['formTemplate-register']}>
            <RegisterForm/>
        </div>
    )
}
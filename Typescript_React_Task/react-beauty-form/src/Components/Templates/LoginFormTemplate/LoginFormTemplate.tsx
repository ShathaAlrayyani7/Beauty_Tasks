import { BackgroundImg } from '../../Molecules/BackgroungImg/BackgroundImg'
import { LoginForm } from '../../Organisms/LoginForm/LoginForm'
import styles from './LoginFormTemplate.module.css'

export  const LoginFormTemplate = () =>{
    let imgUrl = 'https://chasingdaisiesblog.com/wp-content/uploads/2020/09/3a06c0028fc03a6cf8b209d50a84f0dc.jpg'
    return(
        <div className={styles['formTemplate-login']}>
            <LoginForm/>
            <BackgroundImg url={imgUrl}/>
        </div>
    )
}
import styles from './FormTitle.module.css'

type FormTitleType={
    text :string
}
export const FormTitle = (props:FormTitleType)=>{
    return(
        <h1 className={styles.title}>
            {props.text}
        </h1>
    )
}
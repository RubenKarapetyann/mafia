import styles from "./Input.module.css"

export default function Input({ value, setValue, placeholder }){
    const changeHandle = e => setValue(e.target.value)
    return (
        <div>
            <input
                value={value}
                setValue={changeHandle}
                placeholder={placeholder}
                className={styles.input}
            />
        </div>
    )
}
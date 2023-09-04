import InputButton from "@/components/global/InputButton/InputButton"
import styles from "./Form.module.css"
import Input from "@/components/global/Input/Input"

export default function Form({ setValue, value, submitHandle }){
    return (
        <form className={styles.container} onSubmit={submitHandle}>
            <div className={styles.InnerContainer}>
                <Input
                    placeholder="message..."
                    value={value}
                    setValue={setValue}
                />
                { value && <InputButton/> }
            </div>
        </form>
    )
}
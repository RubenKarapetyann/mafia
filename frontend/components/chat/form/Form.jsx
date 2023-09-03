import FuncButton from "@/components/global/FuncButton/FuncButton"
import styles from "./Form.module.css"
import Input from "@/components/global/Input/Input"

export default function Form({ setValue, value, submitHandle }){
    return (
        <form className={styles.container} onSubmit={submitHandle}>
            <Input
                placeholder="message..."
                value={value}
                setValue={setValue}
            />
            <FuncButton
                text="SEND"
            />
        </form>
    )
}
import InputButton from "@/components/global/InputButton/InputButton"
import styles from "./Form.module.css"
import Input from "@/components/global/Input/Input"
import { useState } from "react"

export default function Form({ submitHandle }){
    const [value, setValue] = useState("")

    const changeHandle = text => setValue(text) 

    const onSubmit = e =>{
        e.preventDefault()
        submitHandle(value)
        setValue("")
    }

    return (
        <form className={styles.container} onSubmit={onSubmit}>
            <div className={styles.InnerContainer}>
                <Input
                    placeholder="message..."
                    value={value}
                    setValue={changeHandle}
                />
                { value && <InputButton/> }
            </div>
        </form>
    )
}
import FuncButton from "@/components/global/FuncButton/FuncButton"
import WindowWrapper from "../WindowWrapper/WindowWrapper"
import styles from "./PrivateRoomWindow.module.css"
import Input from "@/components/global/Input/Input"

export default function PrivateRoomWindow(){
    return (
        <WindowWrapper title={"password"}>
            <div className={styles.innerContainer}>
                <p>Password</p>
                <Input/>
                <div className={styles.buttons}>
                    <FuncButton
                        text="close"
                        width={130}
                    />
                    <FuncButton
                        text="join"
                        width={130}
                    />
                </div>
            </div>
        </WindowWrapper>
    )
}
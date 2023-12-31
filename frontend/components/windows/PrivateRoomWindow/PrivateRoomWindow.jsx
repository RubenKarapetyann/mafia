import FuncButton from "@/components/global/FuncButton/FuncButton"
import WindowWrapper from "../WindowWrapper/WindowWrapper"
import styles from "./PrivateRoomWindow.module.css"
import Input from "@/components/global/Input/Input"

export default function PrivateRoomWindow({ value, changeHandle, onClose, onJoin, id, title }){
    const onJoinId = () => onJoin(id)
    return (
        <WindowWrapper title={title} onClose={onClose}>
            <div className={styles.innerContainer}>
                <p className={styles.innerTitle}>Password</p>
                <Input
                    value={value}
                    setValue={changeHandle}
                />
                <div className={styles.buttons}>
                    <FuncButton
                        text="close"
                        width={130}
                        onClick={onClose}
                    />
                    <FuncButton
                        text="join"
                        width={130}
                        onClick={onJoinId}
                    />
                </div>
            </div>
        </WindowWrapper>
    )
}
import WindowWrapper from "../WindowWrapper/WindowWrapper"
import styles from "./PrivateRoomWindow.module.css"

export default function PrivateRoomWindow(){
    return (
        <WindowWrapper title={"password"}>
            <div className={styles.container}>
                <input/>
                <button>close</button>
                <button>join</button>
            </div>
        </WindowWrapper>
    )
}
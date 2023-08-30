import FuncButton from "@/components/global/FuncButton/FuncButton"
import WindowWrapper from "../WindowWrapper/WindowWrapper"
import styles from "./PrivateRoomWindow.module.css"

export default function PrivateRoomWindow(){
    return (
        <WindowWrapper title={"password"}>
            <div >
                <input/>
                <FuncButton
                    text="close"
                    width={140}
                />
                <FuncButton
                    text="join"
                    width={140}
                />
            </div>
        </WindowWrapper>
    )
}
import { NOTIFICATION_COLOR } from "@/constants/notification-constants"
import styles from "./NotificationMessage.module.css"

export default function NotificationMessage({ text, action }){
    return (
        <div 
            className={styles.container}
            style={{
                color : NOTIFICATION_COLOR[action]
            }}
        >
            <p>{text}</p>
        </div>
    )
}
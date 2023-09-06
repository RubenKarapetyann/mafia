import { NOTIFICATION_TYPE } from "@/constants/notification-constants"
import Message from "../Message/Message"
import styles from "./ChatBox.module.css"
import NotificationMessage from "../NotificationMessage/NotificationMessage"


export default function ChatBox({ messages }){
    return (
        <div className={styles.container}>
            {messages.map(message=>{
                if( message.type === NOTIFICATION_TYPE ){
                    return <NotificationMessage
                        text={message.text}
                        action={message.action}
                    />
                }
                return <Message
                    key={message.id}
                    text={message.text}
                    avatar={message.player.avatar}
                    name={message.player.name}
                />
            })}
        </div>
    )
}
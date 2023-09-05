import Message from "../Message/Message"
import styles from "./ChatBox.module.css"


export default function ChatBox({ messages }){
    return (
        <div className={styles.container}>
            {messages.map(message=>{
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
import styles from ".//Message.module.css"
import Image from "next/image"

export default function Message({ text, avatar, name }){
    return (
        <div className={styles.container}>
            <div className={styles.avatarContainer}>
                <Image
                    src={avatar}
                    width={30}
                    height={30}
                    alt="avatar"
                    style={{
                        borderRadius : "50%"
                    }}
                />
            </div>
            <div>
                <span className={styles.name}>{name}</span>
                <div className={styles.textBox}>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}
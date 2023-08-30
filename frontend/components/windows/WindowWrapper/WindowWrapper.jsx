import { FaTimes } from "react-icons/fa"
import styles from "./WindowWrapper.module.css"

export default function WindowWrapper({ title, onClose }){
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <p>{title}</p>
                <span className={styles.close} onClick={onClose}><FaTimes/></span>
            </div>
        </div>
    )
}
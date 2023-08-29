import styles from "./SingleRoom.module.css"
import { FaLock, FaLockOpen } from "react-icons/fa"

export default function SingleRoom({ name, description, players, status }){
    return (
        <div className={styles.container}>
            <div>
                <p className={styles.name}>{name}</p>
                <br/>
                <p className={styles.description}>Описание : {description}</p>
                <p className={styles.players}>Игроков в комнате : {players} из {10}</p>
            </div>
            <div>
                <p>{status === "open" ? 
                <p>
                    <span className={styles.openText}>открыто</span>
                    <FaLockOpen/>
                </p>
                 : 
                <p>
                    <span className={styles.withPasswordText}>с паролем</span>
                    <FaLock/>
                </p>
                }</p>
            </div>
        </div>
    )
}
import Link from "next/link"
import styles from "./SingleRoom.module.css"
import { FaLock, FaLockOpen } from "react-icons/fa"
import endpoints from "@/endpoints/client-endpoints"

export default function SingleRoom({ name, description, players, status, id }){
    let Wrapper
    if(status === "open"){
        Wrapper = ({ children })=>(
            <Link className={styles.container} href={endpoints(id).room}>
                {children}
            </Link>
        )
    }else{
        Wrapper = ({ children })=>(
            <div className={styles.container}>
                {children}
            </div>
        )
    }
    return (
        <Wrapper>
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
        </Wrapper>
    )
}
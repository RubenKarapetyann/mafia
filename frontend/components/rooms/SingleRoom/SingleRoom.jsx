import Link from "next/link"
import styles from "./SingleRoom.module.css"
import { FaLock, FaLockOpen } from "react-icons/fa"
import endpoints from "@/endpoints/client-endpoints"

export default function SingleRoom({ name, description, players, status, id, onOpenWindow }){
    let Wrapper
    if(status === "open"){
        Wrapper = ({ children })=>(
            <Link className={styles.container} href={endpoints(id).lobby}>
                {children}
            </Link>
        )
    }else{
        Wrapper = ({ children })=>{
            
            const onOpenWindowId = ()=> onOpenWindow(id, name)

            return (<div className={styles.container} onClick={onOpenWindowId}>
                {children}
            </div>)
        }
    }
    return (
        <Wrapper>
            <div className={styles.leftPart}>
                <p className={styles.name}>{name}</p>
                <br/>
                <p className={styles.description}>Описание : {description}</p>
                <p className={styles.players}>Игроков в комнате : {players} из {10}</p>
            </div>
            <div className={styles.rightPart}>
                <div>{status === "open" ? 
                    <p>
                        <span className={styles.openText}>открыто</span>
                        <FaLockOpen/>
                    </p>
                    : 
                    <p>
                        <span className={styles.withPasswordText}>с паролем</span>
                        <FaLock/>
                    </p>
                }</div>
            </div>
        </Wrapper>
    )
}
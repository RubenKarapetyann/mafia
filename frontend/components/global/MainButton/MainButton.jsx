import Link from "next/link"
import styles from "./MainButton.module.css"

export default function MainButton({ text, link, width=200 }){
    return (
        <div  
            className={styles.container}
            style={{
                width 
            }}  
        >
            <Link
                href={link}
                className={styles.link}
            >
                <p
                    className={styles.text}
                >{text}</p>
            </Link>
        </div>
    )
}
import Link from "next/link"
import styles from "./MainButton.module.css"

export default function MainButton({ text, link }){
    return (
        <div className={styles.container}>
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
import { FaPaperPlane } from "react-icons/fa"
import styles from "./InputButton.module.css"

export default function InputButton({  }){
    return (
        <div className={styles.container}>
            <button className={styles.button}>
                <FaPaperPlane/>
            </button>
        </div>
    )
}
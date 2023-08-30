import styles from "./FuncButton.module.css"

export default function FuncButton({ text, onClick, width=200 }){
    return (
        <div  
            className={styles.container}
            style={{
                width 
            }}  
        >
            <div
                className={styles.link}
                onClick={onClick}
            >
                <p
                    className={styles.text}
                >{text}</p>
            </div>
        </div>
    )
}
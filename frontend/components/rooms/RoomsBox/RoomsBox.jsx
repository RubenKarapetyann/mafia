import styles from "./RoomsBox.module.css"

export default function RoomsBox({ children }){
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}
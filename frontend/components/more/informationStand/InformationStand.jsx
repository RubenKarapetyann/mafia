import styles from "./InformationStand.jsx.module.css"


export default function InformationStand({ room }){
    return (
        <div className={styles.conatiner}>
            <p>{room} lobby</p>
        </div>
    )
}
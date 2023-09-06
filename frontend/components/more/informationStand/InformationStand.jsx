import MainButton from "@/components/global/MainButton/MainButton"
import styles from "./InformationStand.jsx.module.css"
import endpoints from "@/endpoints/client-endpoints"
import { FaChevronLeft, FaUsers } from "react-icons/fa"
import FuncButton from "@/components/global/FuncButton/FuncButton"


export default function InformationStand({ name, players }){
    return (
        <div className={styles.conatiner}>
            <MainButton 
                link={endpoints().rooms}
                text={<FaChevronLeft/>}
                width={50}
            />
            <div className={styles.information}>
                <p>{name} lobby</p>
                <p>игроков : {players.length} из 10</p>
            </div>
            <FuncButton 
                text={<FaUsers/>}
                width={50}
            />
        </div>
    )
}
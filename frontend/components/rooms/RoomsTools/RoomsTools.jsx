import MainButton from "@/components/global/MainButton/MainButton"
import styles from "./RoomsTools.module.css"
import endpoints from "@/endpoints/client-endpoints"
import { FaChevronLeft, FaSlidersH } from "react-icons/fa"

export default function RoomTools(){
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <MainButton
                    text={<FaChevronLeft/>}
                    link={endpoints().home}
                    width={50}
                />
                <MainButton
                    text={"CREATE"}
                    link={endpoints().create}
                />
            </div>
            <MainButton
                text={<FaSlidersH/>}
                link={endpoints().home}
                width={50}
            />
        </div>
    )
}
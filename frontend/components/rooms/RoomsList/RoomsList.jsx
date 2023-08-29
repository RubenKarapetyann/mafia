import SingleRoom from "../SingleRoom/SingleRoom"
import styles from "./RoomsList.module.css"

export default function RoomsList({ rooms }){
    return (
        <div>
            {rooms.map(room=>{
                return <SingleRoom
                    name={room.name}
                />
            })}
        </div>
    )
}
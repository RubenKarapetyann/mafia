import SingleRoom from "../SingleRoom/SingleRoom"
import styles from "./RoomsList.module.css"

export default function RoomsList({ rooms }){
    return (
        <div>
            {rooms.map(room=>{
                return <SingleRoom
                    key={room.id}
                    name={room.name}
                    description={room.description}
                    players={room.players.length}
                    status={room.status}
                />
            })}
        </div>
    )
}
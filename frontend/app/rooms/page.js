import { getRooms } from "@/api/rooms"

export default async function Rooms(){
    const { rooms } = await getRooms()
    return (
        <div>
            {rooms.map(room=>{
                return <p>{room.name}</p>
            })}
        </div>
    )
}
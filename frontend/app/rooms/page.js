"use client"
import { getRooms } from "@/api/rooms"
import RoomsBox from "@/components/rooms/RoomsBox/RoomsBox"
import RoomsList from "@/components/rooms/RoomsList/RoomsList"
import RoomTools from "@/components/rooms/RoomsTools/RoomsTools"
import { SERVER_URL } from "@/constants/api-constants"
import { useEffect, useRef, useState } from "react"
import io from "socket.io-client"


export default function Rooms(){
    const socketRef = useRef(null)
    const [rooms, setRooms] = useState([])
    // const { rooms } = await getRooms()

    useEffect(()=>{
        socketRef.current = io(SERVER_URL)


        socketRef.current.on("rooms",(rooms)=>{
            setRooms(rooms)
        })

        // {
        //     query: { roomId : id }
        // }

        return () => {
            socketRef.current.disconnect()
        }
    },[])

    return (
        <div className="main">
            <RoomTools/>
            <RoomsBox>
                <RoomsList
                    rooms={rooms}
                />
            </RoomsBox>
        </div>
    )
}
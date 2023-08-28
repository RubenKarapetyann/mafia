"use client"
import { getRooms } from "@/api/rooms"
import { SERVER_URL } from "@/constants/api-constants"
import { useEffect, useRef } from "react"
import io from "socket.io-client"


export default function Rooms(){
    const socketRef = useRef(null)
    // const { rooms } = await getRooms()

    useEffect(()=>{
        socketRef.current = io(SERVER_URL)

        // {
        //     query: { roomId : id }
        // }

        return () => {
            socketRef.current.disconnect()
        }
    },[])

    return (
        <div>
            {/* {rooms.map(room=>{
                return <p>{room.name}</p>
            })} */}
        </div>
    )
}
"use client"
import { getRooms } from "@/api/rooms"
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
        <div className="container">
            {rooms.map(room=>{
                return <p>{room.name}</p>
            })}
        </div>
    )
}
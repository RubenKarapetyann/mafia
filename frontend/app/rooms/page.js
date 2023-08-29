"use client"
import { getRooms } from "@/api/rooms"
import MainButton from "@/components/global/MainButton/MainButton"
import RoomsBox from "@/components/rooms/RoomsBox/RoomsBox"
import RoomsList from "@/components/rooms/RoomsList/RoomsList"
import { SERVER_URL } from "@/constants/api-constants"
import endpoints from "@/endpoints/client-endpoints"
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
            <MainButton
                text={"CREATE"}
                link={endpoints().create}
            />
            <RoomsBox>
                <RoomsList
                    rooms={rooms}
                />
            </RoomsBox>
        </div>
    )
}
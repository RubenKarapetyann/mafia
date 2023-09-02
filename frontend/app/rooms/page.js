"use client"
import RoomsBox from "@/components/rooms/RoomsBox/RoomsBox"
import RoomsList from "@/components/rooms/RoomsList/RoomsList"
import RoomTools from "@/components/rooms/RoomsTools/RoomsTools"
import PrivateRoomWindow from "@/components/windows/PrivateRoomWindow/PrivateRoomWindow"
import { SERVER_URL } from "@/constants/api-constants"
import endpoints from "@/endpoints/endpoints"
import clientEndpoints from "@/endpoints/client-endpoints"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import io from "socket.io-client"


export default function Rooms(){
    const socketRef = useRef(null)
    const [rooms, setRooms] = useState([])
    const [isWindowOpen, setIsWindowOpen] = useState({
        open : false,
        id : null,
        name : null
    })
    const [password, setPassword] = useState("")
    const router = useRouter()
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

    const changeHandle = password => {
        setPassword(password)
    }

    const onClose = _ => {
        setPassword("")
        setIsWindowOpen({
            open : false,
            id : null,
            name : null
        })
    }

    const onOpenWindow = ( id, name ) =>{
        setIsWindowOpen({
            open : true,
            id,
            name
        })
    }

    const onJoin = async id => {
        try{
            const response = await fetch(endpoints().rooms,{
                method : "POST",
                headers : {
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify({
                    password : password,
                    id : id
                })
            })
            const result = await response.json()
            if( result.access ){
                router.push(clientEndpoints(id).lobby)
            }else{
                onClose()
            }
        }catch(err){
            onClose()
            console.log(err);
        }
    }

    return (
        <div className="main">
            { isWindowOpen.open && <PrivateRoomWindow
                value={password}
                changeHandle={changeHandle}
                onClose={onClose}
                onJoin={onJoin}
                id={isWindowOpen.id}
                title={isWindowOpen.name}
            /> }
            <RoomTools/>
            <RoomsBox>
                <RoomsList
                    rooms={rooms}
                    onOpenWindow={onOpenWindow}
                />
            </RoomsBox>
        </div>
    )
}
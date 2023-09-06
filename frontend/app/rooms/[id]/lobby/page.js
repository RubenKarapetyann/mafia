"use client"
import Form from "@/components/chat/form/Form"
import styles from "./page.module.css"
import { SERVER_URL } from "@/constants/api-constants"
import { getToken } from "@/utils/jwt-utils"
import { useEffect, useRef, useState } from "react"
import io from "socket.io-client"
import ChatBox from "@/components/chat/ChatBox/ChatBox"
import InformationStand from "@/components/more/informationStand/InformationStand"

export default function Lobby({ params : { id } }) {
  const socketRef = useRef(null)
  const [user,setUser] = useState(null)
  const [room, setRoom] = useState(null)

 
  
  const onDisconnect = ()=>{
    const payload = {
      token : getToken()
    }
    socketRef.current.emit("room:quit",payload)
  }

  useEffect(()=>{
    socketRef.current = io(SERVER_URL,{
      query: { roomId : id, token : getToken() }
    })

    socketRef.current.on("room:join",user=>{
      setUser(user)
    })

    socketRef.current.on("room:update",room=>{
      setRoom(room)
    })

    socketRef.current.on("message:add",message=>{
      setRoom(room=>({
        ...room,
        messages : [...room.messages, message]
      }))
    })

    return () => {
      onDisconnect()
      socketRef.current.disconnect()  
    }
  },[])

  if(!room){
    return
  }

  const submitHandle = message =>{
    const payload = {
      message,
      token : getToken()
    }
    socketRef.current.emit("message:add",payload)
  }


  return (
    <div className="main">
      <div className={styles.container}> 
        <div className={styles.chatContainer}>
          <InformationStand
            room={room.name}
          />
          <ChatBox
            messages={room.messages}
          />
        </div>
        <Form
          submitHandle={submitHandle}
        />
      </div>
    </div>
  )
}
  
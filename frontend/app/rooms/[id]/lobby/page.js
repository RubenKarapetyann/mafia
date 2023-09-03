"use client"
import { SERVER_URL } from "@/constants/api-constants"
import { getToken } from "@/utils/jwt-utils"
import { useEffect, useRef, useState } from "react"
import io from "socket.io-client"

export default function Lobby({ params : { id } }) {
  const socketRef = useRef(null)
  const [user,setUser] = useState(null)

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

    socketRef.current.on("room:join",(user)=>{
      setUser(user)
    })


    return () => {
      onDisconnect()
      socketRef.current.disconnect()  
    }
  },[])


  return (
    <div>
      {id}`s lobby

      {JSON.stringify(user)}
    </div>
  )
}
  
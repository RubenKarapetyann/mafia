"use client"
import Form from "@/components/chat/form/Form"
import styles from "./page.module.css"
import { SERVER_URL } from "@/constants/api-constants"
import { getToken } from "@/utils/jwt-utils"
import { useEffect, useRef, useState } from "react"
import io from "socket.io-client"
import ChatBox from "@/components/chat/ChatBox/ChatBox"

export default function Lobby({ params : { id } }) {
  const socketRef = useRef(null)
  const [user,setUser] = useState(null)
  const [message, setMessage] = useState("")

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

  const changeHandle = text => setMessage(text)

  const submitHandle = e =>{
    e.preventDefault()
  }


  return (
    <div className="main">
      <div className={styles.container}> 
        <div className={styles.chatContainer}>
          <ChatBox

          />
        </div>
        <Form
          value={message}
          setValue={changeHandle}
          submitHandle={submitHandle}
        />
      </div>
    </div>
  )
}
  
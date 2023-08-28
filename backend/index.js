import express from "express"
import rooms from "./static/rooms.js"
import { Server } from "socket.io" 
import http from "http"
import { DEFAULT, ROOMS } from "./constants/routes-constants.js"
import { CONNECTION, DISCONNECT } from "./constants/socket-constants.js"

const app = express()
const server = http.createServer(app)

const io = new Server(server,{
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})


const staticRooms = rooms

app.get(DEFAULT,(req,res)=>{
    res.json({ test : true })
})

app.get(ROOMS,(req,res)=>{
    res.send({ rooms : staticRooms })
})


io.on(CONNECTION,(socket)=>{
    console.log("User connected.")
    socket.emit("rooms",staticRooms)
    // const { roomId } = socket.handshake.query
    // socket.roomId = roomId
    // socket.join(roomId)

    
    socket.on(DISCONNECT, () => {
        console.log('User disconnected.')
        // socket.leave(roomId)
    })
})


server.listen(process.env.PORT,()=>{
    console.log(`server started on port ${process.env.PORT}`);
})
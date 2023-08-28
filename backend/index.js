import express from "express"
import rooms from "./static/rooms.js"
import { Server } from "socket.io" 
import http from "http"

const app = express()
const server = http.createServer(app)

const io = new Server(server,{
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})


const staticRooms = rooms

app.get("/",(req,res)=>{
    res.json({ test : true })
})

app.get("/rooms",(req,res)=>{
    res.send({ rooms : staticRooms })
})


io.on("connection",(socket)=>{
    console.log("User connected.")
    // const { roomId } = socket.handshake.query
    // socket.roomId = roomId
    // socket.join(roomId)

    
    socket.on('disconnect', () => {
        console.log('User disconnected.')
        // socket.leave(roomId)
    })
})


server.listen(process.env.PORT,()=>{
    console.log(`server started on port ${process.env.PORT}`);
})
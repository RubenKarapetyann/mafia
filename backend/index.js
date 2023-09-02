import express from "express"
import rooms from "./static/rooms.js"
import { Server } from "socket.io" 
import http from "http"
import { DEFAULT, ROOMS } from "./constants/routes-constants.js"
import { CONNECTION, DISCONNECT } from "./constants/socket-constants.js"
import bcrypt from "bcrypt"
import cors from "cors"


const app = express()
const server = http.createServer(app)

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

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

app.post(ROOMS,async (req,res)=>{
    const { password, id } = req.body
    const room = staticRooms.find(room=>room.id === id)

    const validPassword = await bcrypt.compare( password, room.password )

    if(validPassword){
        res.status(400).json({
            access : true
        })
    }else{
        res.status(401).json({
            access : false
        })
    }
    res.send({ access : true })
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
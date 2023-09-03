import express from "express"
import rooms from "./static/rooms.js"
import { Server } from "socket.io" 
import http from "http"
import { DEFAULT, ROOMS } from "./constants/routes-constants.js"
import { CONNECTION, DISCONNECT } from "./constants/socket-constants.js"
import bcrypt from "bcrypt"
import cors from "cors"
import jwt from "jsonwebtoken"

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
    
    if( room.status === "open" ){
        const token = jwt.sign({ id : Math.random() }, process.env.JWT_KEY);
        return res.status(400).json({
            access : true,
            token
        })
    }

    const validPassword = await bcrypt.compare( password, room.password )

    if(validPassword){
        const token = jwt.sign({ id : Math.random() }, process.env.JWT_KEY);
        res.status(400).json({
            access : true,
            token
        })
    }else{
        res.status(401).json({
            access : false
        })
    }
})

io.on(CONNECTION,(socket)=>{
    console.log("User connected.")

    const sendMessage = (message)=>{
        io.in(socket.roomId).emit('message:add', message)
    }


    socket.on("rooms",()=>{
        socket.emit("rooms",staticRooms)
    })


    socket.on("room:quit",(payload)=>{
        const room = staticRooms.find(room=>room.id===roomId)
        room.players = room.players.filter(player=>player.id!==payload.id)
    })
    

    const { roomId } = socket.handshake.query
    if( roomId ){
        console.log(`User connected to ${roomId}.`);
        socket.roomId = roomId
        socket.join(roomId)

        const room = staticRooms.find(room=>room.id===+roomId)
        const player = {
            id : Math.random(),
            role : null,
            name : "Ruben"
        }
        room.players.push(player)
        socket.emit("room:join",player)
        io.emit("rooms",staticRooms)
    }


    socket.on(DISCONNECT, () => {
        console.log('User disconnected.')
        console.log(`User disconnected from ${roomId}.`);
        socket.leave(roomId)
    })
})


server.listen(process.env.PORT,()=>{
    console.log(`server started on port ${process.env.PORT}`);
})
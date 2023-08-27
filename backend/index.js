import express from "express"
import rooms from "./static/rooms.js"

const app = express()
const staticRooms = rooms

app.get("/",(req,res)=>{
    res.json({ test : true })
})

app.get("/rooms",(req,res)=>{

    res.send({ rooms : staticRooms })
})

app.listen(process.env.PORT,()=>{
    console.log(`server started on port ${process.env.PORT}`);
})
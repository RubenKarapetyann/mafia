import express from "express"


const app = express()


app.get("/",(req,res)=>{
    res.json({ test : true })
})


app.listen(process.env.PORT,()=>{
    console.log(`server started on port ${process.env.PORT}`);
})
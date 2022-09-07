const PORT = process.env.PORT || 8080
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const blogRouter = require("./Routes/blog.routes")
const reviewRouter = require("./Routes/review.routes")
dotenv.config()

const USERNAME = process.env.mongo_username
const PASSWORD = process.env.mongo_password
const connection = mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.zgly89g.mongodb.net/?retryWrites=true&w=majority`)

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Welcome to blog ")
})

app.use("/blog",blogRouter)
app.use("/review",reviewRouter)

app.listen(PORT,async()=>{
    try {
        await connection
        console.log("connect to database")
    } catch (error) {
        console.log(error);
    }
    console.log("server:http://localhost:8080/")
})

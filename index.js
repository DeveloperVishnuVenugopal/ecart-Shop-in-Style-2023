require('dotenv').config()
const express = require('express')  
const cors = require('cors')
require('./DB/connection')
const router = require("./ROUTES/router")

const server = express()
server.use(cors())
server.use(express.json())
server.use(router)

const PORT = 3000 || process.env.PORT
server.listen(PORT, ()=>{
    console.log(`Cart server started at port ${PORT} `);
})
server.get('/',(req,res)=>{
    res.send("<h1>Cart Server Started</h1>")
})
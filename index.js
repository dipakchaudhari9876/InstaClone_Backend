const express = require("express")
const app = express()
const cors = require("cors");
const bodyParser = require("body-parser");
const fileUpload = require('express-fileupload')
require('./db/conn')
app.use(cors());
// middleware to convert our request data into JSON format
app.use(bodyParser.json());
const router = require('./router/auth')
app.use(fileUpload({
    useTempFiles:true
}))

const PORT = process.env.PORT || 9000
app.use(express.json())
app.use(router)


app.listen(PORT,()=>{
    console.log(`Backend is running on port ${PORT}`)
})
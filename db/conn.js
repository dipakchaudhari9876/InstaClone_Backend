const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path:'./.env'})
const db = process.env.MONGODB_URI
mongoose.set('strictQuery', false)

mongoose.connect(db,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Connected To Backend")
}).catch(()=>{
    console.log("Connection terminated")
})

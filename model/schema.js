const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    location :{
        type:String
    },
    likes:{
        type:Number
    },
    description:{
        type:String
    },
    postImage:{
        type:String
    },
    date:{
        type:String
    }
})

const User = mongoose.model("UserDetail",userSchema)

module.exports = User
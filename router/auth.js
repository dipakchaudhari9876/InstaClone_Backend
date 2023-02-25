const express = require('express')
const User = require('./../model/schema')
const router = express.Router()
const cloudinary =require('cloudinary').v2 

cloudinary.config({ 
    cloud_name: 'duozpcxox', 
    api_key: '823422759578367', 
    api_secret: 'nzGMmmV0DKJWK4euYccX5hJsYZA',
    secure: true 
  });

router.get('/', (req, res) => {
    res.send("hello form me")
})

router.post('/upload',async (req, res) => {
    try {
        const data = req.body
        const upload = new User(data)
        const save = await upload.save()
        if (save) {
            res.status(200).json({message:"SuccessFull Post"})
        }else{
            res.status(400).json({error:"Invalid credential"})
        }
    }catch(err){
        console.log(err)
    }
})

router.get('/getall',async (req,res)=>{
    try{
        const data =await User.find()
        if(data){
            res.status(200).send(data)
        }


    }catch(err){
        console.log(err)
    }
})

module.exports = router

const User=require('../schema/userschema')
const getusers=async(request,responce)=>{
    try {
        console.log("im in get api")
        const Users=await User.find({})
        responce.status(200).json(Users)
    } catch (error) {
        responce.status(404).json(error)}
    }
    
    module.exports=getusers
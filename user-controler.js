const User=require('../schema/userschema')
  const adduser=async(request,responce)=>{
    const user =request.body;
    console.log(" user Data",user)
   const  newUser=new User(user)
   try {
   await   newUser.save()
   responce.status(200).json(newUser)
     console.log("record saved successfuly")
   } catch (error) {
    console.log("Errorr",error)
   }
}

module.exports=adduser



    
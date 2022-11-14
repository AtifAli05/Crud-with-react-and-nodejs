const User=require('../schema/userschema')
const deleteUserFromDatabase=async(request,responce)=>{
    console.log(request.params.id)
 
try {
     await User.deleteOne({_id:request.params.id});
     responce.status(200).json("User deleted Successfully");
} catch (error) {
    responce.status(409).json(error);
    console.log("issue in delete data from db")

}
}

module.exports=deleteUserFromDatabase
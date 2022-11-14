const User = require("../schema/userschema");
const saveditUser = async (request, responce) => {
  let user = request.body;
  console.log("sgfdsfdsf",request.params.id)
  const editUser = new User(user);
  try {
    await User.updateOne({_id:request.params.id}, editUser);
    responce.status(201).json(editUser);
    console.log("Im in edit user api ")

  } catch (error) {
    console.log("Error while callling editsaved data",error)
    
  }
};
module.exports=saveditUser;
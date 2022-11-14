const User = require("../schema/userschema");
const getUser = async (request, responce) => {
  console.log(request.params.id);

  try {
    const user = await User.findById(request.params.id);
    responce.status(200).json(user);
  } catch (error) {
    responce.status(404).json(error);
  }
};

module.exports = getUser;


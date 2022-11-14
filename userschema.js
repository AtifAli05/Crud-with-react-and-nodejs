const mongoose=require('mongoose')
console.log("Tezt")
const autoincrement=require('mongoose-auto-increment')
const userSchema=mongoose.Schema({
    name:String,
    username:String,
    email:String,
    phone:String
})

autoincrement.initialize(mongoose.connection);
userSchema.plugin(autoincrement.plugin,'user')
console.log("model creation")
const user =mongoose.model('user',userSchema)
module.exports=user
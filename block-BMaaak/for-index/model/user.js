var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    name:{type:String},
    username:{type:String},
    email:{type:String},
    address:{
        city:String,
        state:String,
        country:String,
        pin:Number
    }
});

userSchema.index({email:1},{unique:true});
userSchema.index({username:1},{unique:true});
userSchema.index({"address.state":1,"address.city":1});
module.exports=mongoose.model('User',userSchema);
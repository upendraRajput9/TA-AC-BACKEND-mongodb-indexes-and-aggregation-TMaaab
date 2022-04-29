var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    title:String,
    description:String,
    tags:[String]
});

userSchema.index({tags:1});
userSchema.index({title:"text"});
userSchema.index({description:"text"});
module.exports=mongoose.model('User',userSchema);
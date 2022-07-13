const mongoose= require('mongoose');
const bcrypt= require('bcrypt');

//Schema
const Userschema= new mongoose.Schema({
    name: {
        type:String,
        required:true,
       
    },
    email: {
        type:String,
        required:true,
        unique:true,
    },
    role: {
        type: String,
        enum: ['user','admin'],
        default: 'user'
    },
    password: {
        type:String,
        required:true,
    },

});
Userschema.pre('save',async function(next){
    const salt= await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt)
    next();
});


//verifu password
Userschema.methods.isPasswordMatch=async function(enterdPassword){
return await bcrypt.compare(enterdPassword,this.password)
};


const User = mongoose.model('User', Userschema);

module.exports = User;
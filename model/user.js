const mongoose= require('mongoose');

//Schema
const Userschema= new mongoose.Schema({
    name: {
        type:String,
        required:true,
        unique:true,
    },
    email: {
        type:String,
        required:true,
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

const User = mongoose.model('User', Userschema);

module.exports = User;
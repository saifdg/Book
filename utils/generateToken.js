const  jwt= require('jsonwebtoken');

const generateToken=({id,name,role,email}=userId)=>
{
 return jwt.sign({id,name,role,email},'node',{
    expiresIn:'30d'
 })
};
module.exports= generateToken;
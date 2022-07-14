const  jwt= require('jsonwebtoken');

const generateToken=(userId)=>
{
 return jwt.sign({id:userId},'node',{
    expiresIn:'30d'
 })
};
module.exports= generateToken;
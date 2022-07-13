const asyncHandler=require('express-async-handler');
const jwt= require('jsonwebtoken');
const User = require('../model/User');


const authMiddlware = asyncHandler(async (req, res, next) => {
    let token;
   // console.log(req.headers);//
    if(
    req.headers.authorization.startsWith('Bearer')
    )
        try{
            token=req.headers.authorization.split('')[1]
            const decoded= jwt.verify(token,preocess.env.JWT_KEY)
            const user= await User.findById(decoded.id);
            req.user= user;
            next();
        } catch(error){
            res.status(401);
            throw new Error('Not authorised, invalid token');

        }
    }

)  
module.exports= authMiddlware;
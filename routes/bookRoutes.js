
const express = require('express');
const expressAsyncHandler=require('express-async-handler');
const authMiddlware = require('../middlewares/authMiddlware');
const Book=require('../model/Book');
const bookRouter = express.Router();

// create book
bookRouter.post('/', expressAsyncHandler(async(req,res)=>{
 
    const book= await Book.create(req.body);
    if(book){
        res.status(200);
        res.json(book);
    }
    else{
        res.status(500);
        throw new Error('Book creatinh failed');

    }
}))

//fetch
bookRouter.get('/', expressAsyncHandler(async(req,res)=>{

    const book= await Book.find({});
    if(book){
        res.status(200);
        res.json(book);
    }
    else{
        res.status(500);
        throw new Error('There are no books');

    }
}))

// update book//
bookRouter.put(
    '/:id', authMiddlware,
    expressAsyncHandler(async (req, res) => {
      try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body);
        res.status(200);
        res.json(book);
      } catch (error) {
        res.status(500);
        throw new Error('Update failed');
      }
    })
  );


  bookRouter.delete('/:id',expressAsyncHandler(async(req,res)=>
{
    try{
        const book= await Book.findByIdAndDelete(req.params.id);
        res.status(200);
        res.send(book);

    }
    catch(erro){
    res.json(error)
    }
}

  ))

 module.exports=bookRouter;
const mongoose= require('mongoose');

const bookSchema= new mongoose.Schema({
    category:{
         type: String,
         required:[true,'Book category is required']
    },

    title:{
        type: String,
        required:true,
   },
   author:{
    type: String,
    required:true,
},

 createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
},
{ timestamps: true }
);

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;

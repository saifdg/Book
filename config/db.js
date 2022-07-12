const mongoose=require('mongoose');
const config=require('config');
const db=config.get('DATABASE');

const connectDB = async ()=>{
    mongoose.connect(db, {
        
        useNewUrlParser: true, 
        useUnifiedTopology: true 
        
        }, err => {
        if(err) throw err;
        console.log('Connected to MongoDB!!!')
        });
};

module.exports=connectDB; 
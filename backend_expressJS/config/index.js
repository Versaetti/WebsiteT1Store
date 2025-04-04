const mongoose =require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/T1Store');
        console.log('success');
    }
    catch(error){
        console.log('failed');
    }
};

module.exports={
    connect,
    JWT_SECRET:process.env.JWT_SECRET,
};
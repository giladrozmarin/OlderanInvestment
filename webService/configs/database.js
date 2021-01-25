const mongoose = require('mongoose')
const secret = require('../configs/secrets')
const DB = `mongodb+srv://gilad:${secret.MONGO_PASSWORD}@cluster0.qhkcb.mongodb.net/ExDB?retryWrites=true&w=majority`
 
const myDB = mongoose.connect(DB, { useCreateIndex:true,useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify: false }, (err) => {
    if (err)
        console.error(err);
    else
        console.log("Connected to the mongodb"); 
});

 



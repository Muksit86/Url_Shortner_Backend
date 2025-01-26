const mongoose = require('mongoose')

async function MongoDbConnection(url){
    await mongoose.connect(url)
    .then(()=>{
        console.log("MongoDB connected")
    })
    .catch((err)=>{
        console.log(`There is an error in MongoDB connection: ${err}`)
        process.exit(1); // Exit process with failure
    })
}


module.exports = MongoDbConnection
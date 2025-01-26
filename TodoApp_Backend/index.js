require('dotenv').config()
const express = require('express')
const router = require('./routes/shortUrlRoute')
const MongoDbConnection = require('./connections/connection')

const app = express()
const port = process.env.PORT || 5000

app.use(express.json()) 
app.use(express.urlencoded({extended: false}))

app.listen(port, (err)=>{
    if(err) return console.log(`There is an error in starting server: ${err}`)
    console.log(`Server started ${port}`)
})
MongoDbConnection(process.env.MONGODB_URL)

app.use('/api', router);
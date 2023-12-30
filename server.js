const express=require('express')
const connectToDB = require('./DB/connectToDB')
const app=express()
const compression=require('compression')
const cors=require('cors')

require('dotenv').config()
const port=process.env.PORT

connectToDB()

app.use(compression())
app.use(express.json())
app.use(cors())

app.use('/user',require('./routes/user.routes'))
app.use('/product',require('./routes/product.routes'))

app.get('/',(req,res)=>{
    res.status(200).send("Hello World!")
})

app.listen(port,()=>{
    console.log(`Server Listening on port ${port}`)
})
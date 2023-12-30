const express=require('express')
const mongoose=require('mongoose');

require('dotenv').config()
const url=process.env.CONNECTIONSTRING

const connectToDB=()=>{
    mongoose.connect(url)
    const con=mongoose.connection

    con.on('open',()=>{
    console.log('Connected to database')
    })

}

module.exports=connectToDB;
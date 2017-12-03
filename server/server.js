const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./user')

const app = express()
app.use('/user', userRouter)
app.listen(9093, function() {
  console.log('11111')
})
// const DB_URL = 'mongodb://localhost:27017/imooc'
//
// mongoose.connect(DB_URL)

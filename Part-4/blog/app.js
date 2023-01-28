const config = require('./utils/config')
const express = require('express')
const app = express()
const mongoose = require('mongoose')


const url = config.MONGODB_URI

mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

  module.exports = app
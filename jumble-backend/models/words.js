const mongoose = require("mongoose")

const wordSchema = new mongoose.Schema({
        word:{
                type:String,
                unique:true
        }
},{timestamps:true})

module.exports =mongoose.model('word',wordSchema)
import mongoose from "mongoose";


const DataSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    details:{
        type:String,
        required:true
    },
    image:{
        type:Array,
        default:[],
        required:true
    },
},{timestamps:true})

const Data = mongoose.model('data',DataSchema)

export default Data
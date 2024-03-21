import express from 'express'
import Data from '../model/Data.js'
import multer from 'multer'
import cloudinary from '../config/cloundinaryConfig.js'

const dataRoutes = express.Router()

dataRoutes.post('/postdata',async(req,res)=>{
    // console.log(req.body);
    try {
        const newdata =new Data(req.body)
        const savedData = await newdata.save()
        res.send({
            success:true,
            message:'Product added Successfully',
            data:savedData
        })
    } catch (error) {
        res.send({
            success:false,
            message:error.message
        })
    }
})

dataRoutes.get('/',async(req,res)=>{
    try {
        const alldata = await Data.find()
        res.send({
            success:true,
            message:'Data Fetched successfully',
            data:alldata
        })
    } catch (error) {
        res.send({
            success:false,
            message:error.message
        })
    }
})

dataRoutes.delete('/delete/:id',async(req,res)=>{
    try {
        const res = await Data.findByIdAndDelete(req.params.id)
        res.send({
            success:true,
            message:"Product Deleted Successfully"
        })
    } catch (error) {
        res.send({
            success:false,
            message:error.message
        })
    }
})

const storage = multer.diskStorage({
    filename:(req,file,cb)=>{
        cb(null,Date.now() + file.originalname)
    }
})


dataRoutes.post('/update-upload',multer({storage:storage}).single('file'),async(req,res)=>{
    console.log("entered DB",req.body);
    try {
        const result = await cloudinary.uploader.upload(req.file.path,{
            folder:"task2"
           })
           const productId = req.body.productId
           await Data.findByIdAndUpdate(productId,{
            $set:{image:result.secure_url}
           }) 
           res.send({
            success:true,
            message:"Updated Successfully",
            data:result.secure_url
           })
    } catch (error) {
        console.log("error",error.message);
        res.send({
            success:false,
            message:error.message
        }) 
    }
})

export default dataRoutes
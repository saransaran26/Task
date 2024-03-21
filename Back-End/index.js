import express from 'express'
import mongoose from 'mongoose'
import dataRoutes from './routes/dataRoutes.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

const DBURL = "mongodb+srv://saranchakravarthy26:company@company.pn3bc8j.mongodb.net/?retryWrites=true&w=majority&appName=company"
mongoose.connect(DBURL).then(()=>console.log("MongoDB connected")).catch((error)=>console.log(error.message))

app.use('/',dataRoutes)

app.listen(3000,()=>{
    console.log('server is running on port 3000');
})
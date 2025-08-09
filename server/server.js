import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import {clerkMiddleware, requireAuth} from '@clerk/express'
import aiRouter from './routes/aiRoutes.js'
import connectCloudinary from './configs/cloudinary.js'
import userRouter from './routes/userRoutes.js'

const app= express()
const PORT = process.env.PORT || 3000;

await connectCloudinary()

//middlewares
app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())

//routes
app.get('/' , (req,res)=> {
    res.send('Server is live')
})

app.use(requireAuth()) //authneticates user and redirect un-auth users to sign-in page

app.use('/api/ai', aiRouter)
app.use('/api/user' , userRouter)

app.listen(PORT , ()=>{
    console.log(` server running at ${PORT}`)
})
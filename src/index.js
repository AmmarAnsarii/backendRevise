import dotenv from 'dotenv'
import connectDB from './db/index.js';
import express from 'express'

const app = express()

dotenv.config({
    path: './.env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`App is running on port: ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGODB connection has failed, this was written in the promise",err);
})













/*
;( async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("Error", (error)=>{
            console.log("Some error has occured: ", error);
            throw error;
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("ERROR OCCURED", error);
        throw error;
    }
})
()
*/
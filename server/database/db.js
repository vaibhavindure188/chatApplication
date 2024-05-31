import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const PASSWARD = process.env.PASSWARD;
const USER = process.env.USER;

const  Connection = async () =>{

        const URL = 'mongodb://127.0.0.1:27017/mydb'
    try{
        await mongoose.connect(URL, {useUnifiedTopology:true}); 
        console.log("database connected successfully "); 
    }
    catch(error){
        console.log("error while conncecting with database ", error.message);
    }
}

export default Connection;

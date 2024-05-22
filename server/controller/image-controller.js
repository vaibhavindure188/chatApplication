import mongoose  from "mongoose"
// import { Grid } from "gridfs-stream"
import grid from 'gridfs-stream'

let gfs, gridFsBucket;
const conn = mongoose.connection;
conn.once('open',()=>{
     gridFsBucket = new mongoose.mongo.GridFSBucket(conn.db,{bucketName:'fs'});
     gfs = grid(conn.db, mongoose.mongo)
     gfs.collection('fs')
})

const url = 'http://localhost:8000'
export const uploadFile = async(request, response,next) =>{
    try{
        if(!request.file) return response.status(404).json("no file found")
        console.log(request.file)
    }catch(e){
        console.log('error while getting image url ', e)
    }
}  

export const getImage = async(req, res) =>{
        try{
                const file = await gfs.files.findOne({filename:req.params.filename})
                const readStream = gridFsBucket.openDownloadStream(file._id)
                readStream.pipe(res);
        }catch(e){
                return res.status(500).send("error while processing getImage api"+e)
        }
}
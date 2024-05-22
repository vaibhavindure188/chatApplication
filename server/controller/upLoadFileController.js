// import { MongoClient, GridFSBucket } from 'mongodb';

// let db;
// let bucket;

// (async () => {
//     const client = new MongoClient('mongodb://127.0.0.1:27017/mydb', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     });
//     await client.connect();
//     db = client.db();
//     bucket = new GridFSBucket(db);
// })();
// const url = 'http://localhost:8000'
// const uploadFile = async (req, res) => {
//     try{

    
//     if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

//     const readableStream = require('fs').createReadStream(req.file.path);
//     const uploadStream = bucket.openUploadStream(req.file.originalname);

//     readableStream.pipe(uploadStream);

//     uploadStream.on('error', () => {
//         res.status(500).json({ message: 'File upload failed' });
//     });

//     uploadStream.on('finish', () => {
//         res.status(200).json({ message: 'File uploaded successfully' });
//         // const imageUrl = `${url}/file/${request.file.filename}`
//         //  return response.status(200).json(imageUrl)
//         //  response.status(200).json('image controller success') 
//     });
// } catch (err){
//     return res.status(501).json("error while processing uplad file ", err)
// };
// }

// export default uploadFile;


import { MongoClient, GridFSBucket } from 'mongodb';
import path from 'path';

let db;
let bucket;

(async () => {
    const client = new MongoClient('mongodb://127.0.0.1:27017/mydb', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    await client.connect();
    db = client.db();
    bucket = new GridFSBucket(db);
})();

const uploadFile = async (req, res) => {
    if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

    const filePath = path.join(__dirname, '..', 'uploads', req.file.filename); // Adjust the path as needed
    const readableStream = require('fs').createReadStream(filePath);
    const uploadStream = bucket.openUploadStream(req.file.originalname);

    readableStream.pipe(uploadStream);

    uploadStream.on('error', () => {
        res.status(500).json({ message: 'File upload failed' });
    });

    uploadStream.on('finish', () => {
        res.status(200).json({ message: 'File uploaded successfully' });
    });
};

export default uploadFile;


import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const storage = new GridFsStorage({
    url: 'mongodb://127.0.0.1:27017/mydb',
    options: { useUnifiedTopology: true, useNewUrlParser: true },
    file: (req, file) => {
        const match = ['image/jpg', 'image/jpeg', 'image/png'];
        // if (match.indexOf(file.mimetype) === -1) {
            return {
                bucketName: 'photos',
                filename: `${Date.now()}-file-${file.originalname}` 
            };
        // }
        // return `${Date.now()}-file-${file.originalname}`; 
    }  
});

export default multer({ storage });  


import express from 'express';
import { addUser, getUser } from '../controller/User-Controller.js';
import { newConversation,getConversation } from '../controller/Conversation-Controller.js';
import { getMessages, newMessage } from '../controller/Message_Controller.js';
import { uploadFile } from '../controller/image-controller.js';

import  upload  from '../utils/upload.js' ;

import { getImage } from '../controller/image-controller.js';
const route = express.Router();
 route.post ('/add', addUser)
 route.get('/users', getUser); 
 
 route.post('/conversation/add',newConversation);
 route.post('/conversation/get',getConversation);
 route.post('/message/add', newMessage );
 route.get('/message/get/:idd', getMessages);  

 route.post('/file/upload', upload.single('file'), (req,res,next) =>{ // if we remove upload.single('file'), then it works
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }
    return res.status(200).json({ message: 'File uploaded successfully', data: req.data });
 })


 route.get('/file/:filename', getImage) 
export default route;
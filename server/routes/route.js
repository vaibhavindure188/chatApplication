import express from 'express';
import { addUser, getUser } from '../controller/User-Controller.js';
import { newConversation,getConversation } from '../controller/Conversation-Controller.js';
import { getMessages, newMessage } from '../controller/Message_Controller.js';

const route = express.Router();
 route.post ('/add', addUser)
 route.get('/users', getUser); 
 
 route.post('/conversation/add',newConversation);
 route.post('/conversation/get',getConversation);
 route.post('/message/add', newMessage );
 route.post('/message/get', getMessages);
export default route;
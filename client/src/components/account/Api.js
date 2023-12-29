import axios from 'axios';

const url ='http://localhost:8000';

export const  addUser = async (data) =>{
    try{
        await axios.post(`${url}/add`, data);
    }
    catch(e){
        console.log("error occur while calling adduser ", e.message);
    }
}

export const getUser = async() =>{
    try{
        let response = await axios.get(`${url}/users`);
        // console.log(response);
        return response.data;
    }
    catch(e){
        console.log("error while calling get api " , e.message);
    }
    
}

export const setConversation = async(data) =>{
    try{
        await axios.post(`${url}/conversation/add`,data);
         
    }catch(e){
        console.log("error while calling get api " ,e.message);
    }
}

export const getConversation = async(data1)=>{
    try{
         let response = await axios.post(`${url}/conversation/get`,data1);
         return response.data;
    }
    catch(e){
        console.log("error while calling get conversatin api ", e.message);
    }
}

export const newMessage = async(data1)=>{
    try{
        await axios.post(`${url}/message/add`, data1);
    }
    catch(e){
        console.log("error while calling new message api ", e.message);
    }
}

export const getMessages = async(id)=>{
    try{
            let response = await axios.post(`${url}/message/get`,id);
            return response.data;
    }
    catch(e){
        console.log("error while calling get message api ", e.message);
    }
}


 
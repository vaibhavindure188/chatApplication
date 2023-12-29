import conversation from "../model/Conversation.js";

export const newConversation = async(request,response) =>{
    try{
        const senderId = request.body.senderId;
        const receiverId = request.body.receiverId;
        const exist = await conversation.findOne({member:{$all:[receiverId,senderId]}});
        if(exist){
            return response.status(200).json('conversation already exist');
        }
        const newConversation = new conversation({
            member:[senderId,receiverId]
        })
        await newConversation.save(); 
        return response.status(200).json('conversation saved successfully');

    }catch(e){
        return response.status(500).json(e.message);
    } 
}

export const getConversation = async(request, response)=>{
    try{
        const senderId = request.body.senderId;
        const receiverId = request.body.receiverId;
       let newconversation = await  conversation.findOne({member:{$all: [receiverId,senderId]}});
       return response.status(200).json(newconversation);
    }
    catch(e){
        return response.status(500).json(e.message);
    }
}
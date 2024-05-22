import message from "../model/Messages.js"
import conversation from "../model/Conversation.js";

export const newMessage = async (request,response)=>{
    try{
        
        const newMessage = new message(request.body);
        await newMessage.save();
        await conversation.findByIdAndUpdate(request.body.conversationId , { $set: { message: request.body.text } });
        return response.status(200).json('message has been send successfully');

    }   
    catch(e){
        return response.status(500).json('error while processing newmessage in server ', e.Message);
    }
}

export const getMessages = async(request, response)=>{
    try{
            // consoloe.log(request.bosy);
            const userId = request.params.idd;
            const messages = await message.find({conversationId:userId});
            return response.status(200).json(messages); 
    }
    catch(e){
        return response.status(500).json('erro while processing get messages api', e.message);
    }
}
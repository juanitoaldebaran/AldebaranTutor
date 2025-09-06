import type { ChatRequest, MessageResponse } from "@/types/conversation";
import api from "@/config/api";

async function sendMessage(chatRequest: ChatRequest, conversationId: number): Promise<MessageResponse[]> {
    try {   
        const response = await api.post(`/ai/conversations/${conversationId}/messages`, chatRequest);
        console.log("Message has been created!");
        return response.data;
    } catch (error: any) {
        console.error(error?.response?.data?.message || "Failed to fetch user conversations");
        throw new Error("Failed to fetch conversation for user");
    }
}

async function getConversationMessages(conversationId: number): Promise<MessageResponse[]> {
    try {   
        const response = await api.get(`/ai/conversations/${conversationId}/messages`);
        console.log("Successfully fetch conversation messages");
        return response.data;
    } catch (error: any) {
        console.error(error?.response?.data?.message || "Failed to fetch conversation messages");
        throw new Error("Failed to fetch conversation for messages for user");
    }
}

async function getAllMessages(): Promise<MessageResponse[]> {
    try {   
        const response = await api.get("/ai/conversations/messages/all");
        console.log("Fetch all conversations has been successfull!");
        return response.data;
    } catch (error: any) {
        console.error(error?.response?.data?.message || "Failed to fetch user conversations");
        throw new Error("Failed to fetch conversation for user");
    }
}

export default {
    sendMessage,
    getConversationMessages,
    getAllMessages
}
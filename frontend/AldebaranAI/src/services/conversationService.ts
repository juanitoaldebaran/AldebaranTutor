import type { ChatRequest, Conversation, ConversationRequest, ConversationResponse, MessageResponse } from "@/types/conversation";
import api from "@/config/api";

async function createConversation(conversationRequest: ConversationRequest): Promise<MessageResponse> {
    try {   
        const response = await api.post("/ai/conversations", conversationRequest);
        console.log("Conversation successfully created!");
        return response.data;
    } catch (error: any) {
        console.error(error?.response?.data?.message || "Failed to create conversation");
        throw new Error("Failed to create conversation for user");
    }
}

async function getUserConversations(): Promise<ConversationResponse[]> {
    try {   
        const response = await api.get("/ai/conversations");
        console.log("Fetch all conversations has been successfull!");
        return response.data;
    } catch (error: any) {
        console.error(error?.response?.data?.message || "Failed to fetch user conversations");
        throw new Error("Failed to fetch conversation for user");
    }
}

async function searchUserConversation(term: string): Promise<ConversationResponse[]> {
    try {   
        const response = await api.post("/ai/conversations/search", term);
        console.log("Search conversation: ", term);
        return response.data;
    } catch (error: any) {
        console.error(error?.response?.data?.message || "Failed to search conversation");
        throw new Error("Failed to search conversation for user");
    }
} 

async function getAllConversations(): Promise<Conversation[]> {
    try {   
        const response = await api.get("/ai/conversations");
        console.log("Fetch all conversations has been successfull!");
        return response.data;
    } catch (error: any) {
        console.error(error?.response?.data?.message || "Failed to fetch user conversations");
        throw new Error("Failed to fetch conversation for user");
    }
}


export default {
    createConversation,
    getUserConversations,
    searchUserConversation,
    getAllConversations
}

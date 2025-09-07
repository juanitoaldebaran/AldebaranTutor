import type { User } from "./auth";
import type { Messages } from "./messages";

export interface Conversation {
    conversationId: number;
    user: User;
    name: string;
    createdAt: number;
    messagesList: Messages[];
}

export interface ChatRequest {
    message: string;
    createdAt: string;
}

export interface ConversationRequest {
    firstMessage: string;
}

export interface ConversationResponse {
    conversationId: number;
    name: string;
    createdAt: number;
}

export interface MessageResponse {
    content: string;
    senderType: string;
    createdAt: string;
}
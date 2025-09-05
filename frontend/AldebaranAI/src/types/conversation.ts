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
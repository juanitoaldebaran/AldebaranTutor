import type { Conversation } from "./conversation";

export interface Messages {
    messagesId: number;
    conversation: Conversation;
    content: string;
    senderType?: "BASIC" | "PRO" | "PREMIUM";
    createdAt: number;
    tokenCount: number;
    processingTimeMs: number;
}
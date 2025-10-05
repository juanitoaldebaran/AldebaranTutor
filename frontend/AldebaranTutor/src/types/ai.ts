export interface Chat {
    chatId: number;
    chatContent: string;
    senderType: 'AI' | 'USER';
    createdAt: number;
}

export interface ChatRequest {
    chatText: string;
    createdAt: number;
}

export interface ChatResponse {
    textContent: string;
    senderType: 'AI' | 'USER';
    createdAt: number;
}

export interface AIQuizResponse {
    sector: 'IT' | 'FINANCE' | 'ENGINEERING';
    level: 'EASY' | 'MEDIUM' | 'HARD';
    quizJsonResponse: string;
}


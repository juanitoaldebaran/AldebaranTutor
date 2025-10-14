import useNotification from "@/hooks/useNotification";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import Notification from "./Notification";
import type { ChatResponse } from "@/types/ai";
import { Bot, Paperclip, Send, Trash, User } from "lucide-react";

const AIChatbot: React.FC = () => {
    const [chatMessages, setChatMessages] = useState<ChatResponse[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [inputText, setInputText] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const {notification, showNotification, hideNotification} = useNotification();
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const fetchMessages = async () => {
            setIsLoading(true);
            try {
                const response = await fetch("http://localhost:8080/ai/chat/history");
                if (response.ok) {
                    const data = await response.json();
                    
                    if (Array.isArray(data) && data.length > 0) {
                        setChatMessages(data);
                    } else {
                        const welcomeMessage: ChatResponse = {
                            textContent: "👋🏽 Welcome to AldebaranTutor AI Chatbot! I'm here to help you study IT, Finance, and Engineering topics. Please ask me anything!",
                            senderType: "AI",
                            createdAt: new Date().getTime(),
                        };
                        setChatMessages([welcomeMessage]);
                    }
                } else {
                    const welcomeMessage: ChatResponse = {
                        textContent: "👋🏽 Welcome to AldebaranTutor AI Chatbot! I'm here to help you study IT, Finance, and Engineering topics. Please ask me anything!",
                        senderType: "AI",
                        createdAt: new Date().getTime(),
                    };
                    setChatMessages([welcomeMessage]);
                }
            } catch (error) {
                console.error("Failed to fetch messages", error);
                showNotification("Failed to fetch messages", "error");
                
                const welcomeMessage: ChatResponse = {
                    textContent: "👋🏽 Welcome to AldebaranTutor AI Chatbot! I'm here to help you study IT, Finance, and Engineering topics. Please ask me anything!",
                    senderType: "AI",
                    createdAt: new Date().getTime(),
                };
                setChatMessages([welcomeMessage]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMessages();
    }, []);

    const sendMessage = async () => {

        if (!inputText.trim() && !file) return;

        setIsLoading(true);
        setIsTyping(true);

        try {

            const formData = new FormData();
            
            if (inputText.trim()) {
                formData.append("chatText", inputText.trim());
            }

            if (file) {
                formData.append("file", file);
            }

            const response = await fetch("http://localhost:8080/ai/chat/send", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                const data = await response.json();
                setChatMessages(data);
            } else {
                console.error("Failed to send message. Server returned:", response.status);
            }

        } catch (error) {
            console.error("Error sending message", error);
        } finally {
            setInputText("");
            setFile(null);
            setIsLoading(false);
            setIsTyping(false);
            inputRef.current?.focus();
        }
    };
    const clearChat = async () => {
        if (!window.confirm("Are you sure you want to clear the chat history?")) return;

        try {
            const response = await fetch("http://localhost:8080/ai/chat/clear", {
                method: 'DELETE'
            });

            if (response.ok) {
                const welcomeMessage: ChatResponse = {
                    textContent: "Chat cleared! Please ask me anything about IT, Finance, and Engineering topics",
                    senderType: "AI",
                    createdAt: new Date().getTime(),
                };
                
                setChatMessages([welcomeMessage]);
            }
        } catch (error) {
            console.error("Failed to delete messages", error);
            showNotification("Failed to clear chat", "error");
        }
    };

    const formatTime = (dateNumber: number) => {
        const date = new Date(dateNumber);
        return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };
    
    const handleSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) setFile(file);
    }

    const triggerFileInput = () => {
        document.getElementById("fileInput")?.click();
    };

    return (
        <div className="min-h-screen p-4 mt-20">
            <div className="max-w-4xl mx-auto h-screen flex flex-col">
                <div className="bg-white/10 backdrop-blur-lg rounded-t-3xl p-6 border-b-1">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <div className="absolute inset-0 rounded-full blur-lg opacity-50"></div>
                                <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg">
                                    <Bot className="w-8 h-8 text-white rounded-lg" />
                                </div>
                            </div>
                            <div>
                                <h1 className="text-white font-bold text-3xl flex items-center">
                                    AldebaranTutor AI Chatbot
                                </h1>
                                <p className="text-white">
                                    Always here to help you grow 🚀
                                </p>
                            </div>
                        </div>
                        <div>
                            <button
                                onClick={clearChat}
                                disabled={isLoading}
                                className="p-2 text-white bg-indigo-700 hover:bg-indigo-800 rounded-lg cursor-pointer flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all">
                                <Trash className="w-4 h-5" />
                                Clear Chat
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex-1 bg-gray-900/50 backdrop-blur-lg overflow-y-auto p-6 space-y-4 rounded-b-xl">
                    {isLoading && chatMessages.length === 0 ? (
                        <div className="flex items-center justify-center h-full">
                            <div className="text-white text-lg">Loading messages...</div>
                        </div>
                    ) : (
                        <>
                            {chatMessages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`flex gap-3 ${message.senderType === "USER" ? 'justify-end' : 'justify-start'}`}
                                >
                                    {message.senderType === "AI" && (
                                        <div className="flex-shrink-0">
                                            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full">
                                                <Bot className="w-5 h-5 text-white" />
                                            </div>
                                        </div>
                                    )}

                                    <div
                                        className={`max-w-3xl ${message.senderType === "USER"
                                            ? "bg-blue-500"
                                            : "bg-white/10 border border-white/20"
                                            } rounded-2xl p-4 shadow-lg`}
                                    >
                                        <p className="text-white whitespace-pre-wrap leading-relaxed">
                                            {message.textContent}
                                        </p>
                                        <p className="text-white text-xs mt-4">{formatTime(message.createdAt)}</p>
                                    </div>

                                    {message.senderType === "USER" && (
                                        <div className="flex-shrink-0">
                                            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full">
                                                <User className="w-5 h-5 text-white" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}

                            {isTyping && (
                                <div className="flex gap-3 justify-start">
                                    <div className="flex-shrink-0">
                                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full">
                                            <Bot className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                    <div className="bg-white/10 border border-white/20 rounded-2xl p-4">
                                        <div className="flex gap-2">
                                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                                            <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef}></div>
                        </>
                    )}
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-b-3xl p-6 border-t border-white/10">
                    <div className="flex gap-3 items-center relative">
                        <input 
                                id="fileInput"
                                type="file"
                                onChange={handleSelectFile}
                                className="hidden"
                        />
                        <div className="relative w-full">
                            <button
                            onClick={triggerFileInput}
                            type="button"
                            disabled={isLoading}
                            className="absolute z-10 right-3 top-4 text-white cursor-pointer"
                            >
                                <Paperclip />
                            </button>
                            <input
                                ref={inputRef}
                                type="text"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Enter your question here...."
                                disabled={isLoading}
                                className="w-full text-white py-4 px-6 border-1 rounded-2xl hover:scale-101 duration-200 bg-white/5 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            />
                        </div>
                        <button
                            onClick={sendMessage}
                            disabled={isLoading || !inputText.trim()}
                            className="bg-green-600 px-6 py-4 text-white flex items-center gap-2 rounded-2xl hover:bg-green-800 hover:scale-101 duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
                            <Send />
                            Send
                        </button>
                    </div>
                    <p className="text-gray-400 text-xs mt-4 text-center">
                        Press Enter to send • Shift + Enter for new line
                    </p>
                </div>
            </div>

            <Notification
                message={notification.message}
                type={notification.type}
                isVisible={notification.isVisible}
                onClose={hideNotification}
                duration={3000}
                position="top-center"
            />
        </div>
    );
};

export default AIChatbot;